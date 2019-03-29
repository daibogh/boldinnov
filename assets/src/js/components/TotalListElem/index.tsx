import * as React from "react";
import {Grid} from "@material-ui/core";
import AlertDialogSlide from "../AlertDialogSlide";
import withStyles from "@material-ui/styles/withStyles";
import { observer } from "mobx-react";
import question from "../../interfaces/question";

interface question_interface {
    question: question,
    is_correct:boolean
}
interface TotalListElemProps{
    element: any,
    index: Number
}
const StyledGrid = withStyles({
    root:{
      'padding-top': '5%'
    }
  })<any>(Grid);
@observer
class TotalListElem extends React.Component<TotalListElemProps,any>{
    private element: question_interface;
    private index: any;

    constructor(props:any){
        super(props);
        this.element = props.element;
        this.index = props.index;
    }
    render() {
        return (
            <Grid key={this.index} container justify='center' spacing={16}>
                <Grid item xs={6} sm={4} md={4}>

                    {"Вопрос № "+ ++this.index}

                </Grid>
                <Grid item xs={6} sm={4} md={4}>

                {this.element.is_correct?"Правильно!":"Неправильно!"}

                </Grid>
                <Grid item xs={12} sm={4} md={4}>

                    <AlertDialogSlide question={this.element.question} index={this.index}/>

                </Grid>
            </Grid>
        );
    }

}
export default TotalListElem;