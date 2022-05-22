from django.db import models
from django.contrib.auth.models import User
from PIL import Image
from os import path

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
    photo_s = models.ImageField(upload_to='images/%Y/%m/%d/s/'),

    def save(self, *args, **kwargs):
        # Сначала - обычное сохранение
        super(Plant, self).save(*args, **kwargs)

        # Проверяем, указан ли логотип
        if self.photo:
            filepath = self.photo.path
            width = self.photo.width
            height = self.photo.height
            max_size = max(width, height)

            photo = Image.open(filepath)
            # resize - безопасная функция, она создаёт новый объект, а не
            photo_s = photo.resize(
                (round(width / max_size * 250),  # Сохраняем пропорции
                 round(height / max_size * 250)),
            )
            # И не забыть сохраниться
            new_filepath = filepath[0: len(filepath)-4] + "s.jpg"
            print(new_filepath)
            photo_s.save(new_filepath)


class Subscriber(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    session = models.TextField(max_length=40)
