import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default class QuizWrapper extends Component<any,any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        const ChildRenderObject = (<this.props.data/>);
        return (
            <div className="App">


            <Grid container justify='center'>
            
                {/* <DevTools /> */}
                <Grid item xs={12}>
                <Grid container justify='center'>
                    <Header/>
                </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                    {ChildRenderObject}
                </Grid>
                <Grid item xs={12}>
                <Grid container justify='center'>
                    <Footer/>
                </Grid>
                </Grid>
            </Grid>
        </div>
        );
    }
}
