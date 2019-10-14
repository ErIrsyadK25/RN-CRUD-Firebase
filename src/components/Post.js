import React, {Component} from 'react';

import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
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
	{postBlogs},
)(Post);
