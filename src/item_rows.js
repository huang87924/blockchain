import React, { Component } from 'react';




const ItemRows = (props) => {
	

	
	const items= props.item_list.map(
			(item,index) => {return <div className="flex-item" key={index}><div className="dropdown1"><img src={require('./diagram/w2.jpg')} alt="" width="160" height="120" /><div className="dropdown-content1">
									<div className="c">
									<dl>
									<dt>Game Name       </dt>
									<dd>{item.gameName} </dd>
									<dt>Amount          </dt>
									<dd>{item.amount}   </dd>
									<dt>Price           </dt>
									<dd>{item.price}    </dd>
									<dt>Item ID         </dt>
									<dd>{item.itemIndex}</dd>
									<br />
									<dt><button className="button8" >Exchange</button>
										<button className="button9" onClick={props.onClick}>Add</button></dt>
									</dl>
									</div>  </div></div></div>     }					
	);
	
	
	
	
	

		
	return(
		<div>
			{items}	
		</div>
		
	);
		
		
}

export default ItemRows;