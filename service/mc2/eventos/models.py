from django.db import models
from datetime import datetime

class Evento(models.Model):
    title = models.CharField(max_length=255)
    date = models.DateTimeField()
    points = models.IntegerField()
    description = models.TextField()
    url_image = models.CharField(max_length=255)
    reward_id = models.IntegerField()
