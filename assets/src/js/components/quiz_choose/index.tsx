import * as React from "react";
import PushkinLoadingImg from "../PushkinLoadingImg";
import QuizChooseView from "../QuizChooseView";

export interface QuizTypeInt{
    id: number,
    title: string,
    description: string,
    question_set: any[],
    image: string
}
export interface QuizTypeState {
    status: number|null;
    data: QuizTypeInt[]|null
}
export default class quiz_choose extends React.Component<any,QuizTypeState>{
    constructor(props:any){
        super(props);
        this.state = {
            status: null,
            data: null
        };
    }

    render(){
        if (this.state.status != null || this.state.status == 200){
            return <><QuizChooseView data={this.state.data} status={this.state.status}/></>
        }
        let promise = fetch("/quiz/api/").then(
            (resp: Response) => {

                return resp.json();
            }
        );
        promise.then(
            resp => {this.setState({status:200, data:resp})});
        return <PushkinLoadingImg/>
    }
}