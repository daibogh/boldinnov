import {types} from "mobx-state-tree";
import QuestionModel from "./QuestionModel";
import AnsweredQuestionModel from "./AnsweredQuestion";
import QuizModel from "./QuizModel";

const UserBehaviourModel = types.model("user_behaviour",
    {
        variant_choice: types.enumeration("variant", [
            'A','B','C','D','NA'
        ]),
        currentQuestion: types.maybe(QuestionModel),
        is_loaded: false,
        is_total: false
}).actions(
    self => ({
        toggle_total(){
            self.is_total = !self.is_total;
        },
        setQuestion(instance:any) {
            self.currentQuestion = QuestionModel.create(
                {
                    id:parseInt(instance.id),
                    question:instance.question,
                    a: instance.a,
                    b: instance.b,
                    c: instance.c,
                    d: instance.d,
                    answer: instance.answer,
                    description: instance.description,
                    questionImg: instance.questionImg,
                    descriptionImg: instance.descriptionImg

                }
            )
            self.is_loaded = true;
        },
        setVariant(e:any){

            self.variant_choice = e.currentTarget.id;
        },
        clear(){
            if (self.currentQuestion === undefined){
                return;
            }
            const answeredQuestion = AnsweredQuestionModel.create(
                {
                    question: QuestionModel.create({
                            id: self.currentQuestion.id,
                            question: self.currentQuestion.question,
                            a: self.currentQuestion.a,
                            b: self.currentQuestion.b,
                            c: self.currentQuestion.c,
                            d: self.currentQuestion.d,
                            answer: self.currentQuestion.answer,
                            description: self.currentQuestion.description,
                            questionImg: self.currentQuestion.questionImg,
                            descriptionImg: self.currentQuestion.descriptionImg
                        }
                    ),
                    is_correct: QuizModel.user_behaviour.isCorrect(QuizModel.user_behaviour.variant_choice)
                }
            );
            QuizModel.answered_questions.append(answeredQuestion);
            self.currentQuestion = undefined;
            self.variant_choice = "NA";
        }

    })
    ).views(
        self => ({
            get_total(){
                return self.is_total;
            },
            getQuestion(){
                return self.currentQuestion;
            },
            isChosen(){
                return self.variant_choice !== "NA";
            },
            isCorrect(user_variant:string){
                if (self.currentQuestion !== undefined && self.currentQuestion !== null) {
                    return user_variant.toLowerCase() === self.currentQuestion.answer.toLowerCase();
                }else return false;
            }
        })
    )
;

export default UserBehaviourModel;