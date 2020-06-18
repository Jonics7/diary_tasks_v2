from rest_framework import serializers

from .models import Project, Category, Language, Task

class AddTaskSerializer(serializers.ModelSerializer):
    """Serializer for POST request(Add Task)"""

    class Meta:
        model = Task
        fields = ("task", "project", "complited", "id", )


class ProjectListSerializer(serializers.ModelSerializer):
    """Project List"""
    category = serializers.SlugRelatedField(slug_field="title", read_only=True)
    language = serializers.SlugRelatedField(slug_field="name", read_only=True)
    tasks = AddTaskSerializer(many=True)


    class Meta:
        model = Project
        fields = '__all__'


class AddProjectSerializer(serializers.ModelSerializer):
    """Serializer for POST request(Add Project)"""


    class Meta:
        model = Project
        exclude = ('upload', )


class TaskListSerializer(serializers.ModelSerializer):
    """Serializer for POST request(Add Project)"""


    class Meta:
        model = Task
        fields = '__all__'


class TaskUpdateSerializer(serializers.ModelSerializer):
    """Serializer for POST request(Add Project)"""

    class Meta:
        model = Task
        fields = ("complited", "id", )


class CategoryListSerializer(serializers.ModelSerializer):
    """Category List"""
    category = serializers.SlugRelatedField(slug_field="title", read_only=True)


    class Meta:
        model = Category
        fields = '__all__'


class LanguageListSerializer(serializers.ModelSerializer):
    """Language List"""
    language = serializers.SlugRelatedField(slug_field="name", read_only=True)


    class Meta:
        model = Language
        fields = '__all__'