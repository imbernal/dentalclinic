from django.db import models
from django.utils.dateformat import format


class Appointment(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    date = models.CharField(max_length=50 , default=None)
    hour = models.TimeField()

    def __str__(self):
        return self.email