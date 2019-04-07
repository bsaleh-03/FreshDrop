export const appName = "XMart Delivery";

export const clusterName = "charisma19";
export const CLUSTER_NAME = "charisma19";

export const GRAPHQL_URL = `https://data.${clusterName}.hasura-app.io/v1alpha1/graphql`;
export const AUTH_URL = `https://auth.${clusterName}.hasura-app.io/v1`;
export const VERIFY_URL = AUTH_URL + `/providers/email/verify-email`;

export const QUERY_URL = `https://data.${clusterName}.hasura-app.io/v1/query`;

export const BEARER_TOKEN = "0e09ec617d8cf75ecb20236c8e0fd3e75f79f97acca0eb2f";

export const LOGIN_URL = `${AUTH_URL}/login`;
export const SIGNUP_URL = `${AUTH_URL}/signup`;
export const USER_URL = `${AUTH_URL}/user`;
export const FORGOT_PASSWORD_URL = `${AUTH_URL}/providers/email/forgot-password`;
export const RESET_PASSWORD_URL = `${AUTH_URL}/providers/email/reset-password`;

export const CHANGE_URL = `${USER_URL}/change-password`;
export const FORGOT_URL = `${USER_URL}/forgot-password`;
export const RESET_URL = `${USER_URL}/reset-password`;
export const SESSION_URL = `${USER_URL}/info`;
