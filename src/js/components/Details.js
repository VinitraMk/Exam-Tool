import React from 'react';
import {CUSTOM} from '../constants/constants';
import InputGroup from './InputGroup';

var blockName=CUSTOM+"-details";

export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name:"",
            phone:""
        }
        this.takeValue=this.takeValue.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    takeValue(value,id) {
        this.setState({
            [id]:value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addUser({
            name:this.state.name,
            phone:this.state.phone
        });
        this.setState({
            name:"",
            phone:""
        });
        this.props.history.push('/welcome');
    }

    render() {
        return(
            <form className={blockName+" "+CUSTOM+"-container-flex"} onSubmit={this.handleSubmit}>
                <span className={blockName+"__title"}><h1>Personal Details</h1></span>
                    <InputGroup id="name" label="Name" getvalue={this.takeValue}/>
                    <InputGroup id="phone" label="Phone" getvalue={this.takeValue}/>
                    <button type="submit" className={"btn btn-success "+blockName+"__submit"}>Submit</button>
            </form>
        )
    }
}
