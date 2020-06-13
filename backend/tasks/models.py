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
    task = models.TextField('Техническое задание', blank=True)
    pub_date = models.DateTimeField('Дата публикации', null=True, auto_now_add=True, auto_now=False, blank=True)
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