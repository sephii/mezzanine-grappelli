from __future__ import unicode_literals

from django.conf.urls import patterns, include
from filebrowser.sites import site


urlpatterns = patterns(
    "",

    ("^grappelli/", include("grappelli.urls")),
    ("^media-library/", include(site.urls))
)
