# Generated by Django 2.2.2 on 2019-06-08 19:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eventos', '0012_evento_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='evento',
            name='time',
            field=models.TimeField(),
        ),
    ]
