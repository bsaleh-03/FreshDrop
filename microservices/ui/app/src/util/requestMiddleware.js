import boom from "boom";

function checkResponse(response) {
    if (response.status == 200){
        return response;
    }
    // 4xx HTTP Client Error Code
    else if (response.status == 400){
        console.error("Client error: ", response);
        throw boom.badRequest(response);
    }
    else if (response.status == 401) {
        console.error("Client error: ", response);
        throw boom.unauthorized(response);
    }
    else if (response.status == 403) {
        console.error("Client error: ", response);
        throw boom.forbidden(response);
    }
    else if (response.status == 404) {
        console.error("Client error: ", response);
        throw boom.notFound(response)
    }
    else if (response.status == 405) {
        console.error("Client error: ", response);
        throw boom.methodNotAllowed(response);
    }
    else if (response.status == 406) {
        console.error("Client error: ", response);
        throw boom.notAcceptable(response);
    }
    else if (response.status == 407) {
        console.error("Client error: ", response);
        throw boom.proxyAuthRequired(response);
    }
    else if (response.status == 408) {
        console.error("Client error: ", response);
        throw boom.clientTimeout(response);
    }
    else if (response.status == 409) {
        console.error("Client error: ", response);
        throw boom.conflict(response);
    }
    else if (response.status == 410) {
        console.error("Client error: ", response);
        throw boom.resourceGone(response);
    }
    else if (response.status == 411) {
        console.error("Client error: ", response);
        throw boom.lengthRequired(response);
    }
    else if (response.status == 412) {
        console.error("Client error: ", response);
        throw boom.preconditionFailed(response);
    }
    else if (response.status == 413) {
        console.error("Client error: ", response);
        throw boom.entityTooLarge(response);
    }
    else if (response.status == 414) {
        console.error("Client error: ", response);
        throw boom.uriTooLong(response);
    }
    else if (response.status == 415) {
        console.error("Client error: ", response);
        throw boom.unsupportedMediaType(response);
    }
    else if (response.status == 416) {
        console.error("Client error: ", response);
        throw boom.rangeNotSatisfiable(response);
    }
    else if (response.status == 417) {
        console.error("Client error: ", response);
        throw boom.expectationFailed(response);
    }
    else if (response.status == 429) {
        console.error("Client error: ", response);
        throw boom.tooManyRequests(response)
    }
    // 5xx HTTP Server Error Code
    else if (response.status === 500) {
        var error = new Error('Unexpected input');
        boom.boomify(error, { statusCode: 400 });

        console.error("Server error", response);
        throw boom.unauthorized(response);
    }
    else if (response.status == 501) {
        console.error("Server error: ", response);
        throw boom.notImplemented(response);
    }
    else if (response.status == 502) {
        console.error("Server error: ", response);
        throw boom.badGateway(response);
    }
    else if (response.status == 503) {
        console.error("Server error: ", response);
        throw boom.serverUnavailable(response);
    }
    else if (response.status == 504) {
        console.error("Server error: ", response);
        throw boom.gatewayTimeout(response);
    }
    else if (response.status >= 500) {
        const error = new Error('Server error');
        console.error("server error: ", response);
        throw error;
    }
    else if (response.status >= 400) {
        const error = new Error('Client error');
        console.error("Client error: ", response);
        throw error;
    }
    else {
        const error = new Error('HTTP error with response');
        console.error("HTTP error: ", response);
        throw error;
    }
}

export {
    checkResponse
};