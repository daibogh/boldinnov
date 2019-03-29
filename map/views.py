import json
import os
from django.db import transaction
from django.http import JsonResponse
from django.shortcuts import render
from django.template.response import TemplateResponse

# Create your views here.
from map.models import Map
from django.views.generic import TemplateView


def index(request):
    return TemplateResponse(request, 'index.html')

class IndexView(TemplateView):
   template_name = 'index.html'