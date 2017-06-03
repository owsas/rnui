import React, {
    Component
} from 'react';

import {
    View,
    AppRegistry,
} from 'react-native';

import Theme from '../providers/Theme';

export default class Content extends Component {
    
    static defaultProps = {
      style: {}
    }

    render(){
        return (
            <View style={[Theme.T.container, this.props.style]}>
                {this.props.children}
            </View>
        )
    }

}

AppRegistry.registerComponent('RNContent', () => Content)