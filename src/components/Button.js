import React, {
    Component
} from 'react';

import {
    View,
    Text,
    AppRegistry,
    TouchableHighlight,
    ViewPropTypes
} from 'react-native';

import Theme from '../providers/Theme';

export default class RNButton extends Component {
    
    static defaultProps = {
      style: {},
      color: 'light',
      icon: ()=>{},
      onPress: ()=>{}
    }

    render(){
      let theme = Theme.T.button[this.props.color];

        return (
            <TouchableHighlight style={[Theme.T.button.base, {
              backgroundColor: theme.backgroundColor
            }, this.props.style]} onPress={this.props.onPress}>
              <View>
                <View>
                  {this.props.icon(theme.color)}
                </View>
                <Text style={{color: theme.color}}>{this.props.value}</Text>
              </View>
            </TouchableHighlight>
        )
    }

}

AppRegistry.registerComponent('RNButton', () => RNButton)