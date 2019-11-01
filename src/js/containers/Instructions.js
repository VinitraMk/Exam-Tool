import {connect} from 'react-redux';
import {fetchQuestions} from '../actions/actions';
import InstructionsPage from '../components/InstructionsPage';


function mapStateToProps(state) {
    return {
        noOfInstructions:state.noOfInstructions,
        instructions:state.instructions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuestions:()=> dispatch(fetchQuestions())
    };
}




const Instructions = connect(mapStateToProps,mapDispatchToProps)(InstructionsPage);
export default Instructions;
