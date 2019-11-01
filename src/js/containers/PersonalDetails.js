import React from 'react';
import {CUSTOM} from '../constants/constants';
import {connect} from 'react-redux';
import {addUser} from '../actions/actions';
import Details from '../components/Details';


function mapDispatchToProps(dispatch) {
    return{
        addUser:user => dispatch(addUser(user))
    };
}

const PersonalDetails=connect(null,mapDispatchToProps)(Details);
export default PersonalDetails;