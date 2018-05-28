from django.conf.urls import url
from webapp.views import PatientViewSet, RecordViewSet, CityViewSet, JobViewSet, UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.include_format_suffixes = False
router.register(r'patients', PatientViewSet, base_name='patient')
router.register(r'records', RecordViewSet, base_name='record')
router.register(r'cities', CityViewSet, base_name='city')
router.register(r'jobs', JobViewSet, base_name='job')
router.register(r'users', UserViewSet, base_name='job')

urlpatterns = router.urls

