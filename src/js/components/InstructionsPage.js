import React from 'react';
import Loader from './Loader';
import {CUSTOM} from '../constants/constants';

var blockName=CUSTOM+"-instructions";


export default class InstructionsPage extends React.Component {

    constructor() {
        super();
        this.state ={
            count:1
        }
        this.nextInstruction=this.nextInstruction.bind(this);
    }

    nextInstruction() {
        var count=this.state.count;
        count++;
        if(count>this.props.noOfInstructions) {
            this.props.fetchQuestions();
            this.props.history.push('/question');
        }
        else {
            this.setState({count:count})
        }
    }



    render() {
        if(this.props.noOfInstructions===0) {
            return(
                <Loader text="Fetching Instructions"/>
            )
        }
        else {
            console.log(this.props.noOfInstructions);
            return(
                <div className={blockName}>
                    <h1 className={blockName+"__heading"}>Instructions</h1>
                    <p className={blockName+"__content"}>
                        {this.props.instructions[""+this.state.count]}
                    </p>
                    <div className={blockName+"__action"}>
                        <button className={"btn btn-success "+blockName+"__action--next"} onClick={this.nextInstruction}>{this.state.count===this.props.noOfInstructions?"Start Exam":"Next"}</button>
                    </div>
                </div>
            )
        }
    }
}