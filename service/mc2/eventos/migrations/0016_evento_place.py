# Generated by Django 2.2.2 on 2019-06-14 20:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eventos', '0015_merge_20190613_2327'),
    ]

    operations = [
        migrations.AddField(
            model_name='evento',
            name='place',
            field=models.CharField(default='none', max_length=255),
        ),
    ]
