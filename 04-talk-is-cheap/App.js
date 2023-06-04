import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo"
                    src="data:image/png;base64,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"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const styleCard = {
    backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
    const { resData } = props
    const {
      cloudinaryImageId, 
      name, 
      avgRating, 
      cuisines, 
      costForTwo, 
      deliveryTime
    } = resData?.data;
    
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
              className="res-logo"
              alt="res-logo"
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                resData.data.cloudinaryImageId
            }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>      
        </div>
    );
};

const resList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "279735",
      "name": "Easy Bites by Hotel Empire",
      "uuid": "b5eda477-5ddc-4826-a9d3-7a3b37c84b51",
      "city": "1",
      "area": "Ashok Nagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "d06b7fa84cb8f8193f60d4c2de172347",
      "cuisines": [
        "Snacks",
        "Fast Food",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 2.0999999046325684,
      "slugs": {
        "restaurant": "easy-bites-central-bangalore-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "No.35,Castel Street,Bangalore-560025,District-B.B.M.P East,STATE-Karnataka",
      "locality": "Castel Street",
      "parentId": 8503,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7027981~p=1~eid=00000188-84f4-ece7-0fc4-0bb5005a0163",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "279735",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 2.0999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "2415",
      "name": "Veena Stores",
      "uuid": "450ddba7-89d1-4317-91a9-d3e559f56587",
      "city": "1",
      "area": "Malleshwaram",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "vt1mquaxmeugaf9dl5pp",
      "cuisines": [
        "South Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 10000,
      "costForTwoString": "₹100 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 6.800000190734863,
      "slugs": {
        "restaurant": "veena-stores-malleshwaram",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#187, 15th Cross, Margosa Road, Malleshwaram",
      "locality": "Margosa Road",
      "parentId": 20940,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 6100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 6100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "6100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "6.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "2415",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 6.800000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.6",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "34301",
      "name": "Sri Udupi Park (100ft Road)",
      "uuid": "82e5a42b-6a2d-45c7-a096-320333bd6c4e",
      "city": "1",
      "area": "Indiranagar",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "jxp8y1chnqljwqylpkov",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Chaat",
        "Beverages",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 10000,
      "costForTwoString": "₹100 FOR TWO",
      "deliveryTime": 37,
      "minDeliveryTime": 37,
      "maxDeliveryTime": 37,
      "slaString": "37 MINS",
      "lastMileTravel": 6,
      "slugs": {
        "restaurant": "sri-udupi-park-indiranagar-indiranagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#273 100 FEET ROAD DIFFENCE COLONY 6TH MAIN INDIRANAGAR BANGALORE-38",
      "locality": "Defence Colony",
      "parentId": 194697,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 6100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 6100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "6100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "34301",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "lastMileTravel": 6,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "30531",
      "name": "Hotel Empire",
      "uuid": "134dd05e-561e-449a-9ba5-b1f6a3c5cb8b",
      "city": "1",
      "area": "Brigade Road",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "qltgnkyywuo5gmnpqzbm",
      "cuisines": [
        "North Indian",
        "Kebabs",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 45000,
      "costForTwoString": "₹450 FOR TWO",
      "deliveryTime": 43,
      "minDeliveryTime": 43,
      "maxDeliveryTime": 43,
      "slaString": "43 MINS",
      "lastMileTravel": 2.0999999046325684,
      "slugs": {
        "restaurant": "empire-restaurant-central-bangalore-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Empire SuitesNo.35, Castle Street, Off Brigade Road,Bengaluru, Karnataka 560025",
      "locality": "Brigade Road",
      "parentId": 475,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7027964~p=10~eid=00000188-84f4-ece7-0fc4-0bb8005a0a24",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "FREE ITEM",
        "subHeader": "",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "30531",
        "deliveryTime": 43,
        "minDeliveryTime": 43,
        "maxDeliveryTime": 43,
        "lastMileTravel": 2.0999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "3883",
      "name": "Vidyarthi Bhavan",
      "uuid": "3f4171f1-63c4-461a-a21d-01e5aaa624c6",
      "city": "1",
      "area": "Basavanagudi",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "tvur6lwwvnd2euflpswm",
      "cuisines": [
        "South Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 4.300000190734863,
      "slugs": {
        "restaurant": "vidhyarthi-bhavan-basavanagudi",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#32, Gandhi Bazar Main Road, Basvangudi, Bangalore-04",
      "locality": "Gandhi Bazaar Main Road",
      "parentId": 20949,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "3883",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 4.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "533238",
      "name": "Vijayalakshmi veg",
      "uuid": "86183bc2-8b0f-4f0d-847a-2cbde51d70e5",
      "city": "1",
      "area": "Frazer Town",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "cusxta01rs3js97qcxnx",
      "cuisines": [
        "South Indian",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 54,
      "minDeliveryTime": 54,
      "maxDeliveryTime": 54,
      "slaString": "54 MINS",
      "lastMileTravel": 4.800000190734863,
      "slugs": {
        "restaurant": "vijayalakshmi-veg-frazer-town-frazer-town",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "122,MM Road, Pulikeshi Nagar, Bengaluru, Karnataka 560005, India",
      "locality": "Pulakeshinagar",
      "parentId": 20046,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.8 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "533238",
        "deliveryTime": 54,
        "minDeliveryTime": 54,
        "maxDeliveryTime": 54,
        "lastMileTravel": 4.800000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "56428",
      "name": "Puliyogare Point",
      "uuid": "49970568-119d-436c-9dad-042d9c07c7ff",
      "city": "1",
      "area": "Basavanagudi",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "wet9zrjusmdtkk16jlrz",
      "cuisines": [
        "South Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 36,
      "minDeliveryTime": 36,
      "maxDeliveryTime": 36,
      "slaString": "36 MINS",
      "lastMileTravel": 4.900000095367432,
      "slugs": {
        "restaurant": "puliyogare-point-basavanagudi-basavanagudi",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "No 81, East Anjaneya Temple Street, N.R Colony, Basavanagudi",
      "locality": "N.R Colony",
      "parentId": 8409,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.9 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "56428",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "lastMileTravel": 4.900000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.5",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "107476",
      "name": "Davanagere Benne Dose",
      "uuid": "0843868d-938f-4a52-9830-d872172f7d22",
      "city": "1",
      "area": "Jayanagar",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "qz6bnyiainw6carl2vei",
      "cuisines": [
        "South Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 40,
      "minDeliveryTime": 40,
      "maxDeliveryTime": 40,
      "slaString": "40 MINS",
      "lastMileTravel": 7,
      "slugs": {
        "restaurant": "davanagere-benne-dosa-jayanagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#20/2, 26th main road, puttenapalya( opp ganesha temple) jayanagar 9th block, bangalore",
      "locality": "9th Block",
      "parentId": 399029,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 6900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 6900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "6900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "7 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "107476",
        "deliveryTime": 40,
        "minDeliveryTime": 40,
        "maxDeliveryTime": 40,
        "lastMileTravel": 7,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "72350",
      "name": "Vishnu Garden",
      "uuid": "bfbd0f0e-05cf-4a9a-87af-c946d1c96d62",
      "city": "1",
      "area": "R.T. Nagar",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "q1yoajwctcy33cjhregi",
      "cuisines": [
        "Chinese",
        "South Indian",
        "North Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 25100,
      "costForTwoString": "₹251 FOR TWO",
      "deliveryTime": 32,
      "minDeliveryTime": 32,
      "maxDeliveryTime": 32,
      "slaString": "32 MINS",
      "lastMileTravel": 6.699999809265137,
      "slugs": {
        "restaurant": "vishnu-garden-rt-nagar-rt-nagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "r.t nagar main road",
      "locality": "Ganganagar",
      "parentId": 21653,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 6100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 6100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "6100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "6.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "72350",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "lastMileTravel": 6.699999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "639122",
      "name": "Namaste",
      "uuid": "13466486-889c-4fe1-b948-70e10b0d6f78",
      "city": "1",
      "area": "Malleshwaram",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "n7a1waemytumnm8t0pkd",
      "cuisines": [
        "South Indian",
        "Thalis",
        "Snacks",
        "Biryani",
        "Indian",
        "Chinese",
        "Desserts",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 10000,
      "costForTwoString": "₹100 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 5.599999904632568,
      "slugs": {
        "restaurant": "namaste-malleshwaram-malleshwaram",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "501, Ground Floor, Lakke Gowda Mansion, Sampige Road, Malleshwaram -560003",
      "locality": "Sampige Road",
      "parentId": 366271,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "639122",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 5.599999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "32510",
      "name": "Toscano",
      "uuid": "d9e93aa0-5124-43d7-b118-e83db78463d3",
      "city": "1",
      "area": "Vittal Mallya Road",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "f6idsoj8oevlwas80b9c",
      "cuisines": [
        "Italian",
        "Pizzas",
        "Pastas",
        "Continental",
        "Desserts",
        "Bakery"
      ],
      "tags": [
        
      ],
      "costForTwo": 120000,
      "costForTwoString": "₹1200 FOR TWO",
      "deliveryTime": 34,
      "minDeliveryTime": 34,
      "maxDeliveryTime": 34,
      "slaString": "34 MINS",
      "lastMileTravel": 0.20000000298023224,
      "slugs": {
        "restaurant": "toscano-lavelle-road-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Level Two, UB City, Vittal Mallya Road, Bangalore",
      "locality": "Vittal Mallya Road",
      "parentId": 22481,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7030598~p=22~eid=00000188-84f4-ece7-0fc4-0bbc005a1642",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.2 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "32510",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 0.20000000298023224,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.3",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "418859",
      "name": "Udupi Shanthi Sagar",
      "uuid": "c581c198-95b7-47ff-8768-dc5573d01d67",
      "city": "1",
      "area": "Frazer Town",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "rlfcmogwwbrgi1xa4owk",
      "cuisines": [
        "South Indian",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 33,
      "minDeliveryTime": 33,
      "maxDeliveryTime": 33,
      "slaString": "33 MINS",
      "lastMileTravel": 4.400000095367432,
      "slugs": {
        "restaurant": "udupi-shanthi-sagar-frazer-town-frazer-town",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "8, Coles Rd, Cleveland Town, Pulikeshi Nagar, Bengaluru, Karnataka 560005, India",
      "locality": "Cleveland Town",
      "parentId": 233016,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.4 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "418859",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "lastMileTravel": 4.400000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "4046",
      "name": "Sri Udupi Park",
      "uuid": "5b811b78-56d2-4d80-9681-7630cb3904c6",
      "city": "1",
      "area": "Residency Road",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "tfbnpd65irvhp9iwhbtk",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese",
        "Chaat",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 37,
      "minDeliveryTime": 37,
      "maxDeliveryTime": 37,
      "slaString": "37 MINS",
      "lastMileTravel": 2.299999952316284,
      "slugs": {
        "restaurant": "veg-feast-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "57, Opposite Galaxy Mall, Residency Road, Bangalore",
      "locality": "Galaxy Mall",
      "parentId": 4284,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.2 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "4046",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "lastMileTravel": 2.299999952316284,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "215852",
      "name": "Third Wave Coffee",
      "uuid": "7d89d01e-399e-415d-8bf7-823a6f54c0e4",
      "city": "1",
      "area": "Indiranagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "0dca660dbdf2e04f9b861c4426ffd41e",
      "cuisines": [
        "Beverages",
        "Bakery",
        "Continental"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 35,
      "minDeliveryTime": 35,
      "maxDeliveryTime": 35,
      "slaString": "35 MINS",
      "lastMileTravel": 5.599999904632568,
      "slugs": {
        "restaurant": "third-wave-coffee-roasters-indiranagar-indiranagar-2",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "no 970, 12th Main Road, HAL 2nd Stage, Doopanahalli, Indiranagar, Bengaluru, Karnataka, India",
      "locality": "HAL 2nd Stage",
      "parentId": 274773,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6948787~p=16~eid=00000188-84f4-ece7-0fc4-0bba005a1043",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "215852",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "lastMileTravel": 5.599999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.4",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "196047",
      "name": "New Taj Darbar",
      "uuid": "94a6fc19-e819-4450-b52f-a96c5a32d565",
      "city": "1",
      "area": "Shivajinagar",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "nfieyqgxk1omknxfbluj",
      "cuisines": [
        "Biryani",
        "Indian",
        "Chinese",
        "Tandoor",
        "Seafood"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 45,
      "minDeliveryTime": 45,
      "maxDeliveryTime": 45,
      "slaString": "45 MINS",
      "lastMileTravel": 2.5999999046325684,
      "slugs": {
        "restaurant": "new-taj-darbar-central-bangalore-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "New Taj Darbar, Shivaji Nagar, Bengaluru, Karnataka, India",
      "locality": "Saint Mary's Church Road",
      "parentId": 148190,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "196047",
        "deliveryTime": 45,
        "minDeliveryTime": 45,
        "maxDeliveryTime": 45,
        "lastMileTravel": 2.5999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.4",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  }
]



const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                  resList.map((restaurant) => (
                    <RestaurantCard resData={restaurant} />
                  ))}      
            </div>
        </div>
    );
};

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(< AppLayout />);








