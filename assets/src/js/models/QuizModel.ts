import LoadedQuestionsModel from "./LoadedQuestions";
import AnsweredQuestionsModel from "./AnsweredQuestionsModel";
import UserBehaviourModel from "./UserBehaviour";
import { observable } from "mobx";


class QuizModel {
    loaded_questions = LoadedQuestionsModel.create({items:[]});
    answered_questions = AnsweredQuestionsModel.create({items:[]});
    user_behaviour = UserBehaviourModel.create({
        variant_choice: 'NA'
    });
    

    clear(){
        this.user_behaviour.toggle_total();
        this.loaded_questions = LoadedQuestionsModel.create({items:[]});
        this.answered_questions = AnsweredQuestionsModel.create({items:[]});
        this.user_behaviour = UserBehaviourModel.create({
        variant_choice: 'NA'
    });

    }
    get_answered_questions_count(){
        let count = 0;
        this.answered_questions.items.forEach(
            (elem) => count += elem.is_correct? 1: 0
        );
        return count;
    }

}

export default new QuizModel();
