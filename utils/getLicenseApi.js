/* ---------------------------- external modules ---------------------------- */
import axios from 'axios';

/* ------------------------- get license from github ------------------------ */
const getLicense = async (licenseSpdxID) => {
    const gitHubLicenseApi = `https://api.github.com/licenses/${licenseSpdxID}`;
    try {
        const resp = await axios.get(gitHubLicenseApi);
        const licenseData = {
            spdx_id: resp.data.spdx_id,
            name: resp.data.name,
            body: resp.data.body,
        };
        return licenseData;
    } catch (error) {
        // Handle Error Here
        console.error(error.response.data.error);
    }
};

export { getLicense };
