import AsyncStorage from '@react-native-community/async-storage';



export function getUser() {

    let user = AsyncStorage.getItem("user");
    return {
        type: "GET_USER",
        payload: user
    }
}
export function loginUser(data) {

    const user = AsyncStorage.setItem("user", data);
    return {
        type: "LOGIN_USER",
        payload: {
            success: true,
            userData: user
        }
    }
}


export function logoutUser(data) {

    AsyncStorage.removeItem("user");

    return {

        type: "LOGOUT_USER",
        payload: {
            success: true
        }
    }
}
