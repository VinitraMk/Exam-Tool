import React from 'react';
import {CUSTOM} from '../constants/constants';

var blockName=CUSTOM+"-card";
export default class LastPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={blockName+" p-a-7"}>
                <p>Look into more certification programs</p>
                <button className="btn btn-light">Click Here</button>
            </div>
        )
    }
}