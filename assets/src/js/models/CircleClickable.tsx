import React, { Component } from 'react';

export default class CircleClickable extends Component<any,any> {
    objectNumber:any;
    cx:any;
    cy:any;
    rx:any;
    ry:any;
    callback:any;
    constructor(props:any) {
        super(props);
        
        this.objectNumber = this.props.data.objectNumber;
        this.cx = this.props.data.cx;
        this.cy = this.props.data.cy;
        this.rx = this.props.data.rx;
        this.ry = this.props.data.ry;
        this.callback = this.props.data.callback;
    }

    onClick() {
        this.callback.SetCurrentItem(this.objectNumber);
    }

    render() {
        return (
            <a href="#" onClick={() => this.onClick()}>
                <ellipse className="boldinoElement" cx={this.cx * this.props.scale} cy={this.cy * this.props.scale} rx={this.rx * this.props.scale} ry={this.ry * this.props.scale} fill="#bf2552" />
            </a>
        );
    }
}
