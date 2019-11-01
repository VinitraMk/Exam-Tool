import React from 'react';
import {CUSTOM} from '../constants/constants';


var blockName=CUSTOM+"-question";


function AnswerInput(props) {

    if(props.forpage==='question') {
        return(
            <div className={blockName+"__options"}>
                {props.options.map(option=>{
                    return(
                        <div className={blockName+"__options--option"}>
                            <input type={props.inputtype} className="m-r-2" name="answerinput"/>
                            <label>{option}</label>
                        </div>
                    )
                })}
            </div>
        )
    }
    else {
        var answer=props.answer;
        var answergiven=props.answergiven;
        var wrongs=answergiven.filter(val=>-1===answer.indexOf(val));
        var classes=blockName+"__options--option";

        return(
            <div className={blockName+"__options"}>
                {props.options.map((option,index)=>{
                    if(answer.indexOf(index)!=-1) {
                        classes=blockName+"__options--option correct";
                        return(
                            <div className={classes}>
                                <input type={props.inputtype} className="m-r-2" checked/>
                                <label>{option}</label>
                            </div>
                        )
                    }
                    else if(wrongs.indexOf(index)!=-1) {
                        classes=blockName+"__options--option wrong";
                        return(
                            <div className={classes}>
                                <input type={props.inputtype} className="m-r-2" checked/>
                                <label>{option}</label>
                            </div>
                        )
                    }
                    else {
                        classes=blockName+"__options--option";
                        return(
                            <div className={classes}>
                                <input type={props.inputtype} className="m-r-2" disabled/>
                                <label>{option}</label>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}


function MatchColumns(props) {
    var answer=props.answer;
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <label>Column 1</label>
                </div>
                <div className="col-sm-6">
                    <label>Column 2</label>
                </div>
            </div>
            {props.column1.map((el,index)=>{
                return(
                    <div className="row">
                        <div className="col-sm-6">
                            <label className={blockName+"__column--cell"}>{el}</label>
                        </div>
                        <div className="col-sm-6">
                            <select className="form-control">
                                {props.column2.map(el1=>{
                                    if(props.forpage==='question') {
                                        return(
                                            <option>{el1}</option>
                                        )
                                    }
                                    else {
                                        if(el1===props.column2[answer[index]]) {
                                            return(
                                                <option selected="selected">{el1}</option>
                                            )
                                        }
                                        else {
                                            return(
                                                <option>{el1}</option>
                                            )
                                        }
                                    }
                                })}
                            </select>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default function AnswerBody(props) {

    if(props.forpage==='question') {
        switch(props.type) {
            case "mcq":
                return <AnswerInput options={props.options} forpage={props.forpage} inputtype='checkbox'/>
            case "oneanswer":
                return <AnswerInput options={props.options} forpage={props.forpage} inputtype='radio'/>
            case "yesno":
                return <AnswerInput options={props.options} forpage={props.forpage} inputtype='radio'/>
            case "match":
                return <MatchColumns column1={props.column1} column2={props.column2} forpage={props.forpage}/>
            default:
                return null;
        }
    }
    else {
        switch(props.type) {
            case "mcq":
                return <AnswerInput options={props.options} answer={props.answer} answergiven={props.answergiven} inputtype='checkbox' forpage={props.forpage}/>
            case "oneanswer":
                return <AnswerInput options={props.options} answer={props.answer} answergiven={props.answergiven} inputtype='radio' forpage={props.forpage}/>
            case "yesno":
                return <AnswerInput options={props.options} answer={props.answer} answergiven={props.answergiven} inputtype='radio' forpage={props.forpage}/>
            case "match":
                return <MatchColumns column1={props.column1} column2={props.column2} answer={props.answer} answergiven={props.answergiven} forpage={props.forpage}/>
            default:
                return null;
        }
    }
}

 