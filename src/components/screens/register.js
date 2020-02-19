import React, { Component } from "react";
import {

    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";
import _ from 'lodash';

import mainStyles from "../../../styles";

import firebase from "../../../firebase"


class Register extends Component {

    state = {

        formData: {
            name: "",
            username: "",
            password: ""
        },
        errors: ''
    }


    handleChange = element => {

        let formData = this.state.formData;

        formData[element.field] = element.value;
        this.setState({
            formData
        })



    }

    handleSubmit = () => {


        let data = this.state.formData;

        let errors = {}

        for (let item in data) {
            if (data[item] === "") {
                errors[item] = `${item} is required`
            }
        }

        if (!_.isEmpty(errors)) {

            this.setState({

                errors
            })
        } else {

            firebase.database().ref("users").push(data).then(() => {
                this.props.navigation.navigate("Login")
            })
        }


    }

    renderError = field => {

        let errors = this.state.errors;

        if (errors[field]) {

            return <View>

                <Text> {errors[field]}</Text>
            </View>
        }


    }

    render() {

        return <ScrollView>
            <KeyboardAvoidingView>

                <View style={mainStyles.container}>

                    <Text style={mainStyles.title}> Create An Account </Text>

                    <View>
                        <Text style={styles.inputText}> Name</Text>
                        <TextInput placeholder="name" style={styles.input} onChangeText={name => this.handleChange({ field: "name", value: name })} />
                        {this.renderError("name")}
                    </View>

                    <View>
                        <Text style={styles.inputText}> Username</Text>
                        <TextInput placeholder="username" style={styles.input} onChangeText={username => this.handleChange({ field: "username", value: username })} />
                    </View>

                    <View>
                        <Text style={styles.inputText}>Password</Text>
                        <TextInput placeholder="password" secureTextEntry style={styles.input} onChangeText={password => this.handleChange({ field: "password", value: password })} />
                    </View>



                    <TouchableOpacity style={mainStyles.btn} onPress={() => this.handleSubmit()}>
                        <Text style={mainStyles.btnText}> Create Account </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    }
}

const styles = StyleSheet.create({

    input: {
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 20,
        paddingHorizontal: 20,
        fontSize: 18
    },
    inputText: {

        marginBottom: 10,
        fontSize: 18
    }

})

export default Register;