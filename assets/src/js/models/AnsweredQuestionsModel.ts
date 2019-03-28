import {types} from "mobx-state-tree";
import AnsweredQuestionModel from "./AnsweredQuestion";


const AnsweredQuestionsModel = types.model("answered_questions",
    {
        items: types.array(AnsweredQuestionModel)
    })
    .actions(
        (        self: { items: any[]; }) => ({
                    append(question:any){
                        self.items.push(question);
            }
        })
    )
;

export default AnsweredQuestionsModel;