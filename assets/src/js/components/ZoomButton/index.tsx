import * as React from "react";

class ZoomButton extends React.Component<any, any> {
    className:any;
    img:any;
    onClick:any;
    constructor(props:any) {
        super(props);
        
        this.className = this.props.className;
        this.img = this.props.data.img;
        this.onClick = this.props.data.onClick;
    }

    render() {
        return (
        <div className={this.className}>
            <input type="image" src={this.img} onClick={() => this.onClick()} />
        </div>
        );
    }
}

export default ZoomButton;