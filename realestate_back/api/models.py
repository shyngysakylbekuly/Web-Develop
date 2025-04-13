from django.db import models

class Agency(models.Model):
    name=models.CharField(max_length=100)
    description=models.TextField()
    city=models.CharField(max_length=100)
    address=models.TextField()


    def __str__(self):
        return self.name


class Property(models.Model):
    title=models.CharField(max_length=200)
    details=models.TextField()
    price=models.FloatField()
    agency=models.ForeignKey(Agency,on_delete=models.CASCADE,related_name='properties')



    def __str__(self):
        return self.title

