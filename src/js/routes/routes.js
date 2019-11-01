import React from 'react';
import {Switch,Route} from 'react-router-dom';
import PersonalDetails from '../containers/PersonalDetails';
import Welcome from '../containers/Welcome';
import Instructions from '../containers/Instructions';
import Question from '../containers/Question';

const routes = () => {
    return(
        <Switch>
            <Route exact path='/details' component={PersonalDetails}/>
            <Route exact path='/welcome' component={Welcome}/>
            <Route exact path='/instructions' component={Instructions}/>
            <Route exact path='/question' component={Question}/>
        </Switch>
    )
}

export default routes;