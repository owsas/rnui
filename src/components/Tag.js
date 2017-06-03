import React, {
    Component
} from 'react';

import {
    View,
    Text,
    AppRegistry,
    StyleSheet,
    TextInput,
    Image,
    Button,
    Platform
} from 'react-native';

export default class Tag extends Component {
    
    render(){
        return (
            <View style={{ display:'inline' }}>
                <Text>Hola Mundo</Text>
            </View>
        )
    }

}

AppRegistry.registerComponent('RNTag', () => Tag)