import { createAppContainer, createSwitchNavigator } from "react-navigation";

import HomeScreen from "./src/components/screens/home";
import LoginScreen from "./src/components/screens/login";
import RegisterScreen from "./src/components/screens/register";
const AppNav = createSwitchNavigator({
    Home: {
        screen: HomeScreen
    },
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen
    }
}, {
    initialRouteName: "Login"
})

export default createAppContainer(AppNav);