import PropTypes from 'prop-types';

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part, index) => (
                <div key={index}>
                    <p>
                        {part.name} {part.exercises}
                    </p>
                </div>
            ))}
        </div>
    );
};


Content.propTypes = {
    parts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            exercises: PropTypes.number.isRequired
        })
    ).isRequired
};

export default Content;
