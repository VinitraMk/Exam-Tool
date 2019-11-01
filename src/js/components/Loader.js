import React from 'react';
import {CUSTOM} from '../constants/constants';
var blockName=CUSTOM+"-loader";
export default class Loader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={blockName}>
                <div className={blockName+"__spinner"}>
                </div>
                <p className={blockName+"__text"}>{this.props.text}</p>
            </div>
        )
    }
}