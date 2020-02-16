import React, { Component } from "react";
import {

    View,
    Text,
    Button,
    TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import mainStyles from "../../../styles";

import { getUser } from "../../../actions";

class Home extends Component {

    componentDidMount() {


    }

    render() {

        console.log(this.props)

        return <View style={mainStyles.container}>
            <Text style={mainStyles.title}> Home Stuff</Text>

            <TouchableOpacity style={mainStyles.btn} onPress={() => this.props.navigation.navigate("Login")}>
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