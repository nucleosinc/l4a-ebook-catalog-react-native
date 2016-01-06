var React = require('react-native');
var couchbase = require('./../utils/couchbase-lite-fetch');
var CBLModule = require('./../utils/CBLModule');

var {
  Text,
  View,
  StyleSheet,
  } = React;

var styles = StyleSheet.create({
  text: {
    flex: 1,
    backgroundColor: '#1100ff',
    color: '#fff'
  }
})

class Home extends React.Component {
  componentWillMount() {
    CBLModule.getUrl((err) => {
      console.log('Callback error :: ' + err);
    }, (url) => {
      var db = new couchbase(url, "todos");
      db.createDatabase()
        .then((res) => {
          db.createDocument({"text": "hello there"})
            .then((res) => {
              console.log(res);
            });
          return res;
        });
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>Not sure but home page is here</Text>
      </View>
    );
  }

}

module.exports = Home;
