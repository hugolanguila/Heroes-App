import React from 'react';
import	{ Switch, Route, Redirect } from 'react-router-dom';

import { NavBar } from './../components/ui/NavBar';
import { MarvelScreen } from './../components/marvel/MarvelScreen';
import { DcScreen } from './../components/dc/DcScreen';
import { HeroScreen } from './../components/heroes/HeroScreen';
import { SearchScreen } from './../components/search/SearchScreen';

export const DashboardRoutes = () =>{
	return(
		<>
			<NavBar />
			<div className="container mt-2">
				<Switch>
					<Route exact path='/dc' component={ DcScreen } />
					<Route exact path='/marvel' component={ MarvelScreen } />
					<Route exact path='/search' component={ SearchScreen } />
					<Route exact path='/hero/:heroId' component={ HeroScreen } />			
					<Redirect to='/marvel' />			
				</Switch>
			</div>
		</>
	);
}
