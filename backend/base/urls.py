from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.Login.as_view(), name="login"),
    path('register/', views.Register.as_view(), name="register"),
    path('product/', views.Products.as_view(), name="products"),
    path('product/<str:pk>', views.Product.as_view(), name="product"),
]
