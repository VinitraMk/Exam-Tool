import React from 'react';
import {CUSTOM} from '../constants/constants';
import {connect} from 'react-redux';
import Loader from '../components/Loader';
import {submitAnswers,setCounts} from '../actions/actions';
import AnswerBody from '../components/AnswerBody';

var blockName=CUSTOM+"-question";

function mapStateToProps(state) {
    return {
        noOfQuestions:state.noOfQuestions,
        questions:state.questions,
        timerOn:state.timerOn,
        secondsLeft:state.secondsLeft
    };
}

function mapDispatchToProps(dispatch) {
    return {
        submitAnswers:(answerpack)=>dispatch(submitAnswers(answerpack)),
        setCounts:(countPack)=>dispatch(setCounts(countPack)),
    }
}


class QuestionPage extends React.Component {
    constructor() {
        super();
        this.state= {
            count:0,
            seconds:"00",
            minutes:"00",
            secondsRemaining:null,
            intervalHandle:null,
            answeredCount:0,
            toReviewCount:0,
            unansweredcount:0
        }
        this.nextQuestion=this.nextQuestion.bind(this);
        this.startClock=this.startClock.bind(this);
        this.tick=this.tick.bind(this);
        this.getAnswers=this.getAnswers.bind(this);
    }

    getAnswers() {
        var answerpack={
            index:this.state.count
        }

        if(this.props.questions[this.state.count].type!='match') {
            var options=document.getElementsByClassName(blockName+"__options--option");
            var isReview=document.getElementById('toreview');
            var isAnswered=false;
            var answers=[]
            for(var i=0;i<options.length;i++) {
                var inp=options[i].firstChild;
                if(inp.checked) {
                    answers.push(i);
                    isAnswered=true;
                }
                options[i].firstChild.checked=false;
            }
            document.getElementById('toreview').checked=false;

            answerpack['options']=answers;
            answerpack['to-be-reviewed']=isReview.checked;
            answerpack['isanswered']=isAnswered;

            //this.props.submitAnswers(answerpack);

            if(isAnswered) {
                if(isReview.checked) {
                    this.setState({
                        answeredCount:this.state.answeredCount+1,
                        toReviewCount:this.state.toReviewCount+1,
                        unansweredcount:this.state.unansweredcount-1,
                        count:this.state.count+1
                    })
                }
                else {
                    this.setState({
                        answeredCount:this.state.answeredCount+1,
                        unansweredcount:this.state.unansweredcount-1,
                        count:this.state.count+1
                    })
                }
            }
            else {
                if(isReview.checked) {
                    this.setState({
                        toReviewCount:this.state.toReviewCount+1,
                        count:this.state.count+1
                    })
                }
                else {
                    this.setState({
                        count:this.state.count+1
                    })
                }
            }
        }
        else {
            var selections=document.getElementsByClassName("form-control");
            var isAnswered=false;
            console.log("selections: "+selections);
            var answer=[]
            for(var i=0;i<selections.length;i++) {
                if(selections[i].selectedIndex) {
                    answer[i]=selections.selectedIndex;
                    isAnswered=true;
                }
                else {
                    answer[i]=-1;
                }
            }
            answerpack['options']=answer;
            answerpack['available-for-review']=false;
            answerpack['isanswered']=isAnswered;

            //this.props.submitAnswers(answerpack);
            if(isAnswered) {
                this.setState ({
                    count:this.state.count+1,
                    answeredCount:this.state.answeredCount+1
                });
            }
            else {
                this.setState({
                    count:this.state.count+1,
                    unansweredcount:this.state.unansweredcount+1
                })
            }
        }

        return answerpack

    }


    nextQuestion() {

        this.props.submitAnswers(this.getAnswers()); 

        if(this.state.count===this.props.noOfQuestions-1) {
            this.props.setCounts({
                answeredCount:this.state.answeredCount,
                unansweredcount:this.state.unansweredcount,
                toReviewCount:this.state.toReviewCount
            });
            this.props.history.push('/summary')
        }
    }

    tick() {
        var secondsRemaining=this.state.secondsRemaining-1;
        var min=Math.floor(secondsRemaining/60);
        var sec=Math.floor(secondsRemaining%60);
        var minString="",secString="";

        console.log(min+","+sec);

        if(sec<10) {
            console.log('s'+sec);
            secString+="0"+sec;
        }
        else {
            secString+=sec;
        }

        if(min<10) {
            if(min===0) {
                minString="00";
            }
            else {
                minString+="0"+min;
            }
        }
        else {
            minString+=min;
        }

        this.setState({
            minutes:minString,
            seconds:secString,
            secondsRemaining:secondsRemaining
        });

        if(min===0 && sec===0) {
            clearInterval(this.state.intervalHandle);
        }
    }

    startClock() {
        var intervalHandle=setInterval(this.tick,1000)
        this.setState({
            secondsRemaining:3600,
            intervalHandle:intervalHandle
        })
    }

    componentDidMount() {
        this.startClock();
    }


    render() {
        if(this.state.secondsRemaining===0) {
            this.props.history.push('/summary');
        }
        if(this.props.noOfQuestions!=0 && this.state.count<this.props.noOfQuestions) {
            var question=this.props.questions[this.state.count];
            return(
                <div className={blockName}>
                    <div className={blockName+"__navbar"}>
                        {question['available-for-review']?<div className={blockName+"__check-for-review active"}><input type='checkbox' id='toreview' name='toreview' className={CUSTOM+"__checkbox"}/><label for='toreview'>Mark for Review</label></div>:<div className={blockName+"__check-for-review"}><input type='checkbox' id='toreview' name='toreview' className={CUSTOM+"__checkbox"} disabled/><label for='toreview'>Mark for Review</label></div>}
                        <h1 className={blockName+"__number"}>Q{this.state.count+1}</h1>
                        <div className={CUSTOM+"-timer"}>
                            <p className={CUSTOM+"-timer__title"}>Time Left:  <span className={CUSTOM+"-timer__minutes"}>{this.state.minutes}&#58;</span><span className={CUSTOM+"-timer__seconds"}>{this.state.seconds}</span>
                            </p>
                        </div>
                    </div>
                    <div className={blockName+"__body"}>
                        <p>{question["question"]}</p>
                    </div>
                    {question.type==='match'?<AnswerBody type={question.type} column1={question.column1} column2={question.column2} forpage='question'/>:<AnswerBody type={question.type} options={question.options} forpage='question'/>}
                    <div className={blockName+"__action"}>
                        <button type="button" className="btn btn-success" onClick={this.nextQuestion}>Next</button>
                    </div>
                </div>
            )
        }
        else {
            return(
                <Loader text="Fetching Questions"/>
            )
        }
        
    }
}

const Question=connect(mapStateToProps,mapDispatchToProps)(QuestionPage);
export default Question;