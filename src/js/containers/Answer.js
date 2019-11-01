import React from 'react';
import {CUSTOM} from '../constants/constants';
import {connect} from 'react-redux';
import Loader from '../components/Loader';
import AnswerBody from '../components/AnswerBody';

var blockName=CUSTOM+"-question";
function mapStateToProps(state) {
    return {
        noOfQuestions:state.noOfQuestions,
        questions:state.questions,
        answers:state.answers
    };
}

class AnswerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
        this.nextQuestion=this.nextQuestion.bind(this);
    }

    nextQuestion() {

        if(this.state.count===this.props.noOfQuestions-1) {
            this.props.history.push('/examover');
        }

        var inps=document.getElementsByTagName('input');
        for(var i=0;i<inps.length;i++) {
            inps[i].checked=false;
        }
        this.setState({
            count:this.state.count+1
        })
    }

    render() {
        if(this.state.count<this.props.noOfQuestions) {
            var question=this.props.questions[this.state.count];
            var answer=this.props.answers[this.state.count];
            return(
                <div className={blockName}>
                    <div className={blockName+"__navbar"}>
                        <h1 className={blockName+"__number"}>Q{this.state.count+1}</h1>
                    </div>
                    <div className={blockName+"__body"}>
                        <p>{question["question"]}</p>
                    </div>
                    {question.type==='match'?<AnswerBody type={question.type} column1={question.column1} column2={question.column2} answer={question.answers} answergiven={answer} forpage='answer'/>:<AnswerBody type={question.type} options={question.options} answer={question.answers} answergiven={answer} forpage='answer'/>}
                    <div className={blockName+"__action"}>
                        <button type="button" className="btn btn-success" onClick={this.nextQuestion}>Next</button>
                    </div>
                </div>
            )
        }
        else {
            return(
                <Loader text="Fetching Questions And Answers"/>
            )
        }
    }
}

const Answer=connect(mapStateToProps)(AnswerPage);
export default Answer;