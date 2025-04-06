from car_rental_back.api.carcategory import CarCategory


class Car(models.Model):
    brand=models.CharField(max_length=255)
    model=models.CharField(max_length=255)
    price_per_day=models.floatField()
    available_units=models.IntegerField()
    category=models.ForeignKey(CarCategory,related_name='cars',on_delete=models.CASCADE)
    def __str__(self):
        return f"{self.brand}{self.model}"
