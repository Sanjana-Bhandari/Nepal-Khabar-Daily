from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet

# 🔹 Router create
router = DefaultRouter()

# 🔹 ViewSet register
router.register(r'posts', PostViewSet, basename='post')

# 🔹 URLs assign
urlpatterns = [
    path('', include(router.urls)),
]
