export const appName = "XMart Delivery";

export const clusterName = "spelunking68";

export const GRAPHQL_URL = `https://data.${clusterName}.hasura-app.io/v1alpha1/graphql`;
export const AUTH_URL = `https://auth.${clusterName}.hasura-app.io/v1`;

export const BEARER_TOKEN = "99363a6827fd97d08142cca5672eef961364c9a68425d08c";

export const LOGIN_URL = `${AUTH_URL}/login`;
export const SIGNUP_URL = `${AUTH_URL}/signup`;
export const USER_URL = `${AUTH_URL}/user`;

export const CHANGE_URL = `${USER_URL}/change-password`;
export const FORGOT_URL = `${USER_URL}/forgot-password`;
export const RESET_URL = `${USER_URL}/reset-password`;
export const SESSION_URL = `${USER_URL}/info`;