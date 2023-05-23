import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {addOrSubtract, decrementCount, incrementCount, toggleSidebar} from "../../store/reducers/foods";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import LunchDiningIcon from '@mui/icons-material/LunchDining'; 

const SidebarOrders = () => {
	const dispatch = useDispatch()

	const {showSidebar, orders} = useSelector((state) => state.foods)
	const handleClose = () => {
		dispatch(toggleSidebar())
	}

	const total = orders.reduce((acc, item) => {
		return acc + item.count * Number(item.price);
	}, 0);


	return <>
		{
			showSidebar && <SidebarWrapper className={"sidebar_wrapper"}>
				<Button onClick={handleClose}><ClearIcon/></Button>

				<OrdersWrpper>
					{
						orders.map((item) => {
							return <li class key={item.id}>
								<Button onClick={() => dispatch(incrementCount(item.id))}><AddIcon/></Button>
								{/* <strong><LunchDiningIcon /></strong> */}
								<strong>{item.name}</strong>
								<strong>-</strong>
								<strong>${item.price} - {item.count} = ${item.price * item.count}</strong>
								<Button onClick={() => dispatch(decrementCount(item.id))}><DeleteIcon/></Button>
							</li>
						})
					}
					<strong>TOTAL SUM:{total} </strong>
				</OrdersWrpper>

			</SidebarWrapper>
		}
	</>
}

export default SidebarOrders


const SidebarWrapper = styled.aside`
  width: 350px;
  height: 100vh;
  background-color:black;
  opacity: 0.6;
  position: fixed;
  right: 0;
  z-index: 100;
  color:blue;
  fontsize:30px;

`

const OrdersWrpper = styled.ul`
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
	
  }
`
