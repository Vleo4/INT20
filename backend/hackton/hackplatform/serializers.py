from django.contrib.auth.models import User
from rest_framework import serializers

from .models import *


class ProjectSerializer(serializers.ModelSerializer):
    developers = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = "__all__"


class ProjectListSerializer(serializers.ModelSerializer):
    customer = serializers.StringRelatedField()
    developers = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = "__all__"


class CreateProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')
        lookup_field = 'username'
        extra_kwargs = {
            'url': {'lookup_field': 'username'}
        }


class RegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

        platform_user = PlatformUser.objects.create(
            user=user,
        )

        return user


class CreateCVSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        model = CV


class CVSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()

    class Meta:
        fields = "__all__"
        model = CV


class PlatformUserSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()

    class Meta:
        fields = "__all__"
        model = PlatformUser


class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = "__all__"


class PlatformUserProfileSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()

    class Meta:
        fields = "__all__"
        model = PlatformUser


class PlatformUserAchSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    achievements = AchievementSerializer(many=True)

    class Meta:
        fields = "__all__"
        model = PlatformUser


class TempUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username']


class ExecutorSerializer(serializers.ModelSerializer):
    username = serializers.CharField()

    class Meta:
        model = User
        fields = ['id', 'username']


class CreateOrderSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        model = Order


class ListOrderSerializer(serializers.ModelSerializer):
    executor = ExecutorSerializer()
    project = serializers.SlugRelatedField(slug_field='title', read_only=True)

    class Meta:
        fields = "__all__"
        model = Order