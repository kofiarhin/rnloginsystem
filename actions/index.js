export function getUser() {

    return {
        type: "GET_USER",
        payload: {
            name: "admin",
            username: "admin",
            password: "password"
        }
    }
}