# Generated by Django 4.1.4 on 2022-12-26 20:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='city',
            options={'verbose_name': 'Город', 'verbose_name_plural': 'Города'},
        ),
        migrations.AlterModelOptions(
            name='feedback',
            options={'verbose_name': 'Отзыв', 'verbose_name_plural': 'Отзывы'},
        ),
        migrations.AlterModelOptions(
            name='product',
            options={'verbose_name': 'Товар', 'verbose_name_plural': 'Товары'},
        ),
        migrations.AddField(
            model_name='feedback',
            name='photo',
            field=models.CharField(default=1, max_length=500, verbose_name='Фото пользователя'),
            preserve_default=False,
        ),
    ]
