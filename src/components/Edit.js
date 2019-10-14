import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {editBlog} from '../actions';
import {connect} from 'react-redux';

class Edit extends Component {
  state = {
    title: this.props.navigation.state.params.title,
    content: this.props.navigation.state.params.content,
    key: this.props.navigation.state.params.key,
  };

  submit = () => {
    this.props.editBlog(this.state.title, this.state.content, this.state.key);

    this.setState({
      title: '',
      content: '',
      key: '',
    });

    this.props.navigation.navigate('Blogs');
  };
  render() {
    return (
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>I am here for Edit</Text>
          </View>
          <TextInput
            style={styles.textInput}
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
            <Text style={styles.addButtonText}>EDIT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    backgroundColor: '#575fcf',
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
    borderRadius: 10,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
  addButton: {
    elevation: 8,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: '#575fcf',
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
  {editBlog},
)(Edit);
