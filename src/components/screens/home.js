import React, { Component } from "react";
import {

    View,
    Text,
    Button,
    TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import mainStyles from "../../../styles";

import { getUser, logoutUser } from "../../../actions";

class Home extends Component {

    state = {
        userData: ""
    }

    componentDidMount() {

        this.props.dispatch(getUser());
    }

    handleLogout = () => {

        this.props.dispatch(logoutUser());
        this.props.navigation.navigate("Login")

    }

    renderUser = () => {

        let user = this.props.userData.userData;

        if (user) {

            let data = JSON.parse(user);

            return <View>

                <Text style={{
                    fontSize: 30,
                    textAlign: 'center',
                    marginBottom: 20,
                    textTransform: "capitalize"
                }}> Welcome: {data.username} </Text>
            </View>
        }

    }

    render() {

        return <View style={mainStyles.container}>

            {this.renderUser()}
            <TouchableOpacity style={mainStyles.btn} onPress={() => this.handleLogout()}>
                <Text style={mainStyles.btnText}>Logout</Text>
            </TouchableOpacity>
        </View>
    }
}
const mapStateToProps = state => {

    return {
        userData: state.user
    }
}
export default connect(mapStateToProps)(Home);