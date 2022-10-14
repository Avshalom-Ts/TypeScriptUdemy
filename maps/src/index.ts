//Need To be in the first line for it to work
///<reference types="@types/google.maps"/>

// import { User } from "./User";

// import { Company } from "./Company";
// let map: google.maps.Map;
// const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };


// function initMap(): void {
//   new google.maps.Map(document.getElementById('map') as HTMLElement);
// }
// initMap();
const map = new google.maps.Map(document.getElementById('map')as HTMLElement, {
  center: {
    lat: 30,
    lng: 10
  },
  zoom: 10,
});

// console.log(map);