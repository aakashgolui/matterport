
let initialState = {
    userData: {},
    isLoginLoading: false,
    isRegisterLoading: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                userData: { ...action.payload }
            };
        case "START_LOGIN_LOADER":
            return {
                isLoginLoading: true
            };
        case "STOP_LOGIN_LOADER":
            return {
                isLoginLoading: false
            };
        case "START_REGISTER_LOADER":
            return {
                isRegisterLoading: true
            };
        case "STOP_REGISTER_LOADER":
            return {
                isRegisterLoading: false
            };

        default:
            return state;
    }
};