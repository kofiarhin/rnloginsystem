import { createAppContainer, createSwitchNavigator } from "react-navigation";

import HomeScreen from "./src/components/screens/home";
const AppNav = createSwitchNavigator({
    Home: {
        screen: HomeScreen
    }
})

export default createAppContainer(AppNav);