import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './page/Login';
import Home from './page/Home';
import HomeWomen from './page/HomeWomen';
import HomeMen from './page/HomeMen';
import Profile from './page/Profile';
import Search from './page/Search';
import DetailArticle from './page/DetailArticle';
import DetailMen from './page/DetailMen';

export default class Routes extends Component {
	render() {
		return (
			<Router>
				<Scene key="root" hideNavBar={true}>
					<Scene key="login" component={Login} initial={true} />
					<Scene key="home" component={Home} />
					<Scene key="homeWomen" component={HomeWomen} />
					<Scene key="homeMen" component={HomeMen} />
					<Scene key="detailArticle" component={DetailArticle} />
					<Scene key="detailMen" component={DetailMen} />
					<Scene key="profile" component={Profile} />
					<Scene key="search" component={Search} />
				</Scene>
			</Router>
		);
	}
}
