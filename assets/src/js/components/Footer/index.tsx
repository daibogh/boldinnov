import * as React from "react";
import { VKShareButton, VKIcon, OKShareButton, OKIcon } from "react-share";
import QuizModel from "../../models/QuizModel";
import { observer } from "mobx-react";
import { Grid } from "@material-ui/core";

@observer
class footer extends React.Component{
    render(){
        let title = 'я набрал '
            + QuizModel.get_answered_questions_count()
            + ' из '
            + QuizModel.answered_questions.items.length
            + ' на викторине про А.С. Пушкина';
        let QUIZ_URL = 'http://194.87.93.103:8000/';
    return <div>
        {/* <h1>footer!</h1> */}
        {QuizModel.user_behaviour.get_total()?
        <Grid container justify='center'>
            {/* <Grid item xs={1}> */}
                <VKShareButton url={QUIZ_URL}
                    title={title}
                    description='поделиться результатом'>
                    <VKIcon
                    
                    round >
                    </VKIcon>
                </VKShareButton>
            {/* </Grid> */}
            {/* <Grid item xs={1}> */}
                <OKShareButton url={QUIZ_URL}
                        title={title}
                        description='поделиться результатом'>
                        <OKIcon  round></OKIcon>
                </OKShareButton>
            {/* </Grid> */}
        </Grid>
          :''}
    </div>
}
}

export default footer;