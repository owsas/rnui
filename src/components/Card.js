import React, {
    Component
} from 'react';

import {
    View,
    Text,
    AppRegistry,
    TextInput,
} from 'react-native';

export default class Card extends Component {
    
    render(){
        return (
            <View>
                <Text>Hola Mundo</Text>
            </View>
        )
    }

}

AppRegistry.registerComponent('RNCard', () => Card)