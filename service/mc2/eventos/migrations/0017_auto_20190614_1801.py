# Generated by Django 2.2.2 on 2019-06-14 21:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eventos', '0016_evento_place'),
    ]

    operations = [
        migrations.AlterField(
            model_name='evento',
            name='place',
            field=models.CharField(default='unspecified', max_length=255),
        ),
    ]
