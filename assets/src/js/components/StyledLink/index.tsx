import { Link } from "react-router-dom";
import withStyles from "@material-ui/styles/withStyles";

const StyledLink = withStyles({
    root:{
        'text-decoration': 'none',
        color: 'black',
    }
})<any>(Link);

export default StyledLink;

//неработает на самом деле