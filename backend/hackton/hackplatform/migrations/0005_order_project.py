# Generated by Django 4.1.7 on 2023-03-04 16:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hackplatform', '0004_order'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='project',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='project', to='hackplatform.project', verbose_name='project'),
            preserve_default=False,
        ),
    ]
