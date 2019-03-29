from django.db import models

# Create your models here.
from quiz.helpers import RandomFileName

class Map(models.Model):
    id = models.IntegerField(primary_key=True)

    title = models.TextField()
    description = models.TextField()
    img = models.ImageField(upload_to=RandomFileName('map/img'), blank=True)

    def __str__(self):
        return "точка " + str(self.id)

    class Meta:
        verbose_name = 'Элемент карты'
        verbose_name_plural = 'Элементы карты'