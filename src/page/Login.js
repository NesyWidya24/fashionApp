import React, { Component } from 'react';
import { Container, Icon, Content, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class Login extends Component {
	render() {
		return (
			<Container>
				<Content style={{ backgroundColor: '#BAED91', paddingTop: '53%' }}>
					<Icon
						type="MaterialCommunityIcons"
						name="hat-fedora"
						style={{
							marginLeft: '-8%',
							textAlign: 'center',
							fontSize: 80,
							color: 'black'
						}}
					/>
					<Text
						style={{
							marginTop: '-6%',
							color: 'white',
							fontFamily: 'NeusaNextStd-Bold',
							fontSize: 30,
							textAlign: 'center'
						}}
					>
						Fashion
					</Text>
					<Text
						style={{
							marginLeft: '8%',
							marginTop: '-2%',
							color: 'white',
							fontFamily: 'NeusaNextStd-Bold',
							fontSize: 30,
							textAlign: 'center',
							paddingLeft: '6.5%',
							marginBottom: '40%'
						}}
					>
						Article
					</Text>

					<Button
						onPress={() => {
							Actions.home();
						}}
						rounded
						light
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							marginLeft: '5%',
							marginRight: '5%'
						}}
					>
						<Text
							style={{
								fontFamily: 'NeusaNextStd-Bold',
								color: '#BAED91'
							}}
						>
							LOG IN BY FACEBOOK
						</Text>
					</Button>
					<Button
						onPress={() => {
							Actions.home();
						}}
						rounded
						light
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: '5%',
							marginLeft: '5%',
							marginRight: '5%'
						}}
					>
						<Text
							style={{
								fontFamily: 'NeusaNextStd-Bold',
								color: '#BAED91'
							}}
						>
							LOG IN BY GOOGLE
						</Text>
					</Button>
					<Text
						onPress={() => {
							Actions.home();
						}}
						style={{
							paddingTop: '4.5%',
							color: '#454F63',
							fontFamily: 'NeusaNextStd-Regular',
							fontSize: 16,
							textAlign: 'center'
						}}
					>
						Maybe Later
					</Text>
				</Content>
			</Container>
		);
	}
}
