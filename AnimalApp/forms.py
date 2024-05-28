from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.models import User
from django.forms import ModelForm
from django import forms


# class LoginForm(AuthenticationForm):
#     pass  # No need to add any fields or override any methods
class LoginForm(forms.Form):
    email = forms.EmailField(label='Email')
    password = forms.CharField(label='Password', widget=forms.PasswordInput)

from django.contrib.auth.forms import UserCreationForm

class SignupForm(ModelForm):
    class Meta:
        model = User
        fields = ['username','email', 'password']
        