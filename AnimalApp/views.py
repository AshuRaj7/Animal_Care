
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login,logout
from django.contrib.auth.forms import AuthenticationForm
from .forms import SignupForm,LoginForm
from django.contrib.auth import get_user_model
from .models import Shelter
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator
from django.contrib import messages

def fetch_user_by_username(username):
    User = get_user_model()
    try:
        user = User.objects.get(email=username)
        return user
    except User.DoesNotExist:
        return None


def home(request):
    return render(request,'home.html')

def about(request):
    return render (request,'about.html')

def donate(request):
    return render (request,'donate.html')

def login_view(request):
    if request.user.is_authenticated:
        return redirect('find')
    if request.method == 'POST':
        print(1)
        # form = LoginForm(request.POST)
        # if form.is_valid():
        #     print(2)
        username = request.POST.get('username')
        pwd = request.POST.get('password')
        # user = authenticate(request, username=username, password=password)
        user = fetch_user_by_username(username)
        if user:
            if user.password==pwd:
                login(request, user)
                return redirect('find')
            else:
                messages.add_message(request, messages.ERROR,"Invalid Credentials" )
                return redirect('login')
        else:
            messages.add_message(request, messages.ERROR, "User Not Exist")
            return redirect('login')
            # if user is not None:
            #     login(request, user)
            #     return render(request,'find.html')  # Redirect to the appropriate page after login
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('login')

from django.shortcuts import render, redirect
from .forms import SignupForm

def signup_view(request):
    if request.method == 'POST':
       
        form = SignupForm(request.POST)
        if form.is_valid():
           
            user = form.save()
             
            return redirect('login')  
    else:
        form = SignupForm()
    return render(request, 'login.html', {'form': form})


@login_required(login_url='/login')
def find(request):
    city = request.GET.get('city', '')
    page_num = request.GET.get('page', 1)
    
    if request.method == 'POST':
        city = request.POST.get('area')
    
    if city:
        data = Shelter.objects.filter(city=city)
    else:
        data = Shelter.objects.all()
    
    pagination = Paginator(data, 2)
    finaldata = pagination.get_page(page_num)
    
    return render(request, 'alog.html', {'data': finaldata, 'city': city})