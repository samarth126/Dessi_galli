import email
from email.mime import message
from multiprocessing.dummy import Event
from pyexpat.errors import messages
from django.shortcuts import render
from django.shortcuts import HttpResponse
from django.http import JsonResponse
from django.urls import path
from rest_framework.decorators import api_view,  permission_classes
from rest_framework.response import Response
from .serializers import *
from django.contrib.auth.decorators import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.parsers import MultiPartParser, FormParser
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.core.mail import send_mail
from django.core.mail import EmailMessage







class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



#view for display the todo

@api_view(['GET'])

def home(request):
    blogs=Blogs.objects.all()
    serializer=BlogSerializer(blogs, many=True)
    
    
    
    return Response(serializer.data)



@api_view(['GET'])
def menu(request):
    menu=Menu.objects.all()
    serializer=MenuSerializer(menu, many=True)
    
    
    
    return Response(serializer.data)

class Admin_Menu(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes =[MultiPartParser, FormParser]

    def postmenu(self, request, format=None):
        print(request.data)
        serializer = MenuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#get request for slider
@api_view(['GET'])
def slider(request):
    slider=Slider.objects.all()
    serializer=ImgSerializer(slider, many=True)
    
    
    
    return Response(serializer.data)

#create request for slider
class Admin_Post(APIView):
    
    parser_classes =[MultiPartParser, FormParser]

    def post(self, request, format=None):
        print(request.data)
        serializer = MenuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def deleteMenu(request, pk):
    menu=Menu.objects.get(id=pk)
    menu.delete()
    
    return Response("item successfully deleted")

#detail view 

@api_view(['GET'])

def blog(request, pk=None):
    blog=Blogs.objects.get(id=pk)
    serializer=BlogSerializer(blog, many=False)
  
    
    return Response(serializer.data)
#view for create
    


class Blog_Post(APIView):
    
    parser_classes =[MultiPartParser, FormParser]

    def post(self, request, format=None):
        print(request.data)
        serializer = BlogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print("Working")
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            print('error')
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# view for update 
@api_view(['POST'])
def update(request, pk=None):
    blog=Blogs.objects.get(id=pk)
    serializer=BlogSerializer(instance=blog, data=request.data)
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)
    
    
#view for delete 
@api_view(['DELETE'])
def delete(request, pk):
    blog=Blogs.objects.get(id=pk)
    blog.delete()
    
    return Response("item successfully deleted")


##views for top disher crud:
#belo to create top dish from admin panel 
class Dish_Post(APIView):
    
    parser_classes =[MultiPartParser, FormParser]

    def post(self, request, format=None):
        print(request.data)
        serializer = TopDishSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print("Working")
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            print('error')
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
# to get top dish for front end 

@api_view(['GET'])
def topdish(request):
    topdish=TopDishes.objects.all()
    serializer=TopDishSerializer(topdish, many=True)
    
    
    
    return Response(serializer.data)



## for reservation 

class Reservation(APIView):
    
    parser_classes =[MultiPartParser, FormParser]

    def post(self, request, format=None):
        
        serializer = Table(data=request.data)
        if serializer.is_valid():
            serializer.save()
            
            x=serializer.data["email"]
            n=serializer.data["name"]
            y=serializer.data["datef"]
            c=serializer.data["count"]
            d=serializer.data["time"]
            email = EmailMessage(
                
                'DESI GALLI BCN',
                'Dear {} thank you for Booking a Table at Desi galli \n\n\n\n DETAILS \n \nTable for {} on {} at {} \n\n NAME: {} '.format(n,c,y,d,n),
                'desigallibcn@gmail.com',
                [x],
                
                ['priyanshuparashar223@gmail.com'],
                reply_to=['samarth.bhole2001@gmail.com'],
                headers={'Message-ID': 'foo'},
                
                
            )
            # email.attach_file('./images/bg.png')
            email.send()
            # send_mail(
        
                
            #     'Table Booking confirmation ', #subject
            #     'hello {} thank you for Booking a Table at Desi galli '.format(n), #message
            #     'bharatautosolution81@gmail.com', #from email
            #     [x], #To email
            #     
            #     message.attach('design.png', img_data, 'image/png')
                
            # )
            print("Working")
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            print('error')
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        
@api_view(['GET'])
def reservationGet(request):
    reservation=TableR.objects.all().order_by('-id')
    serializer=Table(reservation, many=True)
    
    
    
    return Response(serializer.data)


@api_view(['GET'])
def eventget(request):
    update=Updates.objects.all()
    serializers=Events(update, many=True)
    
    return Response(serializers.data)

@api_view(['POST'])
def eventPost(request):
    serializer = Events(data=request.data)
    if serializer.is_valid():

        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


class ContactPost(APIView):
    
    parser_classes =[MultiPartParser, FormParser]

    def post(self, request, format=None):
        
        serializer = Contactf(data=request.data)
        if serializer.is_valid():
            serializer.save()
            
            x=serializer.data["email"]
            send_mail(
        
                
                'BHARATAUTO SOLUTIONS ORDER confirmed', #subject
                'hello thank you for purchasing order id is '+x, #message
                'bharatautosolution81@gmail.com', #from email
                [x], #To email
                fail_silently=False
                
            )
            print("Working")
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            print('error')
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def contactget(request):
    contactg=Contact.objects.all().order_by('-id')
    serializers=Contactf(contactg, many=True)
    
    return Response(serializers.data)
    
##--------------------------------------------------------------------end--------------------------