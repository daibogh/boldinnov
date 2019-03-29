import * as React from "react";
import {Fade, Grid} from "@material-ui/core";
// import axios from 'axios';
import {onPatch, onSnapshot} from "mobx-state-tree";
import QuizModel from '../../models/QuizModel';
import PushkinLoadingImg from "../PushkinLoadingImg";
import StyledLink from "../StyledLink";
import RestartButton from "../RestartButton";
// const cachios = require('cachios');

class beginStage extends React.Component<any,any>{
    quizId: number;
    state = {
        status:'not_success'        
    };

    constructor(props: any) {
        super(props);

        const res = window.location.href.match(/quiz\/(.*)/i);
        this.quizId = res != null && res.length > 1 ? parseInt(res[1]) : 0;
    }

    render() {
        if (this.state.status === 'success'){
            return (
                <Fade in timeout={700}>
                <div>
                    <Grid container justify='center'>
                        <Grid item xs={12} sm ={8} md ={6}>
                            <h1>Привет!</h1>
                        </Grid>
                    </Grid>
                    <Grid container justify='center'>
                        <Grid item xs={12} sm ={8} md ={6}>
                            <h2>Давай проверим твои знания?</h2>
                        </Grid>
                    </Grid>
                    <Grid container justify='center'>
                        <Grid item xs={12} sm ={8} md ={6}>
                            <StyledLink to={`/quiz/${this.quizId}/question`}>
                                <RestartButton size='large' onClick={() => QuizModel.loaded_questions.popRandomQuestion()}>
                                    Начать!
                                </RestartButton>
                            </StyledLink>
                        </Grid>
                    </Grid>

                </div>
                </Fade>
                );
        }
    

    fetch(`/quiz/api/${this.quizId}/questions`).then(
        (resp:any) => 
        resp.json().then(
            (data:any) => ({
                data: data,
                status: resp.status
            })
        )
    ).then(
        (resp:any) => {
        QuizModel.loaded_questions.initLoad(resp.data);
        this.setState({status:"success"})
});
        return <PushkinLoadingImg/>
            
           
    }
}
export default beginStage;