from rest_framework import serializers

from . import models


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'title', 'contents', 'created_at')
        model = models.Blog
