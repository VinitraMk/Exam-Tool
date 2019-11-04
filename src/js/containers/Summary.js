import React from 'react';
import {CUSTOM} from '../constants/constants';
import {connect} from 'react-redux';
import {computeResults} from '../actions/actions'

var blockName=CUSTOM+"-summary";

function mapStateToProps(state) {
    return {
        questions:state.questions,
        answers:state.answers,
        noOfQuestions:state.noOfQuestions,
        answeredCount:state.answeredCount,
        unansweredCount:state.unansweredCount,
        reviewCount:state.reviewCount
    }
}

function mapDispatchToProps(dispatch) {
    return {
        computeResults:(payload)=>dispatch(computeResults(payload))
    }
}

class SummaryPage extends React.Component {
    constructor(props) {
        super(props);

        this.finishExam=this.finishExam.bind(this);
    }

    finishExam() {
        this.props.computeResults({
            questions:this.props.questions,
            answers:this.props.answers,
            noOfQuestions:this.props.noOfQuestions
        });
        this.props.history.push('/results');
    }

    render() {
        return(
            <div className={blockName}>
                <nav className={blockName+"__navbar"}>
                    <h1 className="p-a-1">Exam Summary</h1>
                </nav>
                <div className={blockName+"__counts"}>
                    <div className={blockName+"__counts--unanswered"}>
                        <button className="btn btn-secondary m-a-1">{this.props.unansweredCount}</button>
                        <label className="p-a-1">Unanswered</label>
                    </div>
                    <div className={blockName+"__counts--answered"}>
                        <button className="btn btn-success m-a-1">{this.props.answeredCount}</button>
                        <label className="p-a-1">Answered</label>
                    </div>
                    <div className={blockName+"__counts--review"}>
                        <button className="btn btn-warning m-a-1">{this.props.reviewCount}</button>
                        <label className="p-a-1">To be reviewed</label>
                    </div>
                </div>
                <div className={blockName+"__content"}>
                    <div className="row">
                        {this.props.questions.map((question,index)=>{
                            return(
                                <div className="col-1 m-a-2">
                                    {question['to-be-reviewed']?<button className='btn btn-warning'>{index+1}</button>:(question.isanswered?<button className="btn btn-success" disabled>{index+1}</button>:<button className="btn btn-secondary" disabled>{index+1}</button>)}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={blockName+"__action"}>
                    <button className="btn btn-success" onClick={this.finishExam}>Finish Exam</button>
                </div>
            </div>
        )
    }
}
const Summary=connect(mapStateToProps,mapDispatchToProps)(SummaryPage)
export default Summary;