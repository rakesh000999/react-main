import { CDN_URL } from "../utils/constants"; // named import is used here ... see (README.md)

const RestaurantCard = (props) => {

    const { resData } = props;

    const {
        name,
        cuisines,
        avgRating,
    } = resData.card.card.info;

    const styleCard = {
        background: "#f0f0f0"
    };

    return (
        <div className="res-card" style={styleCard}>
            <img
                className="res-logo"
                src={ CDN_URL + resData.card.card.info.cloudinaryImageId}
                alt="res-logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>

            {/* <h4>{resData.card.card.info.sla.slaString} </h4> */}
        </div>
    )
}
export default RestaurantCard;