import axios from 'axios';

const getGitHubUserInfo = async (gitHubUserName) => {
    const gitHubApiUrl = `https://api.github.com/users/${gitHubUserName}`;
    try {
        const resp = await axios.get(gitHubApiUrl);
        const userInfo = {
            avatar: resp.data.avatar_url,
        };
        return userInfo;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

export { getGitHubUserInfo };
