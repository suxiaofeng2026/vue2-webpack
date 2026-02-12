<template>
    <div>
      <gmap-map
        :center="center"
        :zoom="zoom"
        :options="mapOptions"
      />
    </div>
  </template>

<script>
import { gmapApi } from 'vue2-google-maps';

export default {
  data() {
    return {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 12,
      mapOptions: {
        mapTypeId: gmapApi.MapTypeId.ROADMAP,
        streetViewControl: false,
      },
    };
  },
};
</script>
