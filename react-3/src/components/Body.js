import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {

    // #new method 1

    // listOfRestaurantJS is normal js varible and we need to create  a super poewrful react variable --> called state variable
    // For that we use a Hooks 

    // here setListOfRestaurant is the function that keeps updated list....

    const [listOfRestaurants, setListOfRestaurant] = useState(resList); 

    // const [listOfRestaurants, setListOfRestaurant] = useState([{
    //     "card": {
    //         "card": {
    //             "info": {
    //                 "id": "48128",
    //                 "name": "Liberty Cafe",
    //                 "cloudinaryImageId": "x5croizpiilexqf83yj8",
    //                 "locality": "Andheri West",
    //                 "costForTwo": "₹300 for two",
    //                 "cuisines": [
    //                     "North Indian",
    //                     "Chinese",
    //                     "Biryani"
    //                 ],
    //                 "avgRating": 3.8,
    //             }
    //         }
    //     }
    // },
    // {
    //     "card": {
    //         "card": {
    //             "info": {
    //                 "id": "48129",
    //                 "name": "KFC ",
    //                 "cloudinaryImageId": "x5croizpiilexqf83yj8",
    //                 "locality": "Andheri West",
    //                 "costForTwo": "₹300 for two",
    //                 "cuisines": [
    //                     "North Indian",
    //                     "Chinese",
    //                     "Biryani"
    //                 ],
    //                 "avgRating": 4.5,
    //             }
    //         }
    //     }
    // },
    // {
    //     "card": {
    //         "card": {
    //             "info": {
    //                 "id": "48130",
    //                 "name": "MCD ",
    //                 "cloudinaryImageId": "x5croizpiilexqf83yj8",
    //                 "locality": "Andheri West",
    //                 "costForTwo": "₹300 for two",
    //                 "cuisines": [
    //                     "North Indian",
    //                     "Chinese",
    //                     "Biryani"
    //                 ],
    //                 "avgRating": 4.9,
    //             }
    //         }
    //     }
    // }]);

    // #old method 2

    // let listOfRestaurantsJS = [{
    //     "card": {
    //         "card": {
    //             "info": {
    //                 "id": "48128",
    //                 "name": "Liberty Cafe",
    //                 "cloudinaryImageId": "x5croizpiilexqf83yj8",
    //                 "locality": "Andheri West",
    //                 "costForTwo": "₹300 for two",
    //                 "cuisines": [
    //                     "North Indian",
    //                     "Chinese",
    //                     "Biryani"
    //                 ],
    //                 "avgRating": 3.8,
    //             }
    //         }
    //     }
    // },
    // {
    //     "card": {
    //         "card": {
    //             "info": {
    //                 "id": "48129",
    //                 "name": "KFC ",
    //                 "cloudinaryImageId": "x5croizpiilexqf83yj8",
    //                 "locality": "Andheri West",
    //                 "costForTwo": "₹300 for two",
    //                 "cuisines": [
    //                     "North Indian",
    //                     "Chinese",
    //                     "Biryani"
    //                 ],
    //                 "avgRating": 4.5,
    //             }
    //         }
    //     }
    // },
    // {
    //     "card": {
    //         "card": {
    //             "info": {
    //                 "id": "48130",
    //                 "name": "MCD ",
    //                 "cloudinaryImageId": "x5croizpiilexqf83yj8",
    //                 "locality": "Andheri West",
    //                 "costForTwo": "₹300 for two",
    //                 "cuisines": [
    //                     "North Indian",
    //                     "Chinese",
    //                     "Biryani"
    //                 ],
    //                 "avgRating": 4.9,
    //             }
    //         }
    //     }
    // }];

    return (
        <div className="body">
            <div className="filter">

                <button
                    className="filter-btn"
                    onClick={() => {

                        // #new method 1

                        let filteredist = listOfRestaurants.filter(
                            (res) => res.card.card.info.avgRating > 4
                        );
                        setListOfRestaurant(filteredist); //as soon as it is called react re-render the page

                        // #old method 2

                        // listOfRestaurants = listOfRestaurants.filter(
                        //     (res) => res.card.card.info.avgRating > 4
                        // );
                        // console.log(listOfRestaurants);
                    }}
                >
                    Top Rated Foods
                </button>
            </div>

            <div className="res-container">
                {
                    // lis.map(restaurant => <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />)

                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />
                    )
                    )
                }
            </div>
        </div >
    )
}

export default Body;