import React from 'react'
import { Component } from 'react'

import ReactNative from 'react-native'
import { View } from 'react-native'
import { Text } from 'react-native'
import { TouchableHighlight } from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionCreators from '../actions'

import { MY_VAR } from 'react-native-dotenv'

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }

  render() {
    return <View>
      <Text style={{marginTop: 20}}>
        I am App container. Count: {this.state.count}
      </Text>
      <TouchableHighlight onPress={() => { this.props.incrementCount() }}>
      <Text>{ MY_VAR }</Text>
      </TouchableHighlight>
    </View>
  }
}

// This allows each property of ActionCreators to be bound to the props
connectedAppContainer = connect(
  () => { return {} },
  (dispatch) => bindActionCreators(ActionCreators, dispatch),
)(AppContainer);

export default connectedAppContainer;
