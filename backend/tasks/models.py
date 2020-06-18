from django.db import models


class Category(models.Model):
    """ Категории проектов """
    title = models.CharField('Категория', max_length=150)
    objects = models.Manager()

    def __str__(self):
        return self.title


    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Language(models.Model):
    """Класс языков"""
    name = models.CharField('Используемый язык', max_length=50)
    objects = models.Manager()

    def __str__(self):
        return self.name


    class Meta:
        verbose_name = 'Используемый язык'
        verbose_name_plural = 'Используемые языки'


class Project(models.Model):
    """Класс проекта"""
    title = models.CharField('Название проекта', max_length=150)
    description = models.CharField('Описание проекта', max_length=150, blank=True)
    pub_date = models.DateTimeField('Дата публикации', null=True, auto_now_add=True, auto_now=False)
    category = models.ForeignKey(Category, verbose_name='Категория', on_delete=models.SET_NULL, null=True)
    upload = models.FileField('Готовый проект', upload_to='CompletedProjects/', blank=True,)
    language = models.ForeignKey(Language, verbose_name='Используемый язык', on_delete=models.SET_NULL, null=True)
    objects = models.Manager()

    def __str__(self):
        return self.title


    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'
        ordering = ['category']


class Task(models.Model):
    task = models.CharField('Техническое задание', max_length=150)
    project = models.ForeignKey(Project, verbose_name='Проект', on_delete=models.SET_NULL, null=True, related_name="tasks")
    complited = models.BooleanField('Статус выполнения', default=False)
    objects = models.Manager()

    def __str__(self):
        return self.task


    class Meta:
        verbose_name = 'Техническое задание'
        verbose_name_plural = 'Технические задания'