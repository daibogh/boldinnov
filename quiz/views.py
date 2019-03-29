import json
import os
from django.db import transaction
from django.http import JsonResponse
from django.shortcuts import render
from django.template.response import TemplateResponse

# Create your views here.
from quiz.models import Question


from django.views.generic import TemplateView


# class IndexView(TemplateView):
#    template_name = 'main/index.html'


def index(request):
    return TemplateResponse(request, 'index.html')
#
#
# def get_questions(request):
#     ans = {'ans':[e.id for e in Question.objects.all()]}
#     return JsonResponse(ans)
#
#
# def get_question(request,id):
#     # id = request.GET.get('q_id')
#     id = int(id) if id is not None else 1
#     q_path = Question.objects.get(pk=id).path
#     module_dir = os.path.dirname(os.path.dirname(__file__))  # get current directory
#     file_path = os.path.join(module_dir, q_path)
#     with open(file_path) as _json:
#         return JsonResponse(json.dumps(_json.read()), safe=False)
#
#
# def upload_question(request):
#     q_json = json.loads(request.body)
#
#     with transaction.atomic():
#         question = Question()
#         question.save()
#     question.path = dump_json_to_file(question.id, q_json)
#     question.save()
#
#     return JsonResponse(json.loads('{"status":"OK"}'))
#
#
# # UTILS
#
# def dump_json_to_file(id:int,q_json) -> str:
#     q_path = 'quiz/questions/{}.json'.format(id)
#     with open(q_path,'w') as f:
#         json.dump(q_json, f)
#     return q_path

from django.views.generic import TemplateView


class IndexView(TemplateView):
   template_name = 'index.html'