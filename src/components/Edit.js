import React, {Component} from 'react';

import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
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
		console.log('Bhaa...', this.props.navigation.state.params);
		return (
			<View style={styles.container}>
				<Text>I am the Post Screen</Text>
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
				<Button title="Submit" style={styles.Button} onPress={this.submit} />
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
	textInput: {
		marginTop: 20,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
	},
});

export default connect(
	null,
	{editBlog},
)(Edit);
