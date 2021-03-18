import React, { Component } from 'react';
import {
	Image,
	ImageBackground,
	StyleSheet,
	View,
	SafeAreaView,
	ScrollView,
	Dimensions,
	BackHandler,
	TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Header, Input, Text, Item, Icon, Left, Button, Body, Content, Container, Right } from 'native-base';
import Footernav from './Footernav';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Actions } from 'react-native-router-flux';
export default class Search extends Component {
	state = {
		search: ''
	};
	handleSearch = (text) => {
		this.setState({ search: text });
	};
	render() {
		return (
			<Container>
				<Content style={{ backgroundColor: '#BAED91' }}>
					<ScrollView style={styles.scrollView}>
						<Header hasSegment style={styles.searchContainer}>
							<Left>
								<Button
									transparent
									onPress={() => {
										Actions.homeWomen();
									}}
								>
									<Icon name="arrow-back" style={{ width: 20, fontSize: 25, color: 'black' }} />
								</Button>
							</Left>
							<Body style={{ marginLeft: '-15%' }}>
								<Text
									style={{
										color: '#454F63',
										fontFamily: 'NeusaNextStd-Medium',
										fontSize: 18
									}}
								>
									#OOTD Make you confident
								</Text>
							</Body>
						</Header>
						<Image style={styles.imgset} source={require('../images/men2.png')} />
						<Text
							style={{
								fontSize: 24,
								fontFamily: 'NeusaNextStd-Regular',
								marginLeft: '5%',
								color: '#454F63'
							}}
						>
							Lorem Ipsum
						</Text>
						<Text
							style={{
								fontSize: 16,
								fontFamily: 'NeusaNextStd-Regular',
								marginLeft: '5%',
								lineHeight: 24,
								color: '#454F63'
							}}
						>
							{'\n'}What is Lorem Ipsum?{'\n'}
						</Text>
						<Text
							style={{
								fontSize: 14,
								fontFamily: 'NeusaNextStd-Regular',
								marginLeft: '5%',
								marginRight: '5%',
								lineHeight: 24,
								color: '#454F63'
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua.
						</Text>
						<Text
							style={{
								fontSize: 14,
								fontFamily: 'NeusaNextStd-Regular',
								marginLeft: '10%',
								marginRight: '5%',
								lineHeight: 24,
								color: '#454F63'
							}}
						>
							{'\n'} • Step 1: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
							doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
							quasi architecto beatae vitae dicta sunt explicabo.
							{'\n'} • Step 2: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
						</Text>
						<Text
							style={{
								fontSize: 14,
								fontFamily: 'NeusaNextStd-Regular',
								marginLeft: '5%',
								marginRight: '5%',
								lineHeight: 24,
								color: '#454F63'
							}}
						>
							{'\n'} Privacy {'\n'}
							{'\n'} {'\t'}Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
							doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
							quasi architecto beatae vitae dicta sunt explicabo.
						</Text>
						<View style={{ alignItems: 'flex-end', marginRight: '7%', marginTop: '3%' }}>
							<Icon
								type="MaterialIcons"
								name="favorite-border"
								style={{ fontSize: 35, color: '#FF04AB' }}
							/>
						</View>
					</ScrollView>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	scrollView: {},
	searchContainer: {
		paddingTop: 16,
		backgroundColor: 'transparent'
	},
	RectangleWhiteView: {
		marginTop: '5%',
		marginLeft: '5.5%',
		marginRight: '-2%',
		marginBottom: '10%',
		width: 101,
		height: 135,
		backgroundColor: 'white',
		borderRadius: 10
	},
	itemset: {
		width: 101,
		height: 100,
		borderColor: 'black'
	},
	textDesc: {
		margin: '4%',
		color: '#727C8E',
		fontFamily: 'NeusaNextStd-Light',
		fontSize: 14,
		textAlign: 'center'
	},
	imgset: {
		margin: 10,
		alignContent: 'center',
		alignSelf: 'center',
		width: 274,
		height: 182,
		borderRadius: 34
	},
	linearGradient: {
		flex: 1
	}
});
