from django.urls import path

from . import views


urlpatterns = [
    path('projects/', views.ProjectListView.as_view()),
    path('projects/web/', views.ProjectWebListView.as_view()),
    path('projects/game/', views.ProjectGameListView.as_view()),
    path('projects/scripts/', views.ProjectScriptsListView.as_view()),
    path('projects/another/', views.ProjectAnotherListView.as_view()),
    path('project/<int:pk>/', views.ProjectDetailView.as_view()),
    path('languages/', views.LanguageListView.as_view()),
    path('categories/', views.CategoryListView.as_view()),
    path('add-project/', views.AddProjectView.as_view()),
    path('add-task/', views.AddTaskView.as_view()),
    path('update-task/', views.TaskUpdateView.as_view()),
    path('tasks/', views.TaskListView.as_view()),
]