from django.contrib.auth import login
from django.contrib.auth.models import User, Group
from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework import permissions
from rest_framework import views
from rest_framework.response import Response
from . import serializers
from .serializers import UserSerializer


def index_view(request):
    return render(request, 'index.html', context=None)

class LoginView(views.APIView):
    # This view should be accessible also for unauthenticated users.
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = serializers.LoginSerializer(data=self.request.data,
                                                 context={'request': self.request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return Response(None, status=status.HTTP_202_ACCEPTED)
