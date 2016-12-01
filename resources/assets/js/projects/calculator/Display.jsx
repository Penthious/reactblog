import React, {
    PropTypes,
} from 'react';

const Display = props => (
    <div>
        <div className="inputScreen">
            <input type="text" value={props.firstInput} disabled />
            <input type="text" value={props.secondInput} disabled />
            <input type="text" value={props.thirdInput} disabled />
        </div>
        <div className="results">
            <input disabled value={props.output} />
        </div>
    </div>
);

Display.propTypes = {
    firstInput: PropTypes.string,
    secondInput: PropTypes.string,
    thirdInput: PropTypes.string,
    output: PropTypes.string,
};

export default Display;
