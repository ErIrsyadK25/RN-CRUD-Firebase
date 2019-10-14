import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {postBlogs} from '../actions';
import {connect} from 'react-redux';

class Post extends Component {
  state = {
    title: '',
    content: '',
  };

  submit = () => {
    this.props.postBlogs(this.state.title, this.state.content);
    this.setState({
      title: '',
      content: '',
    });
    this.props.navigation.navigate('NavStack');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>I am the Post Screen</Text>
        </View>
        <TextInput
          style={styles.textInput}
          numberOfLines={5}
          multiline={true}
          placeholder="title"
          onChangeText={title => this.setState({title})}
          value={this.state.title}
        />
        <TextInput
          style={[styles.textInput, {height: 90, marginBottom: 10}]}
          placeholder="content"
          onChangeText={content => this.setState({content})}
          value={this.state.content}
        />
        <TouchableOpacity style={styles.addButton} onPress={this.submit}>
          <Text style={styles.addButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#fff',
  },
  header: {
    elevation: 8,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    alignItems: 'center',
    fontWeight: 'bold',
    backgroundColor: '#f56d91',
    padding: 8,
  },
  headerText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  textInput: {
    marginTop: 20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
  addButton: {
    elevation: 8,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: '#f56d91',
    padding: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default connect(
  null,
  {postBlogs},
)(Post);
