from django.urls import path
# from django.conf.urls import url
from .view import index_view
from django.urls import re_path as url

urlpatterns = [
    path('', index_view),  # for the empty url
    url(r'^.*/$', index_view)  # for all other urls
]
