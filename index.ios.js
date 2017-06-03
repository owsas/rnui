/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Examples from './src/components/Examples';

export default class rnui extends Component {
  render() {
    return (
      <Examples />
    );
  }
}

AppRegistry.registerComponent('rnui', () => rnui);
