import * as React from "react";
import {Grid} from "@material-ui/core";
import  {variantProps} from "../VariantButton";
import Variant from "../VariantButton";
import QuizModel from "../../models/QuizModel";

import { withStyles,createStyles } from '@material-ui/styles';

const styles = createStyles(
    {
        grid_container:{
            // padding: '2%'
        }
    }
);
class VariantsBox extends React.Component<any,any> {
    render(){

        const question = QuizModel.user_behaviour.getQuestion();
        if (question === undefined || question === null) return <p/>;
        const p = this.props;

        const pA:variantProps = {id:"A", text:question.a};
        const pB:variantProps = {id:"B", text:question.b};
        const pC:variantProps = {id:"C", text:question.c};
        const pD:variantProps = {id:"D", text:question.d};
        return (
            <div>

                <Grid  container justify="center" spacing={40}>
                <Grid item xs={12} sm={6} md={6}>
                    <Variant {...pA}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                    <Variant {...pB}/>
                    </Grid>


                    <Grid item xs={12} sm={6} md={6}>
                    <Variant {...pC}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                    <Variant {...pD}/>
                    </Grid>
                </Grid>
            </div>
        );
                }
}
export default withStyles(styles)<any>(VariantsBox);