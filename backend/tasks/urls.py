from django.urls import path

from . import views


urlpatterns = [
    path('projects/', views.ProjectListView.as_view()),
    path('languages/', views.LanguageListView.as_view()),
    path('categories/', views.CategoryListView.as_view()),
    path('add-project/', views.AddProjectView.as_view()),
]