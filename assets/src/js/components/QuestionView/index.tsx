import * as React from "react";
import QuizModel from "../../models/QuizModel";
import {observer} from "mobx-react";
import { Grid, Collapse } from "@material-ui/core";
import { Link } from "react-router-dom";

@observer
class QuestionView extends React.Component{
    constructor(parameters: { props: any }) {
        let props = parameters.props;
        super(props);
    }

    render(){
        let question = QuizModel.user_behaviour.getQuestion();
        if (question === undefined || question === null){
            return <Link to="/"/>
        }
        let questionImg: string = question.questionImg === null?"":question.questionImg;
        let haveImage: boolean = question.questionImg !== null;
        if (question !== undefined && question !== null) {
            return (<div>
                <div>
                    <h3>
                {question.question}
                </h3>
                </div>
                <Grid container justify="center">
                <Grid item xs={12} style={{position: 'inherit'}}>

                {haveImage?<img src={questionImg} alt={questionImg}/>:""}

                </Grid>
                </Grid>
            </div>);
        }else {
            return (
                <div>error</div>
            );
        }
    }
}

export default QuestionView;