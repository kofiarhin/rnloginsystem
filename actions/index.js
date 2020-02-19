import AsyncStorage from '@react-native-community/async-storage';



export async function getUser() {

    let user = await AsyncStorage.getItem("user").then(response => response);
    return {
        type: "GET_USER",
        payload: user
    }
}

export async function loginUser(data) {

    const user = await AsyncStorage.setItem("user", data);
    return {
        type: "LOGIN_USER",
        payload: {
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
