
import PropTypes from 'prop-types';
import Cooktable from '../Cooktable/Cooktable';
import { useState } from 'react';


const Cooktables = ({cooks , setCooks }) =>{


const[cooking, setCooking] = useState([]);

const handlePreparingCook = (recipe) =>{

    const updatedCooks = cooks.filter((i) => i.recipe_id !== recipe.recipe_id);
    setCooks([...updatedCooks]);

    setCooking([...cooking, recipe]);
};

  return (
    <div className='w-[414px] drop-shadow-lg p-4 mt-10 bg-white rounded-lg '>
        <h2 className='text-2xl font-semibold text-black font-lexend'>want to cook : {cooks.length}</h2>
        <hr/>
        <div className='flex '>
        <table>
        <thead>
                <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
            </thead>
            <tbody>
              {
                cooks.map((cook , idx) =>
                (<tr key={idx}>
                  
                  <td>{cook.name}</td>
                  <td>{cook.preparing_time}</td>
                  <td>{cook.calories} calories</td>
                 <button onClick={() => handlePreparingCook(cook)}
         className='bg-[#0BE58A] w-[144px] rounded-lg h-[40px] text-black'>preparing</button>
                </tr>))
              }
               
            </tbody>  
           
        </table>
        </div>
        <h2 className='text-2xl font-semibold text-black font-lexend mt-4'>Currently Cooking : {cooking.length}</h2>
        <hr />
        <Cooktable preparing = {cooking}></Cooktable>
    </div>
    
);
}
  
  
   


Cooktables.propTypes = {
    cooks:PropTypes.array.isRequired,
    setCooks:PropTypes.func
}

export default Cooktables;