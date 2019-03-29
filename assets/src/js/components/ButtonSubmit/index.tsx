import { Button } from "@material-ui/core";
import withStyles from "@material-ui/styles/withStyles";

const ButtonSubmit = withStyles({
    root:{
        // background: '#34A853',
        background: 'linear-gradient(60deg, rgba(250, 123, 3,0.5) 10%, rgba(125,170,48,0.5) 90%)',
        // margin: '2%',
        'min-height':'40px',
        'min-width':'224px',
        '&:hover':{

            background: 'linear-gradient(60deg, rgba(250, 123, 3,0.9) 25%, rgba(125,170,48,0.9) 75%)',
        }
    }
})<any>(Button);

export default ButtonSubmit;