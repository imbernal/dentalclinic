# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.utils.timezone import utc
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='comment',
        ),
        migrations.AddField(
            model_name='appointment',
            name='hour',
            field=models.TimeField(default=datetime.datetime(2015, 12, 5, 23, 41, 17, 642953, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
