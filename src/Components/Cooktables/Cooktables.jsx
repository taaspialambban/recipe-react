
import PropTypes from 'prop-types';
import Cooktable from '../Cooktable/Cooktable';
import { useState } from 'react';

// import Cooktable from '../Cooktable/Cooktable';


const Cooktables = ({cooks}) => {
  const [preparing , setPreparing] = useState([])
  const handlePreparing = p =>{
    const NewPreparing = [...preparing, p];
    setPreparing(NewPreparing)
  }
  
    return (
        <div className='w-[414px] drop-shadow-lg p-4 mt-10 bg-white rounded-lg'>
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
                    </tr>))
                    
                  }
                </tbody>
                
            </table>
            <button onClick={() => handlePreparing(cooks)}
             className='bg-[#0BE58A] w-[144px] rounded-lg h-[40px] text-black'>preparing</button>
            </div>
            
        <Cooktable preparing = {preparing}
        ></Cooktable>
        </div>
        
    );
};

Cooktables.propTypes = {
    cooks:PropTypes.array
}

export default Cooktables;