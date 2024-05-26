import React from "react";
import ReactDOM from "react-dom/client";

/** 
* Header
* -Logo
* -Nav Items
* Body
*  -Search
*  -Restaurant Container
*   -ResaurantCard
*       - Img
*       - Name of the Res, Star Rating, Cuisine, delivery time, etc
* Footer
* -Copyright
* -Links
* -Address
* -Contact
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://img.freepik.com/premium-vector/burger-logo-design-vector-fast-food-restaurant-cafe-symbol_18099-2283.jpg"
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
    )
}

// Inline CSS -> not the preferred way  
// this is object 
const styleCard = {
    background: "#f0f0f0"
};

const RestaurantCard = (props) => {
    // console.log(resData);
    const { resData } = props;
    //const { resName, cuisine } = props; //destructuring of object
    console.log(props);

    const {
        name,
        cuisines,
        avgRatingString,
    } = resData.card.card.info;

    return (
        <div className="res-card" style={styleCard}>
            <img
                className="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + resData.card.card.info.cloudinaryImageId}
                alt="res-logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRatingString} stars</h4>

            <h4>{resData.card.card.info.sla.slaString} </h4>
        </div>
    )
}

// OR

// const RestaurantCard = ({ resName, cuisine }) => {

//     // const { resName, cuisine } = props;

//     return (
//         <div className="res-card" style={styleCard}>
//             <img
//                 className="res-logo"
//                 src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/s3gnzsp8idz2stbjerr1"
//                 alt="res-logo"
//             />
//             <h3>{resName}</h3>
//             <h4>{cuisine}</h4>
//             {/* <h4>4.1 stars</h4>
//             <h4>40 mins</h4> */}
//         </div>
//     )
// }

