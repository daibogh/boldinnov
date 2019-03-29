from django.urls import path

from quiz.api.views import QuestionListView, QuestionDetailView, QuizListView, QuizDetailView

urlpatterns = [
    path('', QuizListView.as_view()),
    path('<pk>', QuizDetailView.as_view()),
    path('<quiz>/questions', QuestionListView.as_view()),
    path('<quiz>/questions/<pk>', QuestionDetailView.as_view()),
]
