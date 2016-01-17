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

	message = "You have new appointment. " + "Details : " + "Name: " + name + ", Phone: "+ phone + ", Email: " + email \
			  + ", Date: " + date + ", Hour: " + hour

	send_mail('New appointment' , message , 'mainoffice@detanlprogroup.com' ,[ 'mainoffice@detanlprogroup.com'])


@csrf_exempt
def contact(request):

	name = request.POST['apname']
	phone = request.POST['aptel']
	email = request.POST['apemail']
	comment = request.POST['apcomment']

	message = "Someone want to contact with you. " + "Datos: " + "Name: " + name + ", Phone:" +phone + ", Email: "\
	+ email + ", Comment: " + comment
	send_mail('New Contact' , message , 'mainoffice@detanlprogroup.com' ,[ 'mainoffice@detanlprogroup.com'])

# Create your views here.
