<template>
    <div>2
      <gmap-map
        :center="center"
        :zoom="zoom"
        :options="mapOptions"
      >
        <gmap-marker
          :position="markerPosition"
          :clickable="true"
          :draggable="true"
          @click="handleMarkerClick"
        />
      </gmap-map>
    </div>
  </template>

<script>
import { Geocoder } from 'vue2-google-maps';

export default {
  data() {
    return {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 12,
      mapOptions: {
        mapTypeId: 'roadmap',
        streetViewControl: false,
      },
      markerPosition: null,
    };
  },
  methods: {
    handleMarkerClick() {
      const geocoder = new Geocoder();
      geocoder.geocode({ address: 'San Francisco' }, (results, status) => {
        if (status === 'OK') {
          const { lat, lng } = results[0].geometry.location;
          this.markerPosition = { lat: lat(), lng: lng() };
        } else {
          console.log('Geocode was not successful for the following reason: ' + status);
        }
      });
    },
  },
};
</script>
