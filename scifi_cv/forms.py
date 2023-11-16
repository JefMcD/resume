
from django import forms 
import datetime

# Contact Form

class ContactForm(forms.Form):
    empty_value='0O0'
    max_chars = 2500
    
    firstname = forms.CharField(label='Firstname',
                                  initial='',
                                  widget=forms.TextInput(attrs=
                                        {'id': 'form-name-id',
                                         'class': 'charfield formname',
                                         'value': '', # Initial parameter defines this
                                         'autofocus': True, # False | True | (default False)
                                         'disabled': False, # False | True (default False)
                                         'readonly': False, # False | True (default False) 
                                         'required': True, # False | True (default True)
                                         'size': 50, # width of field in columns (default 20)
                                         'maxlength': 100, # max number of characters (default unlimited)
                                         'autocomplete': 'on' # on | off (default off)
                                         }))
    lastname = forms.CharField(label='Surname',
                                  initial='',
                                  widget=forms.TextInput(attrs=
                                        {'id': 'form-lastname-id',
                                          'class': 'charfield formname',
                                         'value': '', # Initial parameter defines this
                                         'autofocus': False, # False | True | (default False)
                                         'disabled': False, # False | True (default False)
                                         'readonly': False, # False | True (default False) 
                                         'required': True, # False | True (default True)
                                         'size': 50, # width of field in columns (default 20)
                                         'maxlength': 100, # max number of characters (default unlimited)
                                         'autocomplete': 'on' # on | off (default off)
                                         }))
    
    company = forms.CharField(label='Company',
                              required=False,
                              initial='',
                              widget=forms.TextInput(attrs=
                                    {'id': 'form-company-id',
                                    'class': 'charfield companyname',
                                    'value': '', # Initial parameter defines this
                                    'autofocus': False, # False | True | (default False)
                                    'disabled': False, # False | True (default False)
                                    'size': 50, # width of field in columns (default 20)
                                    'maxlength': 100, # max number of characters (default unlimited)
                                    'autocomplete': 'on' # on | off (default off)
                                    }))
    
    email = forms.EmailField(label='email',
                             initial='',
                             widget=forms.EmailInput(attrs=
                                {'id': 'email_id',
                                 'class': 'form-emailfield',
                                 'name': 'email_name',
                                 'required': True, # False | True (default True)
                                 'size': 50, # width of field in columns (default 20)
                                 'maxlength': 100, # max number of characters (default unlimited)
                            }))
    
    
    message =forms.CharField(label='Message',
                                   initial='',
                                   widget=forms.Textarea(attrs=
                                        {'id': 'contactform-message-id',
                                         'class': 'form-messagefield',
                                         'autofocus': False, # False | True | (default False)
                                         'disabled': False, # False | True (default False)
                                         'form': 'contact_form', # form textarea belongs to
                                         'maxlength': max_chars,
                                         'readonly': False, # False | True (default False) 
                                         'required': True, # False | True (default True)
                                         'wrap': 'soft', # hard|soft
                                         'name': '',
                                         'rows': '20',
                                         'cols': '50'}))

# end class