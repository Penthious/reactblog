import React, {
    Component,
    PropTypes,
} from 'react';

class Buttons extends Component {

    handleOnClick = (e) => {
        this.props.handleInputChange(e);
    };

    render() {
        const set1 = ['1', '2', '3', '+'];
        const set2 = ['4', '5', '6', '-'];
        const set3 = ['7', '8', '9', '*'];
        const set4 = ['AC', '0', 'DEL', '/'];
        const set5 = ['=', '.', '^', '%'];
        return (
            <div>
                <div className="columns">
                    <div className="column is-offset-3 is-9 button-box--style">
                        {set1.map(val => <button className="button-size" key={`${val}hashed`}
                                                 onClick={() => this.handleOnClick(val)}>{val}</button>)}
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-offset-3 is-9 button-box--style">
                        {set2.map(val => <button className="button-size" key={`${val}hashed`}
                                                 onClick={() => this.handleOnClick(val)}>{val}</button>)}
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-offset-3 is-9 button-box--style">
                        {set3.map(val => <button className="button-size" key={`${val}hashed`}
                                                 onClick={() => this.handleOnClick(val)}>{val}</button>)}
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-offset-3 is-9 button-box--style">
                        {set4.map(val => <button className="button-size" key={`${val}hashed`}
                                                 onClick={() => this.handleOnClick(val)}>{val}</button>)}
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-offset-3 is-9 button-box--style">
                        {set5.map(val => <button className="button-size" key={`${val}hashed`}
                                                 onClick={() => this.handleOnClick(val)}>{val}</button>)}
                    </div>
                </div>
            </div>
        );
    }
}

Buttons.propTypes = {
    handleInputChange: PropTypes.func,
};

export default Buttons;
