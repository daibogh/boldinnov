import * as React from "react";
import {Button, Theme, Grid} from "@material-ui/core";
import {observer} from "mobx-react";
import QuizModel from "../../models/QuizModel";
import { withStyles,createStyles, styled } from '@material-ui/styles';

export interface variantProps {
    id: string,
    text: string
}
const styles = createStyles(
    {
        variant:{
            // padding:'0.2%'
        }
    }
)
const StyledButton = withStyles({
    root: {
        // background: 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        // background:'linear-gradient(90deg, #000000 0%,#0f9b0f 100% )',
        // background:'linear-gradient(60deg, #ffe121 29%,#e3ff67 66%,#8aff00 100% )',
        background:'rgba(255,255,255,0.1)',
      borderRadius: 10,
      border: '4px solid #b99f4b',
      color: 'white',
      'min-height':'40px',
        'min-width':'224px',
    //   padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        '&:hover':{
            background: '#CDDC39'
        }
    },
    label: {
      textTransform: 'capitalize',
    },
  })<any>(Button);
const AnsweredStyledButton = withStyles({
    root: {
        background: '#CDDC39',//'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        'min-height':'40px',
        'min-width':'224px',

        borderRadius: 10,

        // color: 'white',
        // height: 48,
        // padding: '0 30px',
        border: '2px solid #b99f4b',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        '&:hover':{
            background: "#e1ea88"
          }
      },
      label: {
        textTransform: 'capitalize',
      },
      
})<any>(Button);

@observer class Variant extends React.Component<any,any>{
    // private readonly redTheme: Theme;
    // private readonly blueTheme: Theme;
    private id: String;
    constructor(props:any) {
        super(props);
        // this.redTheme = createMuiTheme({ palette: { primary: red } });
        // this.blueTheme = createMuiTheme({ palette: { primary: blue } });
        this.id = props.id;
    }

    render(){

        const props:any = this.props;
        return (
            
            <div className={props.classes.variant}>
                {/* <MuiThemeProvider theme={
                    QuizModel.user_behaviour.variant_choice === props.id? this.redTheme: this.blueTheme
                }> */}
                {QuizModel.user_behaviour.variant_choice === props.id?
                <AnsweredStyledButton size='large' id={props.id} variant="contained">
                    {props.text}
                </AnsweredStyledButton>:
                <StyledButton size='large' id={props.id} variant="contained"  onClick={(e:any) => QuizModel.user_behaviour.setVariant(e)}>
                    {props.text}
                </StyledButton>
            }
                {/* </MuiThemeProvider> */}
            </div>

        );
    }

}


export default withStyles(styles)<any>(Variant);