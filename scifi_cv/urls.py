from django.urls import path
from . import views

app_name = 'scifi_cv'
urlpatterns = [
    path('', views.portfolio, name='index'),
    path('portfolio', views.portfolio, name='portfolio'),

    path('folio_blogs/<str:sitename>', views.portfolio, name='folio_blogs'),
    path('education', views.education, name='education'),
    path('employment', views.employment,name='employment'),
    path('personal', views.personal, name='personal'),
    path('download', views.download, name='download'),
    path('contact', views.contact, name='contact'),
    path('enquiry_thanks', views.enquiry_thanks, name='enquiry_thanks'),
    path('cube', views.cube, name='cube'),
    path('card', views.cube, name='card'),
    path('sandbox', views.sandbox, name='sandbox'),
]