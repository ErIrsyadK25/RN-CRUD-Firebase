import Blogs from '../components/Blogs';
import Post from '../components/Post';
import Edit from '../components/Edit';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

const NavStack = createStackNavigator({
	Blogs: {
		screen: Blogs,
		navigationOptions: () => ({
			headerTitle: 'Blogs',
		}),
	},
	Edit: {
		screen: Edit,
		navigationOptions: () => ({
			headerTitle: 'Edit Data',
		}),
	},
});

const BottomTab = createBottomTabNavigator({
	NavStack: {
		screen: NavStack,
	},
	Post: {
		screen: Post,
	},
});

export default (Routes = createAppContainer(BottomTab));
