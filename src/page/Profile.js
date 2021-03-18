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
import { ListItem, Container, Content, Text, Item, Icon, Left, Button, Body, Right, List } from 'native-base';
import Footernav from './Footernav';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Actions } from 'react-native-router-flux';
export default class Profile extends Component {
	render() {
		return (
			<Container>
				<LinearGradient colors={[ '#ffffff', '#ffffff', '#baed91', '#baed91' ]} style={styles.linearGradient}>
					<ScrollView style={styles.scrollView}>
						<Content>
							<Text
								style={{
									marginRight: '5%',
									marginTop: '7%',
									textAlign: 'right',
									color: '#515C6F',
									fontFamily: 'NeusaNextStd-Medium',
									fontSize: 14
								}}
							>
								ID : 17160041
							</Text>
							<Image
								source={require('../images/nesy.jpg')}
								style={{
									marginTop: '4.5%',
									alignSelf: 'center',
									width: 106,
									height: 106,
									borderRadius: 400 / 2
								}}
							/>
							<Text
								style={{
									alignSelf: 'center',
									marginTop: '7%',
									textAlign: 'right',
									color: '#515C6F',
									fontFamily: 'NeusaNextStd-Bold',
									fontSize: 19
								}}
							>
								Nesy Widyastuti
							</Text>
							<Text
								style={{
									alignSelf: 'center',
									marginTop: '2%',
									textAlign: 'right',
									color: '#515C6F',
									fontFamily: 'NeusaNextStd-Medium',
									fontSize: 15
								}}
							>
								nessywidya@gmail.com
							</Text>
							<List style={{ borderRadius: 10, overflow: 'hidden', paddingTop: '12%' }}>
								<ListItem
									icon
									style={{
										marginLeft: '7%',
										marginRight: '7%',
										backgroundColor: 'white',
										borderTopLeftRadius: 10,
										borderTopRightRadius: 10
									}}
								>
									<Left style={{ marginLeft: '4%' }}>
										<Icon active style={{ fontSize: 25 }} name="bell" type="Feather" />
									</Left>
									<Body>
										<Text
											style={{
												fontFamily: 'NeusaNextStd-Regular'
											}}
										>
											Notification Setting
										</Text>
									</Body>
									<Right>
										<Icon name="rightcircle" type="AntDesign" />
									</Right>
								</ListItem>
								<ListItem
									icon
									style={{ marginLeft: '7%', marginRight: '7%', backgroundColor: 'white' }}
								>
									<Left style={{ marginLeft: '4%' }}>
										<Icon
											active
											style={{ fontSize: 25 }}
											name="favorite-border"
											type="MaterialIcons"
										/>
									</Left>
									<Body>
										<Text
											style={{
												fontFamily: 'NeusaNextStd-Regular'
											}}
										>
											Favorite Article
										</Text>
									</Body>
									<Right>
										<Icon name="rightcircle" type="AntDesign" />
									</Right>
								</ListItem>
								<ListItem
									icon
									style={{ marginLeft: '7%', marginRight: '7%', backgroundColor: 'white' }}
								>
									<Left style={{ marginLeft: '4%' }}>
										<Icon active style={{ fontSize: 24 }} name="info" type="Feather" />
									</Left>
									<Body>
										<Text
											style={{
												fontFamily: 'NeusaNextStd-Regular'
											}}
										>
											About
										</Text>
									</Body>
									<Right>
										<Icon name="rightcircle" type="AntDesign" />
									</Right>
								</ListItem>
								<ListItem
									icon
									style={{
										marginLeft: '7%',
										marginRight: '7%',
										backgroundColor: 'white',
										borderBottomLeftRadius: 10,
										borderBottomRightRadius: 10
									}}
								/>
							</List>
							<Text
								onPress={() => {
									Actions.login();
								}}
								style={{
									alignSelf: 'center',
									marginTop: '19%',
									textAlign: 'right',
									color: '#FFFFFF',
									fontFamily: 'NeusaNextStd-Medium',
									fontSize: 15
								}}
							>
								LOG OUT
							</Text>
						</Content>
					</ScrollView>
				</LinearGradient>
				<Footernav />
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	scrollView: {},
	linearGradient: {
		flex: 1
	}
});
