from django.contrib import admin
from django.http import HttpResponse
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

from hackplatform.views import *


def defaultresponse(request):
    return HttpResponse("API for CrewUp")


urlpatterns = [
    path('', defaultresponse),
    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='verify'),
    path('api/projectslist/', ProjectsAPIList.as_view()),
    path('api/register/', RegisterAPI.as_view()),
    path('api/createproject/', CreateProjectAPIView.as_view()),
    path('api/createcv/', CreateCVAPIView.as_view()),
    path('api/cv/<int:pk>/', GetCVAPIView.as_view()),
    path('api/cv/', CVListAPI.as_view()),
    path('api/project/<int:pk>/', GetProjectView.as_view()),
    path('api/like/<int:pk>/', LikeProjectAPI.as_view()),
    path('api/sortedprojectlist/', ProjectsByRating.as_view()),
    path('api/myprojects/<int:pk>/', MyProjects.as_view()),
    path('api/mycusprojects/', MyProjectsAsCustomer.as_view()),
    path('api/searchprojects/', SearchProjects.as_view()),
    path('api/searchuser/', SearchUser.as_view()),
    path('api/profile/<int:pk>/', UserProfile.as_view()),
    path('api/userachievements/<int:pk>/', UserAchievements.as_view()),
    path('api/createorder/', CreateOrderAPI.as_view()),
    path('api/closeorder/<int:pk>/', CloseOrder.as_view()),
    path('api/orderslist/', OrderListAPI.as_view()),
    path('api/approveorder/<int:pk>/', ApproveOrderAPI.as_view()),
    path('api/getusercv/<int:pk>/', GetUsersCVAPI.as_view()),
]
