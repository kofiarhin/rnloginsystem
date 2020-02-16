import React, { Component } from "react";
import {

    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";

import mainStyles from "../../../styles";


class Register extends Component {

    render() {

        return <View style={mainStyles.container}>
            <Text style={mainStyles.title}> Register </Text>

            <TouchableOpacity style={mainStyles.btn} onPress={() => this.props.navigation.navigate("Login")}>
                <Text style={mainStyles.btnText}> Login</Text>
            </TouchableOpacity>
        </View>
    }
}

export default Register;