from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListTodo.as_view()),
    path('<int:pk>/', views.DetailTodo.as_view()),
    path('category/', views.ListCategory.as_view()),
    path('category/<int:pk>/', views.DetailCategory.as_view()),
]
