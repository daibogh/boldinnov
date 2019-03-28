import {types} from "mobx-state-tree";
import QuestionModel from "./QuestionModel";

const AnsweredQuestionModel = types.model(
    "answered_question",
    {
        question: types.maybeNull(QuestionModel),
        is_correct: false
    });

export default  AnsweredQuestionModel;