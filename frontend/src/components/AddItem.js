/** @format */

import { useState } from "react";
import axios from 'axios'

const AddItem = (props) => {
	const [productName, setProductName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);
	const [imageUrl, setImageUrl] = useState("");
    const handleClick=(e)=>{
		e.preventDefault();
		const productInfo={
			name:productName,
			desc:description,
			cost:price,
			quant:quantity,
		}
		axios.post('http://localhost:5000/api/product/additem',
		            productInfo	)
	}

	return (
		<div className="container">
			<h1>Add Items</h1>
			<form action="">
				<div className="form-group">
				<input name="productname"
				onChange={(e)=>setProductName(e.target.value)}
				 autoComplete="off"
				  className="form-control" 
				  placeholder="Product Title"></input>
				</div>
				<div className="form-group">
				<textarea name="description"
				onChange={(e)=>setDescription(e.target.value)}
				 autoComplete="off" 
				 className="form-control"
				  placeholder="Description"></textarea>
				</div>
				<div className="form-group">
				<input name="price"
				type="number"
				onChange={(e)=>setPrice(e.target.value)}
				  className="form-control" 
				  placeholder="Product Price"></input>
				</div>
				<div className="form-group">
				<input name="Quantity"
				type="number"
				onChange={(e)=>setQuantity(e.target.value)}
				  className="form-control" 
				  placeholder="Quantity"></input>
				</div>
				<button onClick={handleClick} className="btn btn-lg btn-info">Submit</button>
			</form>
		</div>
	);
};

export default AddItem;
