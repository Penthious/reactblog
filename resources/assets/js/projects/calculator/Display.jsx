import React, {
    PropTypes,
} from 'react';

const Display = props => (
    <div>
        <div className="columns">
            <div className="column is-offset-1 is-3 is-offset-4-mobile is-6-mobile">
                <input type="text" value={props.firstInput} disabled />
            </div>
            <div className="column is-3 is-offset-4-mobile is-6-mobile">
                <input type="text" value={props.secondInput} disabled />
            </div>
            <div className="column is-3 is-offset-4-mobile is-6-mobile">
                <input type="text" value={props.thirdInput} disabled />
            </div>
        </div>

        <div className="columns">
            <div className="column is-offset-4 is-3 is-offset-4-mobile is-6-mobile">
                <input className="is-centered" disabled value={props.output} />
            </div>
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
