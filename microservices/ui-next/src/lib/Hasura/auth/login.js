import HasuraAPI from "lib/Hasura";

export const authenticate = async (url, data) => {
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
        return await fetch(url, requestOptions);
    } catch (e) {
        console.log('Request Failed:' + e);
    }

};