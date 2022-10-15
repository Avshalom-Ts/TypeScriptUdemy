//Need To be in the first line for it to work
///<reference types="@types/google.maps"/>


import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();

const custopMap = new CustomMap('map');

//The GOOD way
custopMap.addMarker(user);
custopMap.addMarker(company);

//The beter way
// custopMap.addMarker(user);
// custopMap.addMarker(company);


//The bad way
// custopMap.addUserMarker(user);
// custopMap.addCompanyMarker(company);