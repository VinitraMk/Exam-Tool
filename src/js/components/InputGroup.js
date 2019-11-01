import React from 'react';
import {CUSTOM} from '../constants/constants';
var blockName=CUSTOM+"-input";

export default class InputGroup extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.getvalue(e.target.value,e.target.id);
    }

    render() {
        return(
            <div className={blockName}>
                <label className={blockName+"__label"} for={this.props.id} aria-labelledby={this.props.id}>{this.props.label}</label>
                <input className={blockName+"__field"} id={this.props.id} name={this.props.id} onChange={this.handleChange} required/>
            </div>
        )
    }
}