from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
# from .models import *

def home_page(request):
	return render(request , 'home_page/index.html')

@csrf_exempt
def appointment(request):

	name = request.POST['name']
	phone = request.POST['phone']
	email = request.POST['email']
	date = request.POST['date']
	hour = request.POST['hour']

	# appointmentNew = Appointment()
	# appointmentNew.name = name
	# appointmentNew.email = email
	# appointmentNew.phone = phone
	# appointmentNew.date = date
	# appointmentNew.hour = hour

	# appointmentNew.save()

	message = "You have a new appointment. \n\r" + "Details : \n\r" + "Name: " + name + "\n\r Phone: "+ phone + "\n\r Email: " + email \
			  + "\n\r Date: " + date + "\n\r Hour: " + hour

	# send_mail('New appointment' , message , 'mainoffice@dentalprogroup.com' ,[ 'mainoffice@dentalprogroup.com', 'imbernal9203@gmail.com'])

	return render(request , 'home_page/index.html')

@csrf_exempt
def contact(request):

	apname = request.POST['apname']
	aptel = request.POST['aptel']
	apemail = request.POST['apemail']
	apcomment = request.POST['apcomment']

	message = "Contact details: \n\r" + "Name: " + apname + "\n\r Phone:" +aptel + "\n\r Email: "\
	+ apemail + "\n\r Comment: " + apcomment


	# send_mail('New Contact' , message , 'mainoffice@dentalprogroup.com' ,[ 'mainoffice@dentalprogroup.com', 'imbernal9203@gmail.com'])
	return render(request , 'home_page/index.html')

# Create your views here.