const resList = [
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "48128",
                    "name": "Liberty Cafe",
                    "cloudinaryImageId": "x5croizpiilexqf83yj8",
                    "locality": "Andheri West",
                    "areaName": "Powai",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Biryani"
                    ],
                    "avgRating": 3.8,
                    "parentId": "125043",
                    "avgRatingString": "3.8",
                    "totalRatingsString": "1K+",
                    "promoted": true,
                    "adTrackingId": "cid=13651136~p=0~adgrpid=13651136#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=48128~eid=4b7f3e5c-f10b-4cce-a3d0-e6144df81b87~srvts=1716382482843~collid=83637",
                    "sla": {
                        "deliveryTime": 55,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "55-60 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-05-22 23:59:00",
                        "opened": true
                    },
                    "badges": {

                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {

                    },
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {

                            },
                            "imageBased": {

                            },
                            "textExtendedBadges": {

                            }
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=48128&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "78036",
                    "name": "Burger King",
                    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                    "locality": "Central Plaza, Kalina",
                    "areaName": "Santacruz East",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                        "Burgers",
                        "American"
                    ],
                    "avgRating": 4.3,
                    "parentId": "166",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "10K+",
                    "sla": {
                        "deliveryTime": 37,
                        "lastMileTravel": 2.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "2.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-05-23 05:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Rxawards/_CATEGORY-Burger.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {
                        "header": "50% OFF",
                        "shortDescriptionList": [
                            {
                                "meta": "Use SWIGGY50",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "50% off up to ₹100 | Use code SWIGGY50",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ]
                    },
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "Delivery!",
                                            "imageId": "Rxawards/_CATEGORY-Burger.png"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {

                            },
                            "textBased": {

                            }
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=78036&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "243517",
                    "name": "KFC",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_243517.JPG",
                    "locality": "Kurla East",
                    "areaName": "Saki Naka",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                    ],
                    "avgRating": 4.1,
                    "parentId": "547",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 49,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-05-22 23:00:00",
                        "opened": true
                    },
                    "badges": {

                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {
                        "shortDescriptionList": [
                            {
                                "meta": "Free Pepsi Black PET 500ml",
                                "discountType": "Freebie",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "Free Pepsi Black PET 500ml on orders above ₹599",
                                "discountType": "Freebie",
                                "operationType": "RESTAURANT"
                            }
                        ]
                    },
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {

                            },
                            "textExtendedBadges": {

                            },
                            "textBased": {

                            }
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=243517&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "754074",
                    "name": "Aunty Burger",
                    "cloudinaryImageId": "d645651ea7006ec492a306529dbcdf3a",
                    "locality": "Jb Nagar",
                    "areaName": "Andheri East",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "Burgers",
                        "Snacks"
                    ],
                    "avgRating": 4.3,
                    "parentId": "445804",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "10+",
                    "promoted": true,
                    "adTrackingId": "cid=13342844~p=1~adgrpid=13342844#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=754074~eid=90702f33-4ca8-4795-a8f7-907cbd4e925a~srvts=1716382482843~collid=83637",
                    "sla": {
                        "deliveryTime": 48,
                        "lastMileTravel": 6.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "6.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-05-22 22:30:00",
                        "opened": true
                    },
                    "badges": {

                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {
                        "header": "20% OFF",
                        "shortDescriptionList": [
                            {
                                "meta": "Use PARTY",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "20% off | Use code PARTY",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ]
                    },
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {

                            },
                            "textExtendedBadges": {

                            },
                            "textBased": {

                            }
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=754074&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "32399",
                    "name": "McDonald's",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/4a8bc67d-8fe4-44db-be5d-1477086cc52b_32399.JPG",
                    "locality": "Kalina Artista",
                    "areaName": "Santacruz East",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                    ],
                    "avgRating": 4.4,
                    "parentId": "630",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "10K+",
                    "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 2.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-05-23 02:45:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Rxawards/_CATEGORY-Burger.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {

                    },
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                                            "description": "Delivery!"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {

                            },
                            "textBased": {

                            }
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=32399&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "391816",
                    "name": "Louis Burger",
                    "cloudinaryImageId": "19d3d352cc815b9d88b22617b41fa97b",
                    "locality": "Trade Centre",
                    "areaName": "Santacruz Bandra east",
                    "costForTwo": "₹600 for two",
                    "cuisines": [
                        "Burgers",
                        "American",
                        "Fast Food"
                    ],
                    "avgRating": 4.4,
                    "parentId": "22485",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "1K+",
                    "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-05-23 04:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            }
                        ]
                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {
                        "header": "10% OFF",
                        "shortDescriptionList": [
                            {
                                "meta": "Use PARTY",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "10% off | Use code PARTY",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ]
                    },
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {

                            },
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "Gourmet",
                                            "imageId": "newg.png"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {

                            }
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=391816&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "815628",
                    "name": "Nashville Fried Chicken - NFC",
                    "cloudinaryImageId": "7e611484b6f7df186376a3238a085c87",
                    "locality": "BANDRA EAST",
                    "areaName": "BKC",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                        "American"
                    ],
                    "avgRating": 4.5,
                    "parentId": "464434",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "50+",
                    "promoted": true,
                    "adTrackingId": "cid=13473263~p=2~adgrpid=13473263#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=815628~eid=2bb21a2a-9ba1-4ede-918a-156099513012~srvts=1716382482843~collid=83637",
                    "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 1.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "1.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-05-23 04:00:00",
                        "opened": true
                    },
                    "badges": {

                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {
                        "header": "30% OFF",
                        "shortDescriptionList": [
                            {
                                "meta": "Use SWIGGYIT",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ],
                        "descriptionList": [
                            {
                                "meta": "30% off up to ₹75 | Use code SWIGGYIT",
                                "discountType": "Percentage",
                                "operationType": "RESTAURANT"
                            }
                        ]
                    },
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {

                            },
                            "imageBased": {

                            },
                            "textExtendedBadges": {

                            }
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {

                        },
                        "subTitle": {

                        },
                        "message": {

                        },
                        "customIcon": {

                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {

                            },
                            "video": {

                            }
                        }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "isNewlyOnboarded": true,
                    "restaurantOfferPresentationInfo": {

                    },
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {

                },
                "cta": {
                    "link": "swiggy://menu?restaurant_id=815628&source=collection&query=Burger",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    }
];

// not using keys (not acceptable) <<<< index as key <<<<<<<<<<<<<<<<<<<<<<<<<<<< unique id (best practise)

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map(restaurant => <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant } />)
                    // key is reserved word and uniquely identify each list ...now our console warning is resolved!
                }
            </div>
        </div >
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />); // We render React Components like this
