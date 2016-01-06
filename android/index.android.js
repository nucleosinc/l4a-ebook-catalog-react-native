/**
 * ebook reader built on React-Native for Android
 * https://github.com/libraryforall/ebook-catalog-react-native
 */
'use strict';

var React = require('react-native');
var Home = require('./app/components/Home');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  Navigator,
} = React;


import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux'
import Launch from './app/components/Launch'
import Test from './app/components/Test'
class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

var Example = React.createClass({
    render: function() {
        return (
            <Router hideNavBar={true}>
                <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
                <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
                <Schema name="withoutAnimation"/>
                <Schema name="tab" type="switch" icon={TabIcon} />

                <Route name="launch" component={Launch} initial={true} title="Launch"/>
                <Route name="test" component={Test} title="Test"/>
            </Router>
        );
    }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  }
});


var TodoLite = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          title="Library For All"
          style={styles.toolbar}>
        </ToolbarAndroid>
        <Home/>

      </View>
    );
  }
});

AppRegistry.registerComponent('TodoLite-ReactNative-Android', () => Example);
