import * as React from "react";
import QuizModel from "../../models/QuizModel";
import List from '@material-ui/core/List';
import {observer} from "mobx-react";
import TotalListElem from "../TotalListElem";
import { Redirect } from "react-router";
import { Grid } from "@material-ui/core/es";
import StyledLink from "../StyledLink";
import RestartButton from "../RestartButton";
import { Fade } from "@material-ui/core";

@observer
class total_block extends React.Component{

    render(){
        if (QuizModel.user_behaviour.is_loaded === false){
            return <Redirect to='/quiz/'/>
        }
        if (QuizModel.answered_questions === undefined){
            return <p>error</p>;
        }
        QuizModel.user_behaviour.toggle_total();//need to render VK button on footer
        let count_answered = 0;
        QuizModel.answered_questions.items.forEach((elem) => count_answered += elem.is_correct? 1: 0);
        return <Fade in timeout={700}><div>
            <List>
                {QuizModel.answered_questions.items.map((elem,key) => <TotalListElem element={elem} index={key} key={key}/>)}
            </List>
            <Grid container justify='center'>
                <Grid item md={12} xs={12}>
                    <h2>{"Набрано правильных ответов: "}</h2>
                </Grid>
                <Grid item md={12} xs={12}>
                    <h1>{count_answered}</h1>
                </Grid>
            </Grid>
            <StyledLink to='/'>
                <RestartButton onClick={() => QuizModel.clear()}>Вернуться на главную страницу</RestartButton>
            </StyledLink>
        </div>
        </Fade>
    }
}

export default total_block;

