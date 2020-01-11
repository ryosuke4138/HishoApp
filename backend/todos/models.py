from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Todo(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    TASK_STATUSES = (('Unstarted', 'Unstarted'), ('In Progress', 'In Progress'), ('Completed', 'Completed'))
    status = models.CharField(
        default='',
        max_length=20,
        choices=TASK_STATUSES 
    )
    category = models.ForeignKey(
        Category, 
        on_delete=models.CASCADE, 
        related_name="category",
        blank=True,
        null=True
    )
    created_at = models.DateTimeField(
        blank=True,
        null=True,
        auto_now_add = True
    )
    deadline = models.DateTimeField(
        blank=True,
        null=True
    )
    completed_at = models.DateTimeField(
        blank = True,
        null = True
    )

    def __str__(self):
        """A string representation of the model."""
        return self.title
