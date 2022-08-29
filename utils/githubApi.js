import axios from 'axios';

const getGitHubUserInfo = async (gitHubUserName) => {
    const gitHubApiUrl = `https://api.github.com/users/${gitHubUserName}`;
    try {
        const resp = await axios.get(gitHubApiUrl);
        console.log(resp.data);
        const gitHubInfo = {
            avatar: resp.data.avatar_url,
            url: resp.data.html_url,
        };
        return gitHubInfo;
    } catch (error) {
        // Handle Error Here
        console.log(error.response.data.error);
    }
};

export { getGitHubUserInfo };
