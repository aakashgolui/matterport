export const setUserData = (payload) => {
    console.log('setUserData',payload)
    return {
        type: "SET_USER",
        payload
    }
}

export const startLoginLoader = () => {
    return {
        type: "START_LOGIN_LOADER",
        payload:{}
    }
}

export const stopLoginLoader = () => {
    return {
        type: "STOP_LOGIN_LOADER",
        payload:{}
    }
}

export const startRegisterLoader = () => {
    return {
        type: "START_REGISTER_LOADER",
        payload:{}
    }
}

export const stopRegisterLoader = () => {
    return {
        type: "STOP_REGISTER_LOADER",
        payload:{}
    }
}