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

export default class Template extends Component {
    
    render(){
        return (
            <View>
                <Text>Hola Mundo</Text>
            </View>
        )
    }

}

AppRegistry.registerComponent('RNTemplate', () => Template)