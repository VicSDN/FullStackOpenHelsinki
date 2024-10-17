import PropTypes from 'prop-types';

const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);
    return (
        <p>Total number of exercises: {total}</p>
    );
};


Total.propTypes = {
    parts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            exercises: PropTypes.number.isRequired
        })
    ).isRequired
};

export default Total;
