from django.urls import path, include

from quiz import views
from quiz.views import index
from django.views.generic import TemplateView
urlpatterns = [
    # path('', views.quiz),
    # path('<int:id>/', views.get_question),
    # path('upload/',views.upload_question),
    # path('get_questions/', views.get_questions),
    path('api/', include('quiz.api.urls')),
    # path('', index)
    # path('', TemplateView.as_view(template_name='frontend/index.html')),
]
