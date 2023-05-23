import React from "react";
import css from "./index.css";
import item1 from "../img/item1.png";
import { useDispatch, useSelector } from "react-redux";
import { addToOrders, deletFoodFormOrder } from "../../store/reducers/foods";

const PopularItems = ({ data }) => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.foods);

  const isOnOrder = orders.find((item) => item.id === data.id);

  const handleAddToOrder = () => {
    console.log("data", data);
    dispatch(addToOrders(data));
  };
  const handleDeleteFromOrder = () => {
    dispatch(deletFoodFormOrder(data.id));
  };
  return (
    <span className="main_card">
      <img className="cards_foto" src={data.img} />
      <p className="card_name">{data.name}</p>
      <p className="card_description">{data.description}</p>
      <div className="card_buttons">
        {isOnOrder ? (
          <button onClick={handleDeleteFromOrder} className="card_button">
            Delete from order
          </button>
        ) : (
          <button onClick={handleAddToOrder} className="card_button">
            {data.button}
          </button>
        )}

        <p className="card_price">{data.price}</p>
      </div>
    </span>
  );
};

export default PopularItems;
