import React from 'react';
import {CUSTOM} from '../constants/constants';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchInstructions } from '../actions/actions';
var blockName=CUSTOM+"-welcome";

const mapStateToProps = state => {
    return {
        user:state.user
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchInstructions:()=>dispatch(fetchInstructions())
    };
}

/*function openInstructions() {
    this.props.fetchInstructions()
}*/



class WelcomePage extends React.Component {
    constructor() {
        super();
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick() {
        this.props.fetchInstructions();
    }

    render() {
        return(
            <div className={blockName}>
                <p>Hi {this.props.user.name}</p>
                <p>To start exam <Link className="App-Link" to='/instructions' onClick={this.handleClick}>Click Here</Link></p>
            </div>
        )
    }
}


const Welcome=connect(mapStateToProps,mapDispatchToProps)(WelcomePage);
export default Welcome;


