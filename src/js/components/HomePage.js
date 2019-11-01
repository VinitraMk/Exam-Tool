import React from 'react'
import PersonalDetails from '../containers/PersonalDetails'
import '../../css/index.css'
import Start from './Start';
import Welcome from '../containers/Welcome';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import store from '../store/store';
import {Provider} from 'react-redux';
import Instructions from '../containers/Instructions';
import Question from '../containers/Question';
import Summary from '../containers/Summary';
import Results from '../containers/Results';
import Answer from '../containers/Answer';
import LastPage from '../components/LastPage';

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Start}/>
                        <Route exact path='/details' component={PersonalDetails}/>
                        <Route exact path='/welcome' component={Welcome}/>
                        <Route exact path='/instructions' component={Instructions}/>
                        <Route exact path='/question' component={Question}/>
                        <Route exact path='/summary' component={Summary}/>
                        <Route exact path='/results' component={Results}/>
                        <Route exact path='/answers' component={Answer}/>
                        <Route exact path='/examover' component={LastPage}/>
                    </Switch>
                </Router>
            </Provider>
            
        )
    }
}