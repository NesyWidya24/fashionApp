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
import { Header, Input, Text, Item, Icon, Left, Button, Body, Content, Container } from 'native-base';
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
				<LinearGradient colors={[ '#ffffff', '#baed91', '#baed91' ]} style={styles.linearGradient}>
					<ScrollView style={styles.scrollView}>
						<Content>
							<SafeAreaView>
								<Header hasSegment style={styles.searchContainer}>
									<Left>
										<Button
											transparent
											onPress={() => {
												Actions.homeWomen();
											}}
										>
											<Icon
												name="arrow-back"
												style={{ width: 20, fontSize: 30, color: 'black' }}
											/>
										</Button>
									</Left>
									<Body style={{ marginLeft: '-15%' }}>
										<Item rounded style={{ height: '90%', width: '98%' }}>
											<Icon name="ios-search" style={{ fontSize: 20 }} />
											<Input
												placeholder="Search Article"
												style={{ fontFamily: 'NeusaNextStd-Reguler' }}
											/>
										</Item>
									</Body>
								</Header>
								<View style={{ flex: 1, flexDirection: 'row' }}>
									<Text
										style={{
											marginLeft: '5%',
											marginTop: '10%',
											color: '#454F63',
											fontFamily: 'NeusaNextStd-Bold',
											fontSize: 30
										}}
									>
										Recently Viewed
									</Text>
									<Text
										style={{
											marginTop: '12%',
											fontSize: 18,
											color: 'red',
											marginLeft: '24%',
											paddingRight: '7%',
											fontFamily: 'NeusaNextStd-Light'
										}}
									>
										CLEAR
									</Text>
								</View>
								<View style={{ flex: 1, flexDirection: 'row' }}>
									<View style={styles.RectangleWhiteView}>
										<Image style={styles.itemset} source={require('../images/women2.png')} />
										<Text style={styles.textDesc}>Sportswear</Text>
									</View>
									<View style={styles.RectangleWhiteView}>
										<Image style={styles.itemset} source={require('../images/women3.png')} />
										<Text style={styles.textDesc}>Sportswear</Text>
									</View>
									<View style={styles.RectangleWhiteView}>
										<Image style={styles.itemset} source={require('../images/men3.png')} />
										<Text style={styles.textDesc}>Sportswear</Text>
									</View>
								</View>
							</SafeAreaView>
						</Content>
					</ScrollView>
					<Footernav />
				</LinearGradient>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	scrollView: {},
	searchContainer: {
		paddingTop: '4%',
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
		marginLeft: '4.5%',
		width: 274,
		height: 182,
		borderColor: 'black',
		marginTop: '7%'
	},
	linearGradient: {
		flex: 1
	}
});
