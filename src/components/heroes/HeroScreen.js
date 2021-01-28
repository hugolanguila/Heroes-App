import React, { useMemo } from 'react';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getHeroById } from './../../selectors/getHeroById';

export const HeroScreen = ({ history }) =>{
    
    const { heroId } = useParams();	    
    const hero = useMemo( ()=> getHeroById( heroId ), [ heroId ] );

    if( !hero )
        return <Redirect to="/" />;
 
    const handleReturn = () =>{
       if( history.lenght <= 2 )
            history.push('/');
        else
            history.goBack();
    }
      
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

   return(
		<div className="row mt-5">
            <div className="col-4"> 
                <img
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    src={`./../assets/heroes/${ heroId }.jpg`}
                    alt={ heroId }
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3 >{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b> { alter_ego }
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b> { publisher }
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance: </b> { first_appearance }
                    </li>
                </ul> 
                <h3>Characters</h3> 
                <p>{ characters }</p>

                <button 
                    onClick={ handleReturn }
                    className="btn btn-danger"
                >
                    Regresar
                </button>
            </div>
        </div>
	);
};
