const getUser = state => state.auth.user;
const isLoggedIn = state => state.auth.isLoggedIn;
const getError = state => state.auth.error;
const getToken = state => state.auth.token;

export { getUser, isLoggedIn, getError, getToken };
