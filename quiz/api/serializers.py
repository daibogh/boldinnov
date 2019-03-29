from rest_framework import serializers

from quiz.models import Question
from quiz.models import Quiz


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'question', 'a', 'b', 'c', 'd', 'answer', 'description', 'questionImg', 'descriptionImg')

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ('id', 'title', 'description', 'image', 'question_set')
