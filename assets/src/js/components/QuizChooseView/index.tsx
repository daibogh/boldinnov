import * as React from "react";
import {QuizTypeState} from "../quiz_choose";
import {Grid} from "@material-ui/core";
import {Link} from "react-router-dom";
import "./style.css";
export default class QuizChooseView extends React.Component<QuizTypeState,any>{
    render(){
        if (this.props.data === null) return <></>;
        else console.log("here");
        let list = this.props.data.map((
            elem => (
                    
                        <Grid item md={6} xs={12} sm={6}>
                            <div className="QuizType">
                                <Link to={`/quiz/${elem.id}`}>
                                    <Grid container justify="center">
                                        <Grid item xs={12}>
                                            <h1>{elem.title}</h1>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <p>{elem.description}</p>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <img src={elem.image}/>
                                        </Grid>
                                    </Grid>
                                </Link>               
                                </div>
                        </Grid>
                    
                    )
            
        ));
        console.log(list);
        return <Grid container className="wrapper" spacing={16}>
            {list}
        </Grid>

    }
}