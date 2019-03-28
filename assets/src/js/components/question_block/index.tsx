import * as React from "react";
import {Link, Redirect} from "react-router-dom";
import QuizModel from "../../models/QuizModel";
import VariantsBox from "../VariantsBox";
import QuestionView from "../QuestionView";
import {observer} from "mobx-react";
import StyledLink from "../StyledLink";
import RestartButton from "../RestartButton";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";


@observer
class question_block extends React.Component<any,any> {
    quizId: number;

    constructor(props: any) {
        super(props);

        const res = window.location.href.match(/quiz\/(.*)/i);
        this.quizId = res != null && res.length > 1 ? parseInt(res[1]) : 0;
    }
    render() {
        if (QuizModel.user_behaviour.is_loaded === false){
            return <Redirect to='/quiz/'/>
        }
        return (<div>
            
            <Fade in timeout={700}>
            <div>

                <Grid container justify='center' spacing={40}>
                <Grid item xs={12}><QuestionView/></Grid>
                <Grid item xs={12}><VariantsBox/></Grid>
                <Grid item xs={12} sm={6} md = {4}>
                {QuizModel.user_behaviour.isChosen()?
                        <div>
                            {/* <hr style={{color:"black",background:"black"}}/> */}
                        <StyledLink to={`/quiz/${this.quizId}/answer`}><Fade in timeout={700}><RestartButton size='large'>Ответить</RestartButton></Fade></StyledLink>
                        </div>
                    : ""
                }
                </Grid>
                {/* </Paper > */}
                </Grid>
            </div>
            </Fade>
        </div>
        )
    }
}

export default question_block;