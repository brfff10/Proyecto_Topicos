# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework.decorators import action, api_view
from rest_framework import status, viewsets
from rest_framework.decorators import detail_route, action
from rest_framework.response import Response
from webapp.models import Patient, Record, City, Job 
from webapp.serializers import PatientSerializer, RecordSerializer, CitySerializer, JobSerializer

class CityViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing Patients.
    """
    queryset = City.objects.all()
    serializer_class = CitySerializer


class JobViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing Patients.
    """
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class PatientViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing Patients.
    """

    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

    """
    @action(methods=['post', 'get'], detail=True)
    def details(self, request, pk=None):
        patient = self.get_object()
        queryset = Record.objects.get(pk=pk)
        serializer = RecordSerializer(data=request.data)
        if serializer.is_valid():
            return Response(serializer.data, {'status': 'se armo'})
        else:
            return Response({'status': 'no se armo'})

    @action(methods=['post', 'get'], detail=True)
    def details_test(self, request, patient_id=None):
        instance = Record.objects.get(patient_id=Record.patient_id)
        serializer = RecordTestSerializer(instance)
        return Response(serializer.data)
    #@action(methods=['post'], detail=True, #permission_classes=[IsAdminOrIsSelf],
    #    url_path='records', url_name='records')
    #def show_details(self, request, pk=None):
    """
class PatientRecordViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing Patients.
    """

    serializer_class = RecordSerializer

    def get_queryset(self):
        return Record.objects.filter(patient=self.kwargs['patient_pk'])
    #queryset = Record.objects.all()

class RecordViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing Records.
    """
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
  
