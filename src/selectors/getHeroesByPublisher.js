import { heroes } from './../data/heroes';

export const getHeroesByPublisher = ( publisher ) =>{
	let validPublishers = ['DC Comics', 'Marvel Comics'];
	if( !validPublishers.includes(publisher) ){
		throw new Error(`Publisher ${ publisher } no es valido`);
	} 

	return heroes.filter( hero => hero.publisher === publisher );
}
