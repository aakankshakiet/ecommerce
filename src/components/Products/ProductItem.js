import React,{useContext} from 'react';
import CartContext from '../../store/CartContext';
import { Link } from 'react-router-dom';
import {Button,Image,Col} from 'react-bootstrap';
import './ProductItem.scss';

const ProductItem = (props) => {
	const cartCtx = useContext(CartContext);
  
	const addToCartHandler = () => {
	  cartCtx.addItem({
		id: props.id,
		title: props.title,
		amount: 1,
		price: props.price,
		main_image:props.main_image
	  });
	};
	return (
		<> 
		<Col lg={3} md={6} className="d-flex justify-content-center">
			<div className="product d-flex flex-column align-items-center">
				<Image  src={props.main_image} alt="product img" fluid/>
				<div className=" text py-3 pb-4 px-3 ">
					<h3><Link to={`/Products/${props.id}`} >{props.title}</Link></h3>
					<div className="pricing text-center">
					   <p className="price"><span>&#8377;{props.price}</span></p>
					</div>
					<p className="bottome-area text-center">   
						<Button onClick={addToCartHandler} >Add to Cart</Button>
					</p>	
				</div>
			</div>
		</Col>
		</>
	)
};
export default ProductItem;