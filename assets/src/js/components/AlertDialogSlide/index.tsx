import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ReviewQuestionBlock from '../ReviewQuestionBlock';
import { withStyles, Collapse } from '@material-ui/core';

function Transition(props:any) {
  return <Collapse in {...props} />;
}
interface DialogProps{
  question: any,
  index: number
}
const StyledButton = withStyles(
  {
    root:{
      // 'margin-top': '-5%',
      // 'margin-bottom': '10%',
      'color': 'black',
      opacity: 0.4,
      // padding: '1%',
    }
  }
)<any>(Button);

class AlertDialogSlide extends React.Component<DialogProps, any> {
  private question:any;
  state = {
    open: false,
  };
  index: number;

  constructor(props:any){
    super(props);
    this.question = props.question;
    this.index = props.index;
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {
    return (
      <div>
        <StyledButton variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Посмотреть
        </StyledButton>
        <Dialog 
          open={this.state.open}
          TransitionComponent={Transition}
          transitionDuration={1000}
          scroll='body'
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Вопрос № " + this.index}
          </DialogTitle>
          <DialogContent>
            <ReviewQuestionBlock question={this.question}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Закрыть
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialogSlide;