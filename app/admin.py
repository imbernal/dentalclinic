from django.contrib import admin

from .models import *

class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('name' , 'email' , 'phone' , 'date' , 'hour')

# Register your models here.
admin.site.register(Appointment , AppointmentAdmin)