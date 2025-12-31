from rest_framework.routers import DefaultRouter
from users.api.urls import user_router
from django.urls import path, include

router =DefaultRouter
# users
router.registry.extendpwd(user_router.registry)

urlpatterns = [
    path('', include(router.urls))
]
