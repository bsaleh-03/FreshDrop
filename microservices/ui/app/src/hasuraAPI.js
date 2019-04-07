const DEVMODE = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const PROTOCOL = DEVMODE ? "https://" : "http://";

const INTERNAL_DOMAIN = "hasura";
const EXTERNAL_DOMAIN = "xmartdelivery.com";

const getUrl = function (msName) {
    let DOMAIN = DEVMODE ? EXTERNAL_DOMAIN : INTERNAL_DOMAIN;

    if (msName != null) {
        return PROTOCOL + msName + DOMAIN;
    } else {
        return PROTOCOL + DOMAIN;
    }
};

// Micro service Endpoints
const AUTH_URL = getUrl("auth");
const DATA_URL = getUrl("data");
const FILESTORE_URL = getUrl("filestore");
const NOTIFY_URL = getUrl("notify");

// Query Endpoints
const QUERY_URL = DATA_URL + "/v1/query";

// GraphQL Endpoints
const GRAPHQL_URL = DATA_URL + "/v1alpha1/graphql";

// Bearer Token
const BEARER_TOKEN = "0e09ec617d8cf75ecb20236c8e0fd3e75f79f97acca0eb2f";

export default {
    Client: {
        // Client Authentication Endpoints
        LOGIN_URL: AUTH_URL + "/login",
        REGISTER_URL: AUTH_URL + "/register",
        FORGOT_PASSWORD_URL: AUTH_URL + "/providers/email/forgot-password",
        RESET_PASSWORD_URL: AUTH_URL + "/providers/email/reset-password",
        CHANGE_PASSWORD_URL: AUTH_URL + "/change-password",
        FORGOT_PASSWORD_PAGE_URL: AUTH_URL + "/forgot-password",
        RESET_PASSWORD_PAGE_URL: AUTH_URL + "/reset-password",
        SESSION_INFO_URL: AUTH_URL + "/user/info",
    },
};