import * as React from "react";
import {Link} from "react-router-dom";
import beginStage from "../../components/begin_stage";
import { Button } from "@material-ui/core/es";

import QuizWrapper from "../QuizWrapper"
export default class main_theme extends React.Component{
    render(){
        return <>
            <Link to="/quiz/"><Button>Викторина</Button></Link>
            <Link to="/map/"><Button>Карта</Button></Link>
            </>
    }
}