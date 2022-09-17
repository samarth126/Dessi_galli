from django.contrib import admin
from django.urls import path, include
from . import views
from .views import MyTokenObtainPairView, Admin_Post, Blog_Post, Dish_Post, Reservation, ContactPost
from django.conf import settings
from django.conf.urls.static import static

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('createmenu/', Admin_Post.as_view() , name="createmenu"),
    path('creatBlog/', Blog_Post.as_view() , name="createmenu"),
    path('createTopdish/', Dish_Post.as_view() , name="createdish"),
    path('topdish/', views.topdish, name="topdish"),
    path('', views.home, name="home"),
    path('todo/<str:pk>', views.blog, name="todo"),
    # path('create', views.create, name="create"),
    path('update/<str:pk>', views.update, name="update"),
    path('delete/<str:pk>', views.delete, name="delete"),
    path('deletemenu/<str:pk>', views.deleteMenu, name="deleteMenu"),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('menu/', views.menu, name="menu"),
     path('banner/', views.slider, name="banner"),
     path('reservation/', Reservation.as_view(), name="reservation"),
     path('reservationGet/', views.reservationGet, name="reservationGet"),
     path('eventget/', views.eventget, name="eventget"),
     path ('eventpost/', views.eventPost, name="eventPost"),
     path('contactpost/', ContactPost.as_view(), name="contact"),
     path('contactget/', views.contactget, name="contactget"),
     
     
    
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

