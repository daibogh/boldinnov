import * as React from "react";
import {Link, Redirect} from "react-router-dom";
import QuizModel from "../../models/QuizModel";

import StyledLink from "../StyledLink";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import RestartButton from "../RestartButton";
import './style.css';


class answer_block extends React.Component<any,any> {
    quizId: number;

    constructor(props: any) {
        super(props);

        const res = window.location.href.match(/quiz\/(.*)/i);
        this.quizId = res != null && res.length > 1 ? parseInt(res[1]) : 0;
    }

    render(): React.ReactNode {
        if (QuizModel.user_behaviour.is_loaded === false){
            return <Redirect to='/'/>
        }
        const question = QuizModel.user_behaviour.getQuestion();
        if (question === undefined || question === null){
            return <Link to="/"/>
        }
        let descriptionImg: string = question.descriptionImg === null?"":question.descriptionImg;
        let haveImage: boolean = question.descriptionImg !== null;
        const answer = question.answer;
        let answer_text;
        switch (answer) {
            case "A":
                answer_text = question.a;
                break;
            case "B":
                answer_text = question.b;
                break;
            case "C":
                answer_text = question.c;
                break;
            case "D":
                answer_text = question.d;
                break;
        }


        return ( 
        <Fade in timeout={700}>
        <div>
            <div>{QuizModel.user_behaviour.isCorrect(QuizModel.user_behaviour.variant_choice)?<h3>Правильно!</h3>:<h3>А вот и нет!</h3>}</div>
            <div><h4>Правильный ответ - {answer_text}</h4></div>
            <div><h3>Пояснение</h3></div>
            <Grid container justify="center"><Grid item xs={8}>{question.description}</Grid></Grid>
            <Grid container justify='center'>
                <Grid item xs={12} style={{position: 'relative'}}>
            {haveImage?<img src={descriptionImg} alt={descriptionImg}/>:""}
            
            </Grid>
            </Grid>
            {!QuizModel.loaded_questions.isEmpty()?

                    <StyledLink to={{pathname: `/quiz/${this.quizId}/question`}}>
                        <RestartButton size='large' onClick={QuizModel.loaded_questions.popRandomQuestion}>
                        Следующий вопрос
                        </RestartButton>
                        </StyledLink>

                :<StyledLink to={{pathname: `/quiz/${this.quizId}/total`}}>
                    
                    <RestartButton size="large" onClick={QuizModel.user_behaviour.clear}>
                    Завершить
                    </RestartButton>
                </StyledLink>
            }
        </div>
            </Fade>
        );
    }
}


export default  answer_block;