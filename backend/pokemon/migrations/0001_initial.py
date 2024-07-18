# Generated by Django 5.0.7 on 2024-07-16 22:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pokemon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('api_id', models.IntegerField()),
                ('name', models.CharField(max_length=56, unique=True)),
                ('base_experience', models.IntegerField()),
                ('height', models.IntegerField()),
                ('weight', models.IntegerField()),
                ('front_url', models.CharField(max_length=256)),
                ('back_url', models.CharField(max_length=256)),
            ],
        ),
    ]
