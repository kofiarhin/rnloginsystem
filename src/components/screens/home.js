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

    componentDidMount() {

        //check if user is logged in

        //get user
        this.props.dispatch(getUser());
        let user = this.props.userData.userData;

        //check if user is in session
        if (!user || user == null) {

            //redirect user to login if not logged in
            this.props.navigation.navigate("Login")
        }

    }

    handleLogout = () => {

        this.props.dispatch(logoutUser());

        this.props.dispatch(getUser());

        this.props.navigation.navigate("Login")
    }

    render() {

        let user = this.props.userData.userData;

        if (!user) {

            return
        }

        return <View style={mainStyles.container}>
            <Text style={mainStyles.title}> Welcome: {user.name}</Text>

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