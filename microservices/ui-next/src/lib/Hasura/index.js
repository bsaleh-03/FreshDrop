import authenticateLogin from "lib/Hasura/auth/login";
import registerUser from "lib/Hasura/auth/register";

const PROTOCOL = "https://";
const DOMAIN = "xmartdelivery.com";

const getUrl = (msName) => {
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
const BEARER_TOKEN = localStorage.getItem("auth_token");

// Request Header Builder
const buildDefaultHeaders = () => {
    return {
        "Content-Type": "application/json",
    };
};

const buildHeaders = () => {
    const headers = {
        "Content-Type": "application/json",
    };

    if (BEARER_TOKEN) {
        headers["X-Hasura-Role"] = "user";
        headers["Authorization"] = `Bearer ${BEARER_TOKEN}`;
    }

    return headers;
};

const buildAuthProviderHeaders = () => ({
    method: "GET",
    headers: buildHeaders
});

// Auth Request Builder
const login = async (data) => {
    try {
        // Try to authenticate the user
        let response = await authenticateLogin(data);

        // Get json
        return await response.json();
    } catch (e) {
        console.error(e);
    }
};

const register = async (data) => {
    try {
        // Try to register the user
        let response = await registerUser(data);

        // Get json
        return await response.json();
    } catch (e) {
        console.error(e);
    }
};

const setUserInfo = async (registerResponsePayload) => {
    try {
        // Try to set the info of the registered user
        let response = await setUserInfo(registerResponsePayload);

        // Get json
        return await response.json();
    } catch (e) {
        console.error(e);
    }
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
        buildDefaultHeaders,
        buildAuthProviderHeaders,
        buildHeaders
    },
    Auth: {
        login,
        register,
        setUserInfo
    }
};