import PropTypes from 'prop-types';

const Cooktable = ({preparing}) => {
    console.log(preparing)
   
    return (
        <div>
            
          <h2>{name}</h2>
        </div>
    );
};

Cooktable.propTypes = {
    preparing:PropTypes.array
}

export default Cooktable;