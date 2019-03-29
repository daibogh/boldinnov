import * as React from 'react';
import { Fade } from '@material-ui/core';

class PushkinLoadingImg extends React.Component<any,any>{
    state = {
        toggle: true
    }
    timer: any;
    render(){

        return(
            this.state.toggle?
        <Fade in>
            <div>

                        <img src={"/static/src/img/loading_logo.png"} key={"/src/img/loading_logo.png"} />
                    </div>
            
        </Fade>
         : <Fade>
                    <div>

                    <img src={"/static/src/img/loading_logo.png"} key={"/src/img/loading_logo.png"} />
                    </div>
                </Fade>
        );
    }
    componentDidMount(){
       
        this.timer = setInterval(
            () => {
                this.setState({toggle: !this.state.toggle});
            }
            ,
            900
        );

    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    
}

export default PushkinLoadingImg;