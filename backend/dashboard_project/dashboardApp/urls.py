from django.urls import path
from .views import DataList, DataDetail

urlpatterns = [
    path('api/data/', DataList.as_view(), name='data-list'),
    path('api/data/<int:pk>/', DataDetail.as_view(), name='data-detail'),
]
