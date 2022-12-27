from django.db import models


class Product(models.Model):
    product_name = models.CharField(max_length=255, verbose_name='Название товара')
    price = models.IntegerField(verbose_name='Цена')
    count = models.IntegerField(verbose_name='Количество')
    photo = models.CharField(max_length=500, verbose_name='Фото товара')
    is_active = models.BooleanField(default=True, verbose_name='Статус активности')

    def __str__(self):
        return self.product_name

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = "Товары"


class City(models.Model):
    city_name = models.CharField(max_length=100, verbose_name='Название города')
    phone_number = models.CharField(max_length=20, verbose_name='Номер телефона')
    map_coordinates = models.CharField(max_length=255, verbose_name='Координаты на карте')
    map_coordinates2 = models.CharField(max_length=255, verbose_name='Координаты на карте')
    is_active = models.BooleanField(default=True, verbose_name='Статус активности')

    def __str__(self):
        return self.city_name

    class Meta:
        verbose_name = 'Город'
        verbose_name_plural = "Города"


class Feedback(models.Model):
    author_name = models.CharField(max_length=255, verbose_name='Имя автора')
    text = models.CharField(max_length=500, verbose_name='Текст отзыва')
    photo = models.CharField(max_length=500, verbose_name='Фото пользователя')
    is_active = models.BooleanField(default=True, verbose_name='Статус активности')

    def __str__(self):
        return self.author_name

    class Meta:
        verbose_name = 'Отзыв'
        verbose_name_plural = "Отзывы"
