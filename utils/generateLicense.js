import axios from 'axios';

const getLicense = async (userResponses) => {
    const gitHubLicenseApi = `https://api.github.com/licenses/${userResponses.license}`;
    try {
        const resp = await axios.get(gitHubLicenseApi);
        const licenseData = {
            spdx_id: resp.data.spdx_id,
            body: resp.data.body,
        };
        return licenseData;
    } catch (error) {
        // Handle Error Here
        console.error(error.response.data.error);
    }
};

export { getLicense };
