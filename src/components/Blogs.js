import React, {Component} from 'react';

import {
	StyleSheet,
	View,
	Text,
	Button,
	FlatList,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';
import {getBlogs, removeBlogs} from '../actions';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';

class Blogs extends Component {
	componentDidMount() {
		this.props.getBlogs();
	}

	render() {
		return (
			<View style={styles.container}>
				{this.props.loadingReducer ? (
					<View>
						<Text style={{marginBottom: 10}}>Please wait..</Text>
						<ActivityIndicator size="large" color="#575fcf" />
					</View>
				) : (
					<FlatList
						style={{width: '100%'}}
						data={this.props.listOfBlogs}
						keyExtractor={item => item.key}
						showsVerticalScrollIndicator={false}
						renderItem={({item}) => {
							return (
								<View style={styles.dataFlatList}>
									<Text style={styles.title}>{item.title}</Text>
									<Text style={styles.content}>{item.content}</Text>
									<View style={styles.icons}>
										<TouchableOpacity
											onPress={() =>
												this.props.navigation.navigate('Edit', {...item})
											}>
											<View style={{marginRight: 15}}>
												<Icon size={30} color="white" name="edit" />
											</View>
										</TouchableOpacity>
										<TouchableOpacity
											onPress={() => this.props.removeBlogs(item.key)}>
											<View>
												<Icon size={30} color="white" name="close" />
											</View>
										</TouchableOpacity>
									</View>
								</View>
							);
						}}
					/>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		padding: 10,
	},
	dataFlatList: {
		elevation: 8,
		borderRadius: 15,
		backgroundColor: '#575fcf',
		padding: 20,
		marginBottom: 15,
	},
	title: {
		fontSize: 20,
		lineHeight: 25,
		color: '#fff',
		fontWeight: 'bold',
	},
	content: {
		fontSize: 15,
		lineHeight: 30,
		color: '#fff',
	},
	icons: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop: 25,
	},
});

function mapStateToProps(state) {
	const listOfBlogs = _.map(state.blogsList.blogsList, (val, key) => {
		return {
			...val,
			key: key,
		};
	});
	return {
		listOfBlogs,
		loadingReducer: state.loadingReducer.loadingReducer,
	};
}

export default connect(
	mapStateToProps,
	{getBlogs, removeBlogs},
)(Blogs);
