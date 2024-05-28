from django.db import models

class Shelter(models.Model):
    city=models.CharField(max_length=20)
    name=models.CharField(max_length=30)
    address=models.CharField(max_length=200)
    phone_number=models.PositiveIntegerField(default=123456789)