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
            <div className="button-box">
                <div>
                    {set1.map(val => <button className="set1" key={`${val}hashed`} onClick={() => this.handleOnClick(val)}>{val}</button>)}
                </div>
                <div>
                    {set2.map(val => <button className="set2" key={`${val}hashed`} onClick={() => this.handleOnClick(val)}>{val}</button>)}
                </div>
                <div>
                    {set3.map(val => <button className="set3" key={`${val}hashed`} onClick={() => this.handleOnClick(val)}>{val}</button>)}
                </div>
                <div>
                    {set4.map(val => <button className="set4" key={`${val}hashed`} onClick={() => this.handleOnClick(val)}>{val}</button>)}
                </div>
                <div>
                    {set5.map(val => <button className="set5" key={`${val}hashed`} onClick={() => this.handleOnClick(val)}>{val}</button>)}
                </div>
            </div>
        );
    }
}

Buttons.propTypes = {
    handleInputChange: PropTypes.func,
};

export default Buttons;
