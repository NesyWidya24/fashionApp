import React, { Component } from 'react';
import {
	Container,
	Header,
	Left,
	Body,
	Right,
	Button,
	Icon,
	Title,
	Footer,
	FooterTab,
	Content,
	Text,
	Card,
	CardItem,
	View,
	Grid,
	Col,
	H3
} from 'native-base';
import { Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Footernav extends Component {
	render() {
		return (
			<Footer>
				<FooterTab style={{ backgroundColor: '#fff' }}>
					<Button
						onPress={() => {
							Actions.home();
						}}
					>
						<Icon type="AntDesign" name="home" />
						<Text uppercase={false} style={{ fontFamily: 'NeusaNextStd-Regular' }}>
							Home
						</Text>
					</Button>
					<Button
						onPress={() => {
							Actions.search();
						}}
					>
						<Icon type="Feather" name="search" />
						<Text uppercase={false} style={{ fontFamily: 'NeusaNextStd-Regular' }}>
							Search
						</Text>
					</Button>
					<Button
						onPress={() => {
							Actions.homeWomen();
						}}
					>
						<Icon type="MaterialCommunityIcons" name="tag-outline" />
						<Text uppercase={false} style={{ fontFamily: 'NeusaNextStd-Regular' }}>
							Categories
						</Text>
					</Button>
					<Button
						onPress={() => {
							Actions.profile();
						}}
					>
						<Icon type="FontAwesome" name="user-o" />
						<Text uppercase={false} style={{ fontFamily: 'NeusaNextStd-Regular' }}>
							Profile
						</Text>
					</Button>
				</FooterTab>
			</Footer>
		);
	}
}
