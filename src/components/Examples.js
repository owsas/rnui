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
    Platform
} from 'react-native';

import Theme from '../providers/Theme';

import Empty from './Empty';
import Button from './Button';
import Content from './Content';

Theme.configure({
  button: {
    base: {
      padding: 20
    }
  }
})

export default class Examples extends Component {
    
    render(){
        return (
            <Content>
                <Text>I'm a Text inside a content</Text>
                <Empty>
                  <Text>I'm a text inside an empty box</Text>
                </Empty>
                <Button value="I'm a button" color="danger"/>
            </Content>
        )
    }

}

AppRegistry.registerComponent('Examples', () => Examples)