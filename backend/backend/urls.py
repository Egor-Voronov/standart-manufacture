
from django.contrib import admin
from django.urls import path

from api.views import *

urlpatterns = [
    path('', index),
    path('admin/', admin.site.urls),
    path('api/products/', ProductAPIView.as_view()),
    path('api/citys/', CityAPIView.as_view()),
    path('api/feedbacks/', FeedbackAPIView.as_view())
]
