import React, {
    PropTypes,
} from 'react';

const Display = props => (
    <div>
        <div className="columns">
            <div className="column is-offset-1 is-3 is-offset-3-mobile is-8-mobile">
                <input type="text" className="input" value={props.firstInput} disabled />
            </div>
            <div className="column is-3 is-offset-3-mobile is-8-mobile">
                <input type="text" className="input" value={props.secondInput} disabled />
            </div>
            <div className="column is-3 is-offset-3-mobile is-8-mobile">
                <input type="text" className="input" value={props.thirdInput} disabled />
            </div>
        </div>

        <div className="columns">
            <div className="column is-offset-4 is-3 is-offset-3-mobile is-8-mobile">
                <input className="is-centered input" disabled value={props.output} />
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
