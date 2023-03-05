from django.shortcuts import render, get_object_or_404
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from .serializers import *
from rest_framework import filters

# Create your views here.


class ProjectsAPIList(generics.ListAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.filter(open=True)


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        # Generating jwt token
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)

        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "access": access_token,
            "refresh": str(refresh),
        })


class CreateProjectAPIView(generics.CreateAPIView):
    serializer_class = CreateProjectSerializer
    queryset = Project.objects.all()

    def create(self, request, *args, **kwargs):
        user = PlatformUser.objects.get(user=request.user)
        user.achievements.add(1)
        response = super().create(request, *args, **kwargs)
        return response


class CreateCVAPIView(generics.CreateAPIView):
    serializer_class = CreateCVSerializer
    queryset = CV.objects.all()


class GetCVAPIView(generics.RetrieveAPIView):
    serializer_class = CVSerializer
    queryset = CV.objects.all()


class CVListAPI(generics.ListAPIView):
    serializer_class = CVSerializer
    queryset = CV.objects.all()


class GetProjectView(generics.RetrieveAPIView):
    serializer_class = CreateProjectSerializer

    def retrieve(self, request, *args, **kwargs):
        proj = Project.objects.get(id=self.kwargs['pk'])
        user = proj.customer
        return Response({
            "project": ProjectSerializer(proj).data,
            "user_x": UserSerializer(user).data
        })


class LikeProjectAPI(generics.UpdateAPIView):

    serializer_class = CreateProjectSerializer

    def update(self, request, *args, **kwargs):
        user = self.request.user.id
        project_x = Project.objects.get(id=kwargs['pk'])

        if project_x.likes.filter(id=user).exists():
            project_x.likes.remove(user)
            tmp = project_x.count_of_likes - 1
            project_x.count_of_likes = tmp

        else:
            project_x.likes.add(user)
            tmp = project_x.count_of_likes + 1
            project_x.count_of_likes = tmp

        project_x.save()
        if project_x.count_of_likes == 1:
            pu = PlatformUser.objects.get(user=project_x.customer)
            pu.achievements.add(2)

        if project_x.count_of_likes == 10:
            pu = PlatformUser.objects.get(user=project_x.customer)
            pu.achievements.add(3)

        return Response({'likes': project_x.count_of_likes}, status.HTTP_200_OK)


class ProjectsByRating(generics.ListAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.filter(open=True).order_by('-likes')


class MyProjects(generics.RetrieveAPIView):
    serializer_class = CreateProjectSerializer

    def retrieve(self, request, *args, **kwargs):
        devprojects = Project.objects.filter(open=True, developers__id=self.request.user.id)
        cusprojects = Project.objects.filter(open=True, customer=self.request.user.id)

        return Response({
            "cusprojects": ProjectSerializer(cusprojects, many=True).data,
            "devprojects": ProjectSerializer(devprojects, many=True).data,
        })


class MyProjectsAsCustomer(generics.ListAPIView):
    serializer_class = CreateProjectSerializer


class SearchProjects(generics.ListAPIView):
    search_fields = ['title', 'description']
    filter_backends = (filters.SearchFilter,)
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class SearchUser(generics.ListAPIView):
    search_fields = ['user__username']
    filter_backends = (filters.SearchFilter,)
    queryset = PlatformUser.objects.all()
    serializer_class = PlatformUserSerializer


class UserProfile(generics.RetrieveAPIView):
    serializer_class = ProjectSerializer

    def retrieve(self, request, *args, **kwargs):
        user = kwargs['pk']
        user_x = get_object_or_404(User, pk=kwargs['pk'])
        cusprojects = Project.objects.filter(open=True, customer=user)
        devprojects = Project.objects.filter(open=True, developers__id=user)

        return Response({
            "user": UserSerializer(user_x, context=self.get_serializer_context()).data,
            "cusprojects": ProjectSerializer(cusprojects, many=True).data,
            "devprojects": ProjectSerializer(devprojects, many=True).data,
        })


class UserAchievements(generics.RetrieveAPIView):
    serializer_class = PlatformUserAchSerializer
    queryset = PlatformUser.objects.all()


class CreateOrderAPI(generics.CreateAPIView):
    serializer_class = CreateOrderSerializer
    queryset = Order.objects.all()


class CloseOrder(generics.UpdateAPIView):
    serializer_class = CreateOrderSerializer
    #queryset = Order.objects.all()

    def update(self, request, *args, **kwargs):
        orde = Order.objects.get(id=kwargs['pk'])
        orde.closed = True
        orde.save()
        return Response({"order": "closed"}, status.HTTP_200_OK)


class OrderListAPI(generics.ListAPIView):
    serializer_class = ListOrderSerializer

    def get_queryset(self):
        return Order.objects.filter(customer=self.request.user.id, closed=False)


class ApproveOrderAPI(generics.UpdateAPIView):
    serializer_class = CreateOrderSerializer

    def update(self, request, *args, **kwargs):
        orde = Order.objects.get(id=kwargs['pk'])
        exec_user = orde.executor
        current_proj = Project.objects.get(id=orde.project.id)
        current_proj.developers.add(exec_user)
        orde.closed = True
        orde.save()

        exec_user_obj = PlatformUser.objects.get(user=exec_user.id)
        exec_user_obj.achievements.add(4)
        return Response({"order": "approved"}, status.HTTP_200_OK)


class GetUsersCVAPI(generics.ListAPIView):
    serializer_class = CreateCVSerializer

    def get_queryset(self):
        return CV.objects.filter(user=self.kwargs['pk'])