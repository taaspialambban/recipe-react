import PropTypes from 'prop-types';

const Cooktable = ({preparing}) => {
    console.log(preparing)
    return (
        <div className='mt-4 pt-4 bg-gray-200'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Preparing time</th>
                            <th> Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {preparing.map((item ,idx)=>
                            (<tr key={idx}>
                                <td>{item.name} name</td>
                                 <td>{item.preparing_time} preparing_time</td>
                                <td>{item.calories} Calories</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    );
};

Cooktable.propTypes = {
    preparing:PropTypes.array
}

export default Cooktable;