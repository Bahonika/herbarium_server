from django.db import models
from django.contrib.auth.models import User


class Plant(models.Model):
    serial_number = models.IntegerField(null=None, default=None)
    name = models.CharField(max_length=150)
    latin = models.CharField(max_length=150)
    family = models.CharField(max_length=150)
    place = models.CharField(max_length=150)
    habitat = models.CharField(max_length=150)
    date = models.DateField()
    collector = models.CharField(max_length=150)
    determinate = models.CharField(max_length=150)
    photo = models.ImageField(upload_to='images/%Y/%m/%d/')


class Subscriber(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    session = models.TextField(max_length=40)
