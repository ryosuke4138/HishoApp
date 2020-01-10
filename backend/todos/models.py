from django.db import models


# def CATEGORY():
#     return (('a', 'A'), ('b', 'B'), ('c', 'C'))

def return_tuple():
    return (('u', 'Unstar'), ('i', 'In Progr'), ('c', 'Comple'))

class Todo(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    TASK_STATUSES = (('Unstarted', 'Unstarted'), ('In Progress', 'In Progress'), ('Completed', 'Completed'))
    status = models.CharField(
        default=0,
        max_length=20,
        choices=TASK_STATUSES 
    )
    category = models.CharField(
        default=0,
        max_length=20,
        choices=return_tuple()
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
