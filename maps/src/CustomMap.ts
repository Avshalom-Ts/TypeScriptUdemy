// import { User } from './User';
// import { Company } from './Company';

//Instruction how to be an argumant to addMarker function 
//insted of to call all the classes in the function
interface Mappable{
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap{
  private googleMap: google.maps.Map;

  constructor(divId:string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      center: {
        lat: 0,
        lng: 0
      },
      zoom: 1,
    });
  };

  //The good way With interface property
  //As long the class that have the argumants in is definition
  //he can enter as argumant to the function
  addMarker(mappable:Mappable):void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
    //Add event listener to click,
    //so every time that marker will be active he will open poup window
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    })
  };

  //The Beter way
  //The pipe is refering to indentical property of User and Company Classes ONLY
  //Location Is exist on both User and Company classes so mappable can refer to them
  ///
  // addMarker(mappable:User|Company):void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mappable.location.lat,
  //       lng:mappable.location.lng
  //     }
  //   })
  // }


  //The bad way
  ///
  // addUserMarker(user:User):void{
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng
  //     }
  //   })
  // }

  // addCompanyMarker(company:Company):void{
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng:company.location.lat
  //     }
  //   })
  // }

  


}