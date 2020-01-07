from rest_framework import serializers
from . import models


class TodoSerializer(serializers.ModelSerializer):

    class Meta:
        fields = (
            'id',
            'title',
            'description',
            'status',
            'created_at',
            'deadline',
            'completed_at'
        )
        model = models.Todo
