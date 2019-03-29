import {types} from "mobx-state-tree";

const QuestionModel = types.model("question", {
    id: types.integer,
    question: types.string,
    a: types.string,
    b: types.string,
    c: types.string,
    d: types.string,
    answer: types.string,
    description: types.string,
    questionImg: types.maybeNull(types.string),
    descriptionImg: types.maybeNull(types.string)
});

export default QuestionModel;