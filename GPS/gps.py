# NEO-6M GPS Module via raspberry pi + Reverse-Geocoding api using Google API
# Hyunmin Lee
# 21.11.15 v0.0.1



# https://github.com/googlemaps/google-maps-services-python
# https://developers.google.com/maps/documentation/geocoding/overview

import googlemaps
import keys
import json
from datetime import datetime

gmaps = googlemaps.Client(key=keys.API_key)
reverse_geocode_result = gmaps.reverse_geocode((37.4901729, 127.078680))
print(reverse_geocode_result[0]['formatted_address'])