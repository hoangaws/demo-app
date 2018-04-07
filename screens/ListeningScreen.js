import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ListeningLinksView } from '../components/samples';

export default class ListeningScreen extends React.Component {
  static navigationOptions = {
    title: 'Listening',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <ListeningLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
