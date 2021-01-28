import React, { useMemo } from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { HeroCard } from './../heroes/HeroCard';
import { useForm } from './../../hooks/useForm';

import { getHeroesByName } from './../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
    
    const [ formValues, handleInputChange ] = useForm({ 
        searchText: '' 
    });
    const { searchText } = formValues; 

    const location = useLocation();    
    const { q = '' } = queryString.parse( location.search );

    const heroesFiltered = useMemo( () => getHeroesByName( q ), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    };

    return(
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4> Search Form </h4>
                   <hr/>
                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Find your hero"
                            name="searchText"
                            autoComplete="off"
                            onChange = { handleInputChange }
                        /> 
                        <button 
                            type="submit"
                            className="btn btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form> 
                </div>
            
                <div className="col-7"> 
                    <h4>Results</h4>
                    <hr/>
                    
                    {
                        ( q === '' ) &&
                        <div 
                            className="calert alert-info"
                        >
                            Search a hero
                        </div>
                    }
                
                    {
                        ( q !== '' && heroesFiltered.length === 0) &&
                            <div 
                                className="calert alert-danger"
                            >
                                There is no a hero with { q }
                            </div>
                    }

                    {
                        heroesFiltered.map( hero => (<HeroCard 
                                                        key={hero.id} 
                                                        { ...hero } 
                                                    />
                                            ))
                    }
                </div>
            </div>
        </div>
    );
};
