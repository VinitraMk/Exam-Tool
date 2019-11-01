import React from 'react';
import {CUSTOM} from '../constants/constants';
import {connect} from 'react-redux';
var blockName=CUSTOM+"-results";

function mapStateToProps(state) {
    return {
        user:state.user,
        score:state.score,
        isPass:state.isPass
    }
}

class ResultsPage extends React.Component {
    constructor() {
        super();

        this.viewAnswers=this.viewAnswers.bind(this);
    }

    viewAnswers() {
        this.props.history.push('/answers');
    }

    render() {
        return(
            <div className={blockName+" p-a-7"}>
                {this.props.isPass?<h1>Congratulations {this.props.user.name}!</h1>:<h1>Sorry {this.props.user.name}</h1>}
                {this.props.isPass?<p>You have passed this exam!</p>:<p>You have failed this exam</p>}
                <p>Your score is: {this.props.score}</p>
                <button className="btn btn-light p-a-1" onClick={this.viewAnswers}>View Answers</button>
            </div>
        )
    }
}

const Results=connect(mapStateToProps)(ResultsPage);
export default Results;