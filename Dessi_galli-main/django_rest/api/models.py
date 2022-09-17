from django.db import models

# Create your models here.
class Blogs(models.Model):
    title=models.CharField(max_length=200)
    desc=models.TextField(null=True, blank=True)
    img=models.ImageField(
        verbose_name='Blogimg',
        help_text="upload blog img image",
        upload_to="images/",
        null=False,
        blank=False,
        
    )
    datandtime=models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return str(self.title)
    
class Category(models.Model):
    title=models.CharField(max_length=200)
    def __str__(self):
        return str(self.title)
    
class Menu(models.Model):
    dishname=models.CharField(blank=False, null=False, max_length=200)
    price=models.DecimalField(blank=False, decimal_places=1, max_digits=5 )
    category=models.ForeignKey(Category, blank=True,null=True, on_delete=models.CASCADE)
    dishImage=models.ImageField(
        verbose_name='image',
        help_text="upload a product image",
        upload_to="images/",
        null=True,
        blank=True,
        
    )
    
    def __str__(self):
        return str(self.dishname)
    
class Contact(models.Model):
    name=models.CharField(max_length=200 ,null=False)
    phone=models.IntegerField( null=False)
    email=models.EmailField(null=False)
    desc=models.TextField(null=True, blank=True)
    datandtime=models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return str(self.name) 
    
class TableR(models.Model):
 
   
    name=models.CharField(max_length=200, null=False)
    count=models.IntegerField(null= True )
    phone=models.IntegerField(null=False)
    email=models.EmailField(null=False)
    datef=models.DateField(auto_now=False, null=True)
    time=models.TimeField(auto_now=False, null=True)
    def __str__(self):
        return str(self.name)
    
class Updates(models.Model):
    update=models.TextField(null=False)
    def __str__(self):
        return str(self.update)
class Slider(models.Model):
    heading=models.CharField(max_length=200, blank=False, default="Indian street food") 
    bodyText=models.TextField(null=False, blank=False, default="Amul the taste of india")
    img=models.ImageField(
        verbose_name='bannerimage',
        help_text="upload banner image",
        upload_to="images/",
        null=False,
        blank=False,
        
    )
    def __str__(self):
        return str(self.heading)
    
class TopDishes(models.Model):
    img=models.ImageField(
        verbose_name='topdishimg',
        help_text="upload top dish image",
        upload_to="images/",
        null=False,
        blank=False,
        
    )
    dishname=models.CharField(max_length=200, null=False,blank=False)
    
    def __str__(self):
        return str(self.dishname)
    
