from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class CV(models.Model):
    name = models.CharField(max_length=150)
    about = models.TextField()
    age = models.IntegerField(blank=True)
    hard_skills = models.TextField()
    soft_skills = models.TextField()
    languages = models.TextField()
    #is_published = models.BooleanField(default=True)
    former_work = models.TextField()
    user = models.ForeignKey(User, verbose_name='User', on_delete=models.CASCADE)


class Project(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    developers = models.ManyToManyField(User, verbose_name='devs', blank=True, related_name='projects_as_developer')
    open = models.BooleanField(default=True)
    likes = models.ManyToManyField(User, blank=True, related_name='likes')
    customer = models.ForeignKey(User, verbose_name='customer', on_delete=models.CASCADE, related_name='projects_as_customer')
    count_of_likes = models.IntegerField(default=0)

    def __str__(self):
        return self.title


class Achievement(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    ico = models.CharField(max_length=500, blank=True)


class PlatformUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    achievements = models.ManyToManyField('Achievement')


class Order(models.Model):
    project = models.ForeignKey('Project', verbose_name="project", related_name='project', on_delete=models.CASCADE)
    customer = models.ForeignKey(User, verbose_name="customer", related_name='customer', on_delete=models.CASCADE)
    executor = models.ForeignKey(User, verbose_name="executor", related_name='executor', on_delete=models.CASCADE)
    closed = models.BooleanField(default=False)

