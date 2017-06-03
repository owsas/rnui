import React, {
    Component
} from 'react';

import {
    View,
    AppRegistry,
} from 'react-native';

import Theme from '../providers/Theme';

export default class Empty extends Component {
    
  static defaultProps = {
    style: {}
  }

  render(){
      return (
          <View style={[{...Theme.T.empty}, this.props.style]}>
              {this.props.children}
          </View>
      )
  }

}

AppRegistry.registerComponent('RNEmpty', () => Empty)