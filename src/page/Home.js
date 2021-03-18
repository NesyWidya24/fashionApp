import React, { Component } from 'react';
import { Image, StyleSheet, View, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Text, Button, Icon } from 'native-base';
import Footernav from './Footernav';
import { Actions } from 'react-native-router-flux';
export default class Home extends Component {
	render() {
		return (
			<LinearGradient colors={[ '#ffffff', '#baed91', '#baed91' ]} style={styles.linearGradient}>
				<SafeAreaView>
					<ScrollView style={styles.scrollView}>
						<Text
							style={{
								margin: '4.5%',
								color: '#454F63',
								fontFamily: 'NeusaNextStd-Bold',
								fontSize: 30
							}}
						>
							Fashion Article
						</Text>
						<Text
							style={{
								paddingTop: '5%',
								color: '#454F63',
								fontFamily: 'NeusaNextStd-Regular',
								fontSize: 20,
								textAlign: 'center'
							}}
						>
							"DRESSING WELL IS A FORM OF GOOD MANNERS"
						</Text>
						<View style={styles.RectangleWhiteView}>
							<Image style={styles.imgset} source={require('../images/women.png')} />
							<Text style={styles.textArticle}>Women Style</Text>
							<Text style={styles.textDesc}>
								When one door of happiness closes, another opens, but often we look so long at the
								closed door that we do not see the one that has been opened for us.{' '}
							</Text>
							<Button
								onPress={() => {
									Actions.homeWomen();
								}}
								iconRight
								rounded
								light
								style={{
									alignSelf: 'baseline',
									right: Dimensions.get('window').width / 50 - 195,
									marginTop: '5%',
									marginBottom: '3%'
								}}
							>
								<Text
									style={{
										margin: 16,
										color: '#727C8E',
										fontFamily: 'NeusaNextStd-Medium',
										fontSize: 12,
										lineHeight: 26
									}}
								>
									SEE MORE
								</Text>
								<Icon type="AntDesign" name="rightcircle" style={{ color: '#baed91', fontSize: 25 }} />
							</Button>
						</View>
						<View style={styles.RectangleWhiteView2}>
							<Image style={styles.imgset} source={require('../images/men.png')} />
							<Text style={styles.textArticle}>Men Style</Text>
							<Text style={styles.textDesc}>
								When one door of happiness closes, another opens, but often we look so long at the
								closed door that we do not see the one that has been opened for us.
							</Text>
							<Button
								onPress={() => {
									Actions.homeMen();
								}}
								iconRight
								rounded
								light
								style={{
									alignSelf: 'baseline',
									right: Dimensions.get('window').width / 50 - 195,
									marginTop: '5%',
									marginBottom: '3%'
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
								<Icon type="AntDesign" name="rightcircle" style={{ color: '#baed91', fontSize: 25 }} />
							</Button>
						</View>
					</ScrollView>
				</SafeAreaView>
			</LinearGradient>
		);
	}
}

const styles = StyleSheet.create({
	scrollView: {},
	textDesc: {
		margin: '4%',
		color: '#727C8E',
		fontFamily: 'Gibson-Regular',
		fontSize: 16,
		textAlign: 'center'
	},
	textArticle: {
		paddingTop: '50%',
		color: '#454F63',
		fontFamily: 'NeusaNextStd-Regular',
		fontSize: 18,
		textAlign: 'center'
	},
	RectangleWhiteView: {
		flex: 1,
		marginTop: '40%',
		marginLeft: '5.5%',
		marginRight: '5.5%',
		marginBottom: '10%',
		width: '88%',
		height: '88%',
		backgroundColor: 'white'
	},
	RectangleWhiteView2: {
		flex: 1,
		marginTop: '20%',
		marginLeft: '5.5%',
		marginRight: '5.5%',
		marginBottom: '10%',
		width: '88%',
		height: '88%',
		backgroundColor: 'white'
	},
	imgset: {
		position: 'absolute',
		top: -70,
		alignSelf: 'center',
		width: 270,
		height: 220,
		borderColor: 'black',
		borderRadius: 10
	},
	linearGradient: {
		flex: 1
	}
});
