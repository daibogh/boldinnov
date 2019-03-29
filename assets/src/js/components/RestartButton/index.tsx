import { withStyles } from "@material-ui/core/";
import { Button } from "@material-ui/core";


const RestartButton = withStyles({
    root:{
        'min-height':'40px',
        'min-width':'224px',
        'background-color': '#4CAF50',
        'margin': '5%',
        display: 'auto',
        borderRadius: 35,
        // backgroundColor: "#21b6ae",
        // backgroundColor: "rgba(232, 0, 0, 0.4)",
        '&:hover':{
            background: 'rgba(232, 0, 0, 0.9)'
        }
    }
})<any>(Button);

export default RestartButton;