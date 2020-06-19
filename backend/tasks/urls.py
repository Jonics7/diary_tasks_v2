from django.urls import path

from . import views

#------------------------------------------------------------------------------
projects_list = views.ProjectViewSet.as_view({
    "get": "list"
})

add_project = views.AddProjectViewSet.as_view({
    "post": "create"
})

projects_detail = views.ProjectViewSet.as_view({
    "get": "retrieve"
})
projects_web_list = views.ProjectWebListViewSet.as_view({
    "get": "list"    
})

projects_game_list = views.ProjectGameListViewSet.as_view({
    "get": "list"
})

projects_scripts_list = views.ProjectScriptsListViewSet.as_view({
    "get": "list"
})

projects_another_list = views.ProjectAnotherListViewSet.as_view({
    "get": "list"
})

#------------------------------------------------------------------------------
task = views.TaskViewSet.as_view({
    "get": "list",
    "post": "create"
})

task_detail = views.TaskViewSet.as_view({
    "get": "retrieve",
    "put": "update",
    "patch": "partial_update",
    "detele": "destroy"
})
#------------------------------------------------------------------------------
category_list = views.CategoryListViewSet.as_view({
    "get": "list"
})

language_list = views.LanguageListViewSet.as_view({
    "get": "list"
})
#------------------------------------------------------------------------------


urlpatterns = [
    path('add-project/', add_project, name='add-project'),
    path('projects/', projects_list, name='projects-list'),
    path('projects/<int:pk>', projects_detail, name='projects-detail'),
    path('projects/web/', projects_web_list, name="projects_web_list"),
    path('projects/game/', projects_game_list, name="projects_game_list"),
    path('projects/scripts/', projects_scripts_list, name="projects_scripts_list"),
    path('projects/another/', projects_another_list, name="projects_another_list"),

    path('tasks/', task, name='task-list'),
    path('tasks/<int:pk>', task_detail, name='task-detail'),

    path('categories/', category_list, name='category-list'),
    path('languages/', language_list, name="language-list"),
]


# urlpatterns = [
#     path('projects/', views.ProjectListView.as_view()),
#     path('projects/web/', views.ProjectWebListView.as_view()),
#     path('projects/game/', views.ProjectGameListView.as_view()),
#     path('projects/scripts/', views.ProjectScriptsListView.as_view()),
#     path('projects/another/', views.ProjectAnotherListView.as_view()),
#     path('project/<int:pk>/', views.ProjectDetailView.as_view()),
#     path('languages/', views.LanguageListView.as_view()),
#     path('categories/', views.CategoryListView.as_view()),
#     path('add-project/', views.AddProjectView.as_view()),
#     path('add-task/', views.AddTaskView.as_view()),
#     path('update-task/', views.TaskUpdateView.as_view()),
#     path('tasks/', views.TaskListView.as_view()),
# ]