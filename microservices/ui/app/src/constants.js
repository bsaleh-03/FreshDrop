export const appName = "XMart Delivery";

export const clusterName = "spelunking68";

export const GRAPHQL_URL = `https://data.${clusterName}.hasura-app.io/v1alpha1/graphql`;
export const AUTH_URL = `https://auth.${clusterName}.hasura-app.io/v1`;

export const BEARER_TOKEN = "3e4da521ccdcb77f174235cfdaddc463595d4624e3874df6";

export const LOGIN_URL = `${AUTH_URL}/login`;
export const SIGNUP_URL = `${AUTH_URL}/signup`;
export const USER_URL = `${AUTH_URL}/user`;

export const CHANGE_URL = `${USER_URL}/change-password`;
export const FORGOT_URL = `${USER_URL}/forgot-password`;
export const RESET_URL = `${USER_URL}/reset-password`;
export const SESSION_URL = `${USER_URL}/info`;
