import React from "react";
import './DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box fade">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce website is an Online platform that facilitates buying and selling of products or services over the internet, that serves as a virtual marketplace where businesses and individual showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-Commerce websites have gained immense popularity due to their convenience and accesibility, and the global reach they offer.</p>
                <p>E-Commerce websites typically display products or services a detailed descriptions, images, and any available varities (e.g., sizes, colors). Each product has its own details with relevant information.</p>
            </div>
        </div>
    )
}

export default DescriptionBox;