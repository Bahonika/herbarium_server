from django.db import models


class PlantImage(models.Model):
    photo = models.ImageField(upload_to='images/%Y/%m/%d/')

    @property
    def img_url(self):
        return self.photo.url

    def __str__(self) -> str:
        return self.img_url


class Plant(models.Model):
    serial_number = models.IntegerField
    name = models.CharField(max_length=150)
    latin = models.CharField(max_length=150)
    family = models.CharField(max_length=150)
    place = models.CharField(max_length=150)
    habitat = models.CharField(max_length=150)
    date = models.DateField()
    collector = models.CharField(max_length=150)
    determinate = models.CharField(max_length=150)
    photo = models.ForeignKey(PlantImage, related_name="img", on_delete=models.RESTRICT)
