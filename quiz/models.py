from django.db import models

# Create your models here.
from quiz.helpers import RandomFileName

class Quiz(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.TextField()
    description = models.TextField()
    image = models.ImageField(upload_to=RandomFileName('quiz/img'), blank=True)

    def __str__(self):
        return self.title
    class Meta:
            verbose_name = 'Жанр викторины'
            verbose_name_plural = 'Жанры викторины'

class Question(models.Model):
    id = models.AutoField(primary_key=True)
    # path = models.CharField(max_length=100)
    quiz = models.ForeignKey(to=Quiz, on_delete=models.CASCADE, null=True)
    question = models.TextField()
    a = models.TextField()
    b = models.TextField()
    c = models.TextField()
    d = models.TextField()
    answer = models.CharField(max_length=1, choices=(
        ('A', a),
        ('B', b),
        ('C', c),
        ('D', d),

    ))
    description = models.TextField()

    questionImg = models.ImageField(upload_to=RandomFileName('quiz/img'), blank=True)
    descriptionImg = models.ImageField(upload_to=RandomFileName('quiz/img'), blank=True)

    def __str__(self):
        return "викторина " + self.quiz.title + " - " + self.question
    class Meta:
            verbose_name = 'Вопрос'
            verbose_name_plural = 'Вопросы'