import HasuraAPI from "lib/Hasura";

export const activateUser = async (token) => {
    try {
        // Build params for GET request
        let requestOptions = {
            "method": "GET",
            "headers": HasuraAPI.Util.buildDefaultHeaders()
        };

        // Build verification url with token
        const url = new URL(HasuraAPI.Client.VERIFY_EMAIL_URL);
        url.search = new URLSearchParams({
            token: token
        });

        // Try to activate the user
        return await fetch(url, requestOptions);
    } catch (e) {
        console.error(e);
    }
};

export default activateUser;