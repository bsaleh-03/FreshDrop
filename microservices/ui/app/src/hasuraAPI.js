const DOMAIN = "xmartdelivery.com";
const PROTOCOL = "https://";

const getUrl = function (msName) {
    if (msName != null) {
        return PROTOCOL + `${msName}.` + DOMAIN;
    } else {
        return PROTOCOL + DOMAIN;
    }
};

// Micro service Endpoints
const AUTH_URL = getUrl("auth") + "/v1";
const DATA_URL = getUrl("data");

// Query Endpoints
const QUERY_URL = DATA_URL + "/v1/query";

// GraphQL Endpoints
const GRAPHQL_URL = DATA_URL + "/v1alpha1/graphql";

// Bearer Token
const BEARER_TOKEN = "0e09ec617d8cf75ecb20236c8e0fd3e75f79f97acca0eb2f";

// Request Header Builder
const buildHeaders = function () {
    return {
        "Content-Type": "application/json",
        "X-Hasura-Role": "admin",
        "Authorization": `Bearer ${BEARER_TOKEN}`
    };
};

export default {
    Client: {
        // Client Authentication Endpoints
        LOGIN_URL: AUTH_URL + "/login",
        REGISTER_URL: AUTH_URL + "/register",
        VERIFY_EMAIL_URL: AUTH_URL + "/providers/email/verify-email",
        FORGOT_PASSWORD_URL: AUTH_URL + "/providers/email/forgot-password",
        RESET_PASSWORD_URL: AUTH_URL + "/providers/email/reset-password",
        CHANGE_PASSWORD_URL: AUTH_URL + "/change-password",
        FORGOT_PASSWORD_PAGE_URL: AUTH_URL + "/forgot-password",
        RESET_PASSWORD_PAGE_URL: AUTH_URL + "/reset-password",
        SESSION_INFO_URL: AUTH_URL + "/user/info",
    },
    GraphQL: GRAPHQL_URL,
    Query: QUERY_URL,
    Token: BEARER_TOKEN,
    Util: {
        buildHeaders
    }
};