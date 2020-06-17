from django.contrib import admin
from .models import Category, Project, Language, TechTask


admin.site.register(Category)
admin.site.register(Project)
admin.site.register(Language)
admin.site.register(TechTask)

