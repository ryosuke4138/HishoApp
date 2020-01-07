from django.db import models


# def CATEGORY():
#     return (('a', 'A'), ('b', 'B'), ('c', 'C'))

class Todo(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    status = models.CharField(
        default='Unstarted',
        max_length=100
    )
    # category = models.IntegerField(
    #     blank=True,
    #     choices=CATEGORY
    # )
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
