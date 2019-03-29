import withStyles from "@material-ui/styles/withStyles";
import Paper from "@material-ui/core/Paper";

const StyledPaper = withStyles({
    root: {
        background: 'inherit',
        // maxHeight: 400,
        overflow: 'auto',
        padding: '5%',
    }
  })<any>(Paper);

  export default StyledPaper;

  