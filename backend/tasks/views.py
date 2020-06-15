from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Project, Category, Language
from .serializers import ProjectListSerializer, AddProjectSerializer, LanguageListSerializer, CategoryListSerializer


class ProjectListView(APIView):
    """Вывод списка проектов"""

    def get(self, request):
        projects = Project.objects.order_by('-pub_date')
        serializer = ProjectListSerializer(projects, many=True)
        return Response(serializer.data)


class AddProjectView(APIView):
    """Add project"""

    def post(self, request):
        add_project = AddProjectSerializer(data=request.data)
        if add_project.is_valid():
            add_project.save()
            return Response(status=201)
        return Response(status=400)


class CategoryListView(APIView):
    """Вывод списка категорий"""

    def get(self, request):
        categories = Category.objects.all()
        serializer = CategoryListSerializer(categories, many=True)
        return Response(serializer.data)


class LanguageListView(APIView):
    """Вывод списка языков"""

    def get(self, request):
        languages = Language.objects.all()
        serializer = LanguageListSerializer(languages, many=True)
        return Response(serializer.data)


class ProjectWebListView(APIView):

    def get(self, request):
        projects = Project.objects.filter(category_id=1)
        serializer = ProjectListSerializer(projects, many=True)
        return Response(serializer.data)


class ProjectAnotherListView(APIView):

    def get(self, request):
        projects = Project.objects.filter(category_id=4)
        serializer = ProjectListSerializer(projects, many=True)
        return Response(serializer.data)

class ProjectGameListView(APIView):

    def get(self, request):
        projects = Project.objects.filter(category_id=2)
        serializer = ProjectListSerializer(projects, many=True)
        return Response(serializer.data)


class ProjectScriptsListView(APIView):

    def get(self, request):
        projects = Project.objects.filter(category_id=3)
        serializer = ProjectListSerializer(projects, many=True)
        return Response(serializer.data)


class ProjectDetailView(APIView):

    def get(self, request, pk):
        project = Project.objects.get(id=pk)
        serializer = ProjectListSerializer(project)
        return Response(serializer.data)

