# Generated by Django 4.0.1 on 2022-06-14 03:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crud', '0014_delete_cliente'),
    ]

    operations = [
        migrations.AddField(
            model_name='producto',
            name='descripcionProducto',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]
