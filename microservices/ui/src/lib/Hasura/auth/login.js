import HasuraAPI from "lib/Hasura";

const authenticateLogin = async (data) => {
    let requestOptions = {
        "method": "POST",
        "headers": HasuraAPI.Util.buildDefaultHeaders()
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
        return await fetch(HasuraAPI.Client.LOGIN_URL, requestOptions);
    } catch (e) {
        console.error('Hasura Request Failed: ' + e);
    }

};

export default authenticateLogin;