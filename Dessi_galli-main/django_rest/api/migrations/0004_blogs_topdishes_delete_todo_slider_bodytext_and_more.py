# Generated by Django 4.0.1 on 2022-02-25 04:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_rename_blogs_todo'),
    ]

    operations = [
        migrations.CreateModel(
            name='Blogs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('desc', models.TextField(blank=True, null=True)),
                ('img', models.ImageField(help_text='upload blog img image', upload_to='images/', verbose_name='Blogimg')),
                ('datandtime', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='TopDishes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(help_text='upload top dish image', upload_to='images/', verbose_name='topdishimg')),
                ('dishname', models.CharField(max_length=200)),
            ],
        ),
        migrations.DeleteModel(
            name='Todo',
        ),
        migrations.AddField(
            model_name='slider',
            name='bodyText',
            field=models.TextField(default='hello', null=True),
        ),
        migrations.AddField(
            model_name='slider',
            name='heading',
            field=models.CharField(default='ok', max_length=200),
        ),
        migrations.AlterField(
            model_name='contact',
            name='phone',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='tabler',
            name='phone',
            field=models.IntegerField(),
        ),
    ]
