from django.db import models

# Create your models here.
from quiz.helpers import RandomFileName

class Map(models.Model):
    id = models.AutoField(primary_key=True)

    title = models.TextField()
    description = models.TextField()
    img = models.ImageField(upload_to=RandomFileName('map/img'), blank=True)