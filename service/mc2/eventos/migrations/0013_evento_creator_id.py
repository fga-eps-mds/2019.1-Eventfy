# Generated by Django 2.1.7 on 2019-05-30 19:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eventos', '0012_evento_player'),
    ]

    operations = [
        migrations.AddField(
            model_name='evento',
            name='creator_id',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
