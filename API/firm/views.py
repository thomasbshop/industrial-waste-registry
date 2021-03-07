from rest_framework import generics

from .models import Company, Activities,Waste
from .serialisers import CompanySerializer, ActivitiesSerializer, WasteSerializer, ProfileSerializer

# Create your views here.
class CompanyList(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CompanyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class ActivitiesList(generics.ListCreateAPIView):
    queryset = Activities.objects.all()
    serializer_class = ActivitiesSerializer


class ActivitiesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Activities.objects.all()
    serializer_class = ActivitiesSerializer


class WasteList(generics.ListCreateAPIView):
    queryset = Waste.objects.all()
    serializer_class = WasteSerializer


class WasteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Waste.objects.all()
    serializer_class = WasteSerializer


class ProfileList(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = ProfileSerializer


class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = ProfileSerializer