import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ReadingLinksView } from '../components/samples';

export default class ReadingScreen extends React.Component {
  static navigationOptions = {
    title: 'Reading',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <ReadingLinksView />
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
