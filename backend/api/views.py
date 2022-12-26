from django.shortcuts import render
from rest_framework import generics

from .models import *
from .serializers import *


class ProductAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CityAPIView(generics.ListAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializer


class FeedbackAPIView(generics.ListAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer


def index(request):
    return render(request, 'index.html', {})
