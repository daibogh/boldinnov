from rest_framework.generics import ListAPIView, RetrieveAPIView

from quiz.api.serializers import QuestionSerializer
from quiz.api.serializers import QuizSerializer
from quiz.models import Question
from quiz.models import Quiz


class QuestionListView(ListAPIView):
    serializer_class = QuestionSerializer
    def get_queryset(self):
        quiz = self.kwargs['quiz']
        return Question.objects.filter(quiz=quiz)


class QuestionDetailView(RetrieveAPIView):
    serializer_class = QuestionSerializer
    def get_queryset(self):
        quiz = self.kwargs['quiz']
        return Question.objects.filter(quiz=quiz)

class QuizListView(ListAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class QuizDetailView(RetrieveAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
