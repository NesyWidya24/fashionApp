import React, { Component } from 'react';
import {
	Image,
	ImageBackground,
	StyleSheet,
	View,
	SafeAreaView,
	ScrollView,
	Dimensions,
	TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Text, Button, Icon, CardItem, Card, Content, Container } from 'native-base';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Actions } from 'react-native-router-flux';
import Footernav from './Footernav';
export default class HomeWomen extends Component {
	render() {
		return (
			<Container>
				<LinearGradient colors={[ '#ffffff', '#baed91', '#baed91' ]} style={styles.linearGradient}>
					<ScrollView style={styles.scrollView}>
						<Content>
							<SafeAreaView>
								<View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
									<Card transparent>
										<CardItem style={{ backgroundColor: 'transparent' }} cardBody>
											<View style={{ backgroundColor: 'transparent' }}>
												<Image style={styles.iconset} source={require('../images/cool.png')} />
												<Text
													style={{
														marginTop: '-25%',
														color: '#454F63',
														fontFamily: 'NeusaNextStd-Regular',
														fontSize: 15,
														alignSelf: 'center'
													}}
												>
													Female
												</Text>
											</View>
										</CardItem>
									</Card>
									<Card transparent>
										<CardItem
											style={{ backgroundColor: 'transparent' }}
											cardBody
											button
											onPress={() => {
												Actions.homeMen();
											}}
										>
											<View>
												<Image
													style={styles.iconset}
													source={require('../images/beauty.png')}
												/>
												<Text
													style={{
														marginTop: '-25%',
														color: '#454F63',
														fontFamily: 'NeusaNextStd-Regular',
														fontSize: 15,
														alignSelf: 'center'
													}}
												>
													Male
												</Text>
											</View>
										</CardItem>
									</Card>
								</View>

								<Text
									style={{
										marginTop: '5%',
										color: '#454F63',
										fontFamily: 'NeusaNextStd-Bold',
										fontSize: 30,
										marginLeft: '4.5%',
										marginBottom: '-4%'
									}}
								>
									Latest
								</Text>
								<ImageBackground style={styles.imgset} source={require('../images/women.png')}>
									<Text
										style={{
											margin: '5%',
											color: 'white',
											fontFamily: 'NeusaNextStd-Light',
											fontSize: 18,
											lineHeight: 26
										}}
									>
										For all your {'\n'}summer hijab {'\n'}needs
									</Text>
									<Button
										onPress={() => {
											Actions.detailArticle();
										}}
										iconRight
										rounded
										light
										style={{
											alignSelf: 'baseline',
											right: Dimensions.get('window').width / 50 - 15,
											marginBottom: '5%'
										}}
									>
										<Text
											style={{
												margin: '4.5%',
												color: '#727C8E',
												fontFamily: 'NeusaNextStd-Medium',
												fontSize: 12,
												lineHeight: 26
											}}
										>
											SEE MORE
										</Text>
										<Icon
											type="AntDesign"
											name="rightcircle"
											style={{ color: '#baed91', fontSize: 25 }}
										/>
									</Button>
								</ImageBackground>
								<View style={{ flex: 1, flexDirection: 'row' }}>
									<View style={styles.RectangleWhiteView}>
										<TouchableOpacity
											onPress={() => {
												Actions.detailArticle();
											}}
										>
											<Image style={styles.itemset} source={require('../images/women2.png')} />
											<Text style={styles.textDesc}>Sportswear</Text>
										</TouchableOpacity>
									</View>
									<View style={styles.RectangleWhiteView}>
										<TouchableOpacity
											onPress={() => {
												Actions.detailArticle();
											}}
										>
											<Image style={styles.itemset} source={require('../images/women3.png')} />
											<Text style={styles.textDesc}>Sportswear</Text>
										</TouchableOpacity>
									</View>
									<View style={styles.RectangleWhiteView}>
										<TouchableOpacity
											onPress={() => {
												Actions.detailArticle();
											}}
										>
											<Image style={styles.itemset} source={require('../images/women3.png')} />
											<Text style={styles.textDesc}>Sportswear</Text>
										</TouchableOpacity>
									</View>
								</View>
							</SafeAreaView>
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
	iconset: {
		alignSelf: 'center',
		width: 100,
		height: 100,
		borderColor: 'black',
		marginTop: '15%'
	},
	RectangleWhiteView: {
		marginTop: '10%',
		marginLeft: '6%',
		marginRight: '-0.5%',
		marginBottom: '10%',
		width: '25.5%',
		height: 135,
		backgroundColor: 'white',
		borderRadius: 10
	},
	itemset: {
		width: '100%',
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
