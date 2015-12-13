from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from .models import *

def home_page(request):
	return render(request , 'home_page/index.html')

@csrf_exempt
def appointment(request):

	name = request.POST['name']
	phone = request.POST['phone']
	email = request.POST['email']
	date = request.POST['date']
	hour = request.POST['hour']

	appointmentNew = Appointment()
	appointmentNew.name = name
	appointmentNew.email = email
	appointmentNew.phone = phone
	appointmentNew.date = date
	appointmentNew.hour = hour

	appointmentNew.save()

	message = "You have a new appointment. \n\r" + "Details : \n\r" + "Name: " + name + "\n\r Phone: "+ phone + "\n\r Email: " + email \
			  + "\n\r Date: " + date + "\n\r Hour: " + hour

	send_mail('New appointment' , message , 'mainoffice@dentalprogroup.com' ,[ 'mainoffice@dentalprogroup.com', 'imbernal9203@gmail.com'])

	return render(request , 'home_page/a.html' )

@csrf_exempt
def contact(request):

	name = request.POST['name']
	phone = request.POST['phone']
	email = request.POST['email']
	comment = request.POST['comment']

	message = "Contact details: \n\r" + "Name: " + name + "\n\r Phone:" +phone + "\n\r Email: "\
	+ email + "\n\r Comment: " + comment
	send_mail('New Contact' , message , 'mainoffice@dentalprogroup.com' ,[ 'mainoffice@dentalprogroup.com', 'imbernal9203@gmail.com'])

	return render(request , 'home_page/a.html' )

# Create your views here.
