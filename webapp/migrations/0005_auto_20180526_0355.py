# -*- coding: utf-8 -*-
# Generated by Django 1.11.13 on 2018-05-26 03:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0004_auto_20180526_0348'),
    ]

    operations = [
        migrations.AlterField(
            model_name='record',
            name='shared_needles',
            field=models.CharField(choices=[('Y', 'Yes'), ('N', 'No')], max_length=3, null=True),
        ),
    ]
