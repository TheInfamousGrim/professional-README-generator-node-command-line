import axios from 'axios';

const getLicense = async () => {
    const gitHubLicenseApi = `https://api.github.com/licenses/MIT`;
    try {
        const resp = await axios.get(gitHubLicenseApi);
        const licenseData = {
            spdx_id: resp.data.spdx_id,
            body: resp.data.body,
        };
        return licenseData;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

export { getLicense };
