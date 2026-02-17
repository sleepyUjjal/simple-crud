from rest_framework import viewsets, permissions
from .models import Task
from .serializers import TaskSerializer
from .permissions import IsOwnerOrAdmin

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrAdmin]

    def get_queryset(self):
        if self.request.user.role == 'ADMIN':
            return Task.objects.all()
        return Task.objects.filter(created_by=self.request.user)

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)
