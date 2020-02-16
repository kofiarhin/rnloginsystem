import React, { Component } from "react";
import {

    View,
    Text
} from "react-native";
import { connect } from "react-redux";

import { getUser } from "../../../actions";

class Home extends Component {

    componentDidMount() {


    }

    render() {

        console.log(this.props)

        return <View>
            <Text> Home Stuff</Text>
        </View>
    }
}
const mapStateToProps = state => {

    return {
        userData: state.user
    }
}
export default connect(mapStateToProps)(Home);