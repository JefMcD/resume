import os
from django.conf import settings
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from .forms import ContactForm
from django.core.mail import send_mail


from django.template import RequestContext

# Create your views here.
def index(request):
    print('################ index ####################')
    return render(request, 'scifi_cv/index.html')

def contact(request):
    print('################ contact #############')
    form = 'contact-form'
    return render(request, 'scifi_cv/contact.html',{
                    'contact_form': form,
    })


def portfolio(request, sitename='WebDev:Graphic Art'):
    print('################ portfolio ####################')
    print(f'sitename => {sitename}')

    HTML_PATH = 'scifi_cv/folio_blogs'
    open_foliopanel=''
    error_msg = ''
    animation = ''
    contact_form = ContactForm()
    if sitename != 'WebDev:Graphic Art': # site summary request.POST No animations
        # piece together the name of the target file and set open_foliopanel flag
        sitename = sitename+'.html'
        folio_blogfile = os.path.join(HTML_PATH,sitename)
        open_foliopanel='foliopanel-active-flag'
    else: # initial page load request.GET. Play animations
        folio_blogfile='scifi_cv/folio_blogs/artillery-voo.html' # arbitrary default value
        animation='animate' # set animations to play when the page is loaded from a GET request
        
    return render(request, 'scifi_cv/portfolio.html', {
                    'sitename': sitename,               #used in floting titles
                    'folio_blogfile':folio_blogfile,    #used to include blogfile html file
                    'open_foliopanel':open_foliopanel,  #foliopanel-active-flag
                    'animation': animation,             #trigger animations
                    'contact_form': contact_form,       #the form fields
                    'error_message': error_msg,         #for debug
    })
    
    


def submit_form(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        company = request.POST['company']
        message = request.POST['message']

        subject = 'JefMcD Resumee Enquiry'
        email_body = f"Name: {name}\nEmail: {email}\nCompany: {company}\nMessage: {message}"
        from_email = settings.DEFAULT_FROM_EMAIL
        recipient_list = ['artilleryvoo@protonmail.com']  # Replace with your desired recipient email address

        send_mail(subject, email_body, from_email, recipient_list)

        return render(request, 'success.html')  # Display a success page after submitting the form

    return render(request, 'form.html') 
    
############




def enquiry_thanks(request):
    
    form = ContactForm(request.POST)

    subject = 'Enquiry Posted from your Resumee'
    sender = 'jefmcd'
    firstname =     request.POST['firstname']
    lastname =      request.POST['lastname']
    company =       request.POST['company']
    enquiry_email = request.POST['email']
    message =       request.POST['message']

    email_body = '\nFirstname : '+ firstname + '\nLastname : '+ lastname+'\nCompany : '+ company + '\nemail : ' + enquiry_email + '\nMessage : ' + message + '\n'
    
    recipients = ['artilleryvoo@protonmail.com']
    # recipients.append(sender)
    send_mail(subject, email_body, sender, recipients)


    return render(request, 'scifi_cv/enquiry_thanks.html',{
                    'recipients': recipients,
                    'email_body': email_body,
                    
    })



def education(request):
    contact_form = ContactForm()
    animation='animate' # set animations to play when the page is loaded from a GET request

    return render(request, 'scifi_cv/education.html',{
                    'contact_form': contact_form,
                    'animation': animation,
    })
    
def employment(request):
    contact_form = ContactForm()
    animation='animate' # set animations to play when the page is loaded from a GET request
    return render(request, 'scifi_cv/employment.html',{
                    'contact_form': contact_form,
                    'animation': animation,
    })

def personal(request):
    contact_form = ContactForm(),
    return render(request, 'scifi_cv/personal.html',{
                    'contact_form': contact_form
    })
    
def download(request):
    contact_form = ContactForm(),
    return render(request, 'scifi_cv/portfolio.html',{
                    'contact_form': contact_form
    })
    

def cube(request):
    contact_form = ContactForm(),
    return render(request, 'scifi_cv/cube.html',{
                    'contact_form': contact_form
    })
    
def card(request):
    contact_form = ContactForm(),
    return render(request, 'scifi_cv/card.html',{
                    'contact_form': contact_form
    })  
    
def sandbox(request):
    contact_form = ContactForm(),
    return render(request, 'scifi_cv/sandbox.html',{
                    'contact_form': contact_form
    })
    
    