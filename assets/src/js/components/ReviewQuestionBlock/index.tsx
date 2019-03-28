import * as React from "react";
import { Grid } from "@material-ui/core";
import ReviewVariant from '../ReviewVariant';
import createStyles from '@material-ui/styles/createStyles';
import withStyles from '@material-ui/styles/withStyles';

interface ReviewQuestionBlockPropsI{
    question:any
}


const styles = createStyles(
    {
       ReviewVariant: { 
            //    background: '#DC2424',  /* fallback for old browsers */
            // background: '-webkit-linear-gradient(to right, #4A569D, #DC2424)',  /* Chrome 10-25, Safari 5.1-6 */
            // background: 'linear-gradient(to right, #4A569D, #DC2424)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            }
    }
)

class ReviewQuestionBlock extends React.Component<any,any>{
    question: any;
    constructor(props:ReviewQuestionBlockPropsI) {
        super(props);
        this.question = props.question;
    }
    render(){
        const classes = this.props.classes;
        return (<div>
            <Grid container justify='center'>
                <Grid item>
                    {this.question.question}
                </Grid>
            </Grid>
            <Grid container spacing={24}>
                    <ReviewVariant  isCorrect={this.question.answer === 'A'} data={this.question.a}/>
                    <ReviewVariant  isCorrect={this.question.answer === 'B'} data={this.question.b}/>
            </Grid>
            <Grid container spacing={24}>
                    <ReviewVariant  isCorrect={this.question.answer === 'C'} data={this.question.c}/>
                    <ReviewVariant  isCorrect={this.question.answer === 'D'} data={this.question.d}/>
            </Grid>
            <Grid container justify='center'>
                <p>{"ответ: "+this.question.answer}</p>
            </Grid>
            <Grid container>
                <p>Пояснение</p>
            </Grid>
            <Grid container>
            <p>{this.question.description}</p>
            </Grid>
                    
        </div>);
    }
}

export default withStyles(styles)<any>(ReviewQuestionBlock);