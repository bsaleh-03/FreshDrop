import HasuraAPI from "lib/Hasura";

const registerUser = async (data) => {
    let requestOptions = {
        "method": "POST",
        "headers": HasuraAPI.Util.buildHeaders()
    };

    let body = {
        "provider": "email",
        "data": {
            "email": (data.email).toLowerCase(),
            "password": data.password
        }
    };

    requestOptions.body = JSON.stringify(body);

    try {
        return await fetch(HasuraAPI.Client.REGISTER_URL, requestOptions);
    } catch (e) {
        console.error('Request Failed: ' + e);
    }
};

export default registerUser;