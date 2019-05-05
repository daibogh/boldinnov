import * as React from "react";
import {Fade, Grid} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from '@material-ui/core/Typography';

import MapModel from '../../models/MapModel';
import PushkinLoadingImg from "../PushkinLoadingImg";
import Divider from "@material-ui/core/Divider";

// import BoldinoImg from "/img/map.jpg";
import ZoomButton from '../ZoomButton'

class map_block extends React.Component{
    //BoldinoImg = "/static/src/img/map.jpg";
    BoldinoImg = "/static/src/img/map_new.jpg";
    ZoomInImg = "/static/src/img/zoomIn.png";
    ZoomOutImg = "/static/src/img/zoomOut.png";
    state = {
        status:'not_success',
        scale_koef: 1,
        windowHeight: 4580,
        windowWidth: 4000,
    };

    scaleOpt = {
        step: 0.1,
        max: 1.5,
        min: 0.3,
        beforeMin: 0.4,
    }

    constructor(props: any) {
        super(props);

        this.scaleOpt.min = Math.max((window.innerWidth / 4580) * 0.75, window.innerHeight / 4000);
        this.scaleOpt.beforeMin = (Math.floor(this.scaleOpt.min * 10) + 1) / 10;

        this.state.scale_koef = this.scaleOpt.min;
    }

    handleResize = () => this.setState({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
    });
    
    componentDidMount() {
        this.handleResize();
        console.log(window.innerWidth + "   " + window.innerHeight)
        window.addEventListener('resize', this.handleResize)
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    clamp(val:any, max:any, min:any) {
        return Math.max(Math.min(val, max), min);
    }

    calculateScale(koef:any) {
        var val = this.clamp(this.state.scale_koef + koef * this.scaleOpt.step, this.scaleOpt.max, this.scaleOpt.min);
        if (val == this.scaleOpt.min + this.scaleOpt.step) val = this.scaleOpt.beforeMin;

        return val;
    }

    render() {
        if (this.state.status === 'success') {
            return (
                <div>
                  <CssBaseline />
                    <Grid container direction="row" >
                        <Grid item xs={3}>
                            <Paper className="DetailedInfoWindow">
                                <Grid container spacing={16} direction="column">
                                    <Grid item className="imgWrap">
                                        <img className="sightImg" alt="Press on item to get detailed info" src={MapModel.loaded_map.getImage()} />
                                    </Grid>

                                    <Divider className="divider"/>

                                    <Grid item>
                                        <Typography gutterBottom variant="title">
                                            {MapModel.loaded_map.getTitle()}
                                        </Typography>
          
                                        <Typography gutterBottom>
                                            {MapModel.loaded_map.getDescription()}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={9}>
                            <Paper className="mapWrapper">
                                <Draggable 
                                    bounds={{
                                        top: (-4000 * this.state.scale_koef) + this.state.windowHeight,
                                        left: (-4580 * this.state.scale_koef) + this.state.windowWidth * 0.75,
                                        right: 0,
                                        bottom: 0}}>
                                    <div>
                                        <svg className="boldinoSVG" width={4580 * this.state.scale_koef} height={4000 * this.state.scale_koef} >
                                            {MapModel.loaded_map.GetSVGClickableForRender(this.state.scale_koef)}
                                        </svg>
                                        <img className="boldinoMapImg" width={4580 * this.state.scale_koef} height={4000 * this.state.scale_koef} src={this.BoldinoImg} alt="image"/>
                                    </div>
                                </Draggable>
                                <ZoomButton className="mapZoomButton mapZoomInButton"
                                    data={{
                                        img: this.ZoomInImg,
                                        onClick: () => this.setState({scale_koef: this.calculateScale(1)}),
                                    }}>
                                </ZoomButton>
                                <ZoomButton className="mapZoomButton mapZoomOutButton"
                                    data={{
                                        img: this.ZoomOutImg,
                                        onClick: () => this.setState({scale_koef: this.calculateScale(-1)}),
                                    }}>
                                </ZoomButton>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
              );
        }

        // Fetch map objects
        fetch(`/map/api/`).then(
            (resp:any) =>
            resp.json().then(
                (data:any) => ({
                    data: data,
                    status: resp.status
                })
            )
        ).then(
            (resp:any) => {

                MapModel.loaded_map.initLoad(resp.data);
                setTimeout (() => this.setState({status: "success"}), 0);
            }
        );

        return <PushkinLoadingImg/>
    }
}
export default map_block;