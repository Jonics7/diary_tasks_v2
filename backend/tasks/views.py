from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets

from .models import Project, Category, Language, Task
from .serializers import (ProjectListSerializer,
                            AddProjectSerializer,
                            LanguageListSerializer,
                            CategoryListSerializer,
                            TaskSerializer
                            )


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.order_by('-pub_date')
    serializer_class = ProjectListSerializer


class AddProjectViewSet(viewsets.ModelViewSet):
    serializer_class =  AddProjectSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class =  TaskSerializer


class CategoryListViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class =  CategoryListSerializer


class LanguageListViewSet(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    serializer_class = LanguageListSerializer


class ProjectWebListViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.filter(category_id=1)
    serializer_class = ProjectListSerializer


class ProjectGameListViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.filter(category_id=2)
    serializer_class = ProjectListSerializer


class ProjectScriptsListViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.filter(category_id=3)
    serializer_class = ProjectListSerializer


class ProjectAnotherListViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.filter(category_id=4)
    serializer_class = ProjectListSerializer


class ProjectTaskView(APIView):

    def get(self, request, pk):
        p = Project.objects.get(id=pk)
        tasks = Task.objects.filter(project=p.id)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)