from django.conf import settings
from django.db import models
from PIL import Image


class Comment(models.Model):
    text = models.CharField(max_length=400, null=None, default=None)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    plant = models.ForeignKey("Plant", on_delete=models.CASCADE)


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

        if self.photo:
            filepath = self.photo.path
            width = self.photo.width
            height = self.photo.height
            max_size = max(width, height)

            photo = Image.open(filepath)

            photo_s = photo.resize(
                (round(width / max_size * 350),  # Сохраняем пропорции
                 round(height / max_size * 350)),
            )
            # И не забыть сохраниться
            new_filepath = filepath[0: len(filepath) - 4] + "s.jpg"
            print(new_filepath)
            photo_s.save(new_filepath)
