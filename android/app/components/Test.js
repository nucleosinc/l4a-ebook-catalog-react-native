import React, {View, Text, StyleSheet, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'

class Test extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>test page</Text>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});

module.exports = Test;
