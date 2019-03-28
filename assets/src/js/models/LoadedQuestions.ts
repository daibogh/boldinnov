import {types,detach} from "mobx-state-tree";
import QuestionModel from "./QuestionModel";
import * as React from "react";
import QuizModel from "./QuizModel";
import {bool} from "prop-types";

const LoadedQuestionsModel = types.model(
    "loaded_questions",
    {
       items: types.array(QuestionModel),
       is_loaded: false
    }).actions(
    self => ({
        initLoad(data:any){
            console.log("LoadedQuestionsModel")
            console.log(data);
            data.map((instance: { id: string; question: string; a: string; b: string; c: string; d: string; answer: string; description: string; questionImg: string; descriptionImg: string; }) => {
                self.items.push(QuestionModel.create({
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
                }))
            });
            self.items = data;
            self.is_loaded = true;
        },
        popRandomQuestion(){
            QuizModel.user_behaviour.clear();
            if (self.items.length != 0){
                let index = Math.floor( Math.random()*self.items.length );
                let question = detach(self.items[index]); // Log the item
                // self.items.splice( index, 1 ); // Remove the item from the array
                QuizModel.user_behaviour.setQuestion(question);
                return true;
            }else return false;
        }

    })
).views(
    self => ({
        isEmpty(){
            return self.items.length == 0;
        }
    })
);

export default LoadedQuestionsModel;