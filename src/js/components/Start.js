import React,{Component} from 'react';
import {CUSTOM} from '../constants/constants';
import {Link} from 'react-router-dom';

var blockName=CUSTOM+"-start";

export default class Start extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={blockName}>
                <h1>Where are you?</h1>
                <Link className="btn btn-success" to='/details'>Home</Link>
                <Link className="btn btn-success" to='/details'>Exam Centre</Link>
            </div>
        )
    }
}