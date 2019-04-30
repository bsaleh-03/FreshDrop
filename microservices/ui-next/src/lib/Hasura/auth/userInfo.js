import HasuraAPI from "lib/Hasura";

export const setHasuraUserInfo = async (data) => {
    let requestOptions = {
        "method": "POST",
        "headers": HasuraAPI.Util.buildDefaultHeaders()
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
        return await fetch(HasuraAPI.Query, requestOptions);
    } catch (e) {
        console.log('Request Failed:' + e);
    }
};

export default setHasuraUserInfo;