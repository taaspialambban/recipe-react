
import PropTypes from 'prop-types';

const Recipe = ({recipe , handleWantToCook}) => {
    // console.log(recipe)
    const{image ,name , description ,ingredients,  preparing_time , calories } = recipe
    return (

         <div className='w-[379px] drop-shadow-lg bg-white p-4 space-y-5'>
            <img className='w-[331px] h-[200px]' src={image} alt="" />
            <h2 className='font-lexend text-xl font-semibold text-black'>{name}</h2>
            <h2 className='font-faria text-base font-normal text-[#878787]'>{description}</h2>
            <hr />
           <p className='font-lexend text-left text-lg font-medium'>ingredients : {ingredients.length}
            <ul className='text-lg font-normal text[#878787] font-faria'>
               {ingredients.map((ingredient, idx)=> (<li key={idx}>{ingredient}</li>))}
            </ul>
           </p>
            
            <div className='flex space-x-3'>
                <h2>
                    {preparing_time}
                </h2>
                <h2> {calories} Calories</h2>
            </div>
            <button onClick={() => handleWantToCook(recipe)}
             className='bg-[#0BE58A] h-[34px] w-[160px] text-black rounded-2xl'>Want to cook</button>
              
        </div>
    );
};

Recipe.propTypes = {
    recipe:PropTypes.object.isRequired,
    handleWantToCook:PropTypes.func
}
export default Recipe;