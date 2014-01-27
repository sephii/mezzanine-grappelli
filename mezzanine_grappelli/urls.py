from __future__ import unicode_literals

from django.conf.urls import patterns, include


urlpatterns = patterns(
    "",

    ("^grappelli/", include("grappelli.urls"))
)
