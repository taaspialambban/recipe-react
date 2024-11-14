import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const Recipes = ({handleWantToCook}) => {
    const [recipes , setRecipes] = useState([]);

    useEffect(() =>{
        fetch('cooks.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mt-10'>
            {
             recipes.map((recipe, idx) => <Recipe 
                key={idx}
                recipe={recipe}
                handleWantToCook = {handleWantToCook}
             ></Recipe>)
            }
        </div>
    );
};

Recipes.propTypes ={
    handleWantToCook:PropTypes.func
}

export default Recipes;