import HasuraAPI from "lib/Hasura";

async function setUserInfo(url, data) {
    let requestOptions = {
        "method": "POST",
        "headers": HasuraAPI.Util.buildHeaders()
    };

    let body = {
        "type": "insert",
        "args": {
            "table": "user_info",
            "objects": [
                {
                    "hasura_id": data.hasura_id,
                    "name": (data.name).toLowerCase()
                }
            ]
        }
    };

    requestOptions.body = JSON.stringify(body);

    try {
        return await fetch(url, requestOptions);
    } catch (e) {
        console.log('Request Failed:' + e);
    }
}