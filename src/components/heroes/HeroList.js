import React from 'react';
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from './../../selectors/getHeroesByPublisher';

export const HeroList = ({ publisher }) =>{

	const heroes = getHeroesByPublisher( publisher );	

	return (
		<div className="card-columns">
			{
				heroes.map( hero => (	<HeroCard 
											key={ hero.id } 
											{ ...hero } 
										/> 
				))
			}
		</div>
	);
};
