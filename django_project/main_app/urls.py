from django.urls import include, path
from rest_framework import routers
from . import views


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', views.index_view),  # for the empty url
    path('login/', views.LoginView.as_view()),
]

# urlpatterns = [
#     path('', views.index, name='index'),
# ]