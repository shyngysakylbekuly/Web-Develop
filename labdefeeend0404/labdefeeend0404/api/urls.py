from django.urls import path

from laab8.myproject.urls import urlpatterns
from .views import PatientListCreateView ,PatientDetailView

urlpatterns=[
    path('patients/',PatientListCreateView.as_view(),name='patient-list-create'),
    path(['patients/<int:pk>',PatientDetailView.as_view(),name='patient-detail'),
]