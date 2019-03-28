import * as React from 'react';
import withStyles from '@material-ui/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



const StyledButton = withStyles(
    {
       root: { 
        //    background: '#DC2424',  /* fallback for old browsers */
            // background: '-webkit-linear-gradient(to right, #4A569D, #DC2424)',  /* Chrome 10-25, Safari 5.1-6 */
            background: '#8BC34A' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
            textAlign: 'center',
            '&:hover':{
                background: '#8BC34A'
            }
            }
    }
)<any>(Button);

const IncorrectAnswerStyledButton = withStyles(
    {
       root: { 
        //    background: '#DC2424',  /* fallback for old browsers */
            // background: '-webkit-linear-gradient(to right, #4A569D, #DC2424)',  /* Chrome 10-25, Safari 5.1-6 */
            background: '#e84652' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
            textAlign: 'center',
            '&:hover':{
                background: '#e84652'
            }
            }
    }
)<any>(Button);

class ReviewVariant extends React.Component<any,any>{

    render(){
        return <Grid item xs={6} >
                <div>
                    <Grid container justify='center'>
                    
                        { this.props.isCorrect?
                        <StyledButton size='large'>
                            {this.props.data}
                        </StyledButton>:
                        <IncorrectAnswerStyledButton size='large'>
                            {this.props.data}
                        </IncorrectAnswerStyledButton>
                        
                    }
                    </Grid>
                    </div>
            </Grid>

    }
}

export default ReviewVariant;