# api/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('agencies/', views.AgencyList.as_view()),
    path('agencies/<int:pk>/', views.AgencyDetail.as_view()),
    path('agencies/<int:pk>/properties/', views.AgencyProperties.as_view()),
    path('properties/', views.PropertyList.as_view()),
    path('properties/<int:pk>/', views.PropertyDetail.as_view()),
    path('properties/top_ten/', views.top_ten_properties),
]
