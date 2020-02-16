import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { connect } from "react-redux";
import { getUser } from "../../../actions"
import mainStyles from "../../../styles";

class Login extends Component {

    componentDidMount() {

        //get user
        this.props.dispatch(getUser())

    }

    render() {

        console.log(this.props)

        return <View style={mainStyles.container}>
            <Text style={{
                fontSize: 30,
                marginBottom: 20,
                textAlign: "center"
            }}> Login Here </Text>


            <View style={styles.inputUnit}>

                <Text style={styles.text}> Your Email</Text>

                <TextInput placeholder="Email...." borderWidth={1} borderColor="rgba(0, 0, 0, .4)" style={{
                    padding: 10,
                    height: 60,
                    fontSize: 20
                }} />
            </View>

            <View style={styles.inputUnit}>
                <Text style={styles.text}> Your Password</Text>

                <TextInput placeholder="Email...." borderWidth={1} borderColor="rgba(0, 0, 0, .4)" style={{
                    padding: 10,
                    height: 60,
                    fontSize: 20
                }} />
            </View>

            <TouchableOpacity style={mainStyles.btn} onPress={() => this.props.navigation.navigate("Home")}>
                <Text style={mainStyles.btnText}> Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                marginVertical: 20,
                paddingVertical: 20,
            }} onPress={() => this.props.navigation.navigate("Register")} >
                <Text style={{
                    fontSize: 18
                }}> Dont Have an Account? Register</Text>
            </TouchableOpacity>

        </View>
    }
}

const styles = StyleSheet.create({

    inputUnit: {
        marginBottom: 20
    },
    text: {

        fontSize: 20,
        marginBottom: 20
    }
})
const mapStateToProps = state => {

    return {
        userData: state.user
    }
}
export default connect(mapStateToProps)(Login);