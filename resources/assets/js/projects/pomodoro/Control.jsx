import React, {
    Component,
    PropTypes,
} from 'react';

class Control extends Component {
    handleStart = () => this.props.handleStart();
    handleReset = () => this.props.handleReset();
    handlePause = () => this.props.handlePause();

    onClickHandler = () => {
        if(this.props.handleStart && this.props.name ==='Start'){
            this.handleStart();
        }else if(this.props.handleReset){
            this.handleReset();
        }else{
            this.handlePause();
        }
    };

    render() {
        return (
            <div>
                <button onClick={this.onClickHandler}>
                    {this.props.name}
                </button>
            </div>
        );
    }
}

Control.propTypes    = {};
Control.defaultProps = {};

export default Control;
