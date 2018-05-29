from django.contrib.auth.models import User, Group
from webapp.models import Patient, Record, Country, City, Job
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    #snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=Patient.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username')

class CitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = City
        fields = ('city_id', 'city')


class JobSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Job
        fields = ('job_id', 'job_title')


class PatientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Patient
        fields = ('patient_id', 'first_name', 'last_name', 'gender', 'age', 'nationality', 'contact_info', 'phone_number', 'applicant_unit')


class RecordSerializer(serializers.HyperlinkedModelSerializer):
    
    patient = PatientSerializer()
    birth_place = CitySerializer(read_only=True)
    job = JobSerializer(read_only=True)
    class Meta:
        model = Record
        fields = ('record_id', 'patient', 'entry_date', 'update_date', 'birth_date', 'blood_type', 'diabetes', 'sample_type', 'deceased', 'subtype', 'resistance',
                   'children', 'english', 'sexual_preference', 'immigration_hist', 'insurance', 'drug_use', 'shared_needles', 'criminal_record', 'birth_place', 'job')


"""
class RecordTestSerializer(serializers.BaseSerializer):
    patient = PatientSerializer(many=True)
    def to_representation(self, obj):
        return {
            'record_id': obj.record_id,
            'entry_date': obj.entry_date
        }

"""