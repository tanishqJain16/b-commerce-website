import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./ProductPage.css";
import { details } from "./ProductData";
import { useEffect, useState } from "react";
import starRed from "../../assets/Star-red.svg";
import starGray from "../../assets/Star-gray.svg";
import { toast } from "react-hot-toast";

function ProductPage() {
    const [activeItem, setActiveItem] = useState(details.filter((item) => item.id === 1));
    const [activeColor, setActiveColor] = useState(activeItem[0].colors[0]);
    const [rating, setRating] = useState(0);
    const [activeQuantityCount, setActiveQuantityCount] = useState(activeItem[0].count);

    const incrementCount = () => {
        setActiveQuantityCount(activeQuantityCount + 1);
    };

    const decrementCount = () => {
        if (activeQuantityCount > 0) {
            setActiveQuantityCount(activeQuantityCount - 1);
        }
    };

    const setActive = (e) => {
        const img = document.querySelectorAll(".itemSideImg");
        img.forEach((item) => item.classList.remove("active"));
        e.target.classList.add("active");
        setActiveItem(details.filter((item) => item.name === e.target.name));
    };

    const setAciveColoring = (e) => {
        const color = document.querySelectorAll(".colorCircle");
        color.forEach((item) => item.classList.remove("activeColor"));
        e.target.classList.add("activeColor");
        setActiveColor(e.target.style.background);
    };

    useEffect(() => {
        const img = document.querySelectorAll(".itemSideImg");
        img[0].classList.add("active");
        const color = document.querySelectorAll(".colorCircle");
        color[0].classList.add("activeColor");
    }, []);

    useEffect(() => {
        const ratingFloat = activeItem[0].rating;
        setRating(Math.floor(ratingFloat));
        setActiveColor(activeItem[0].colors[0]);
        const color = document.querySelectorAll(".colorCircle");
        color.forEach((item) => item.classList.remove("activeColor"));
        color[0].classList.add("activeColor");
        setActiveQuantityCount(activeItem[0].count);
    }, [activeItem]);

    const addToCart = () => {
        activeQuantityCount==0?toast.error("Item count is zero"):toast.success("Added to Cart!");
        setActiveQuantityCount(0);
    };

    return (
        <div className="product">
            <Link className="backToHome" to="/"><IoIosArrowBack />Back to Home</Link>
            <div className="mainPage">
                <div className="productArea">
                    {details?.map((item, id) => {
                        return (
                            <div key={id}>
                                <img className="itemSideImg" onClick={setActive} src={item.image} alt={item.name} name={item.name} />
                            </div>
                        );
                    })}
                </div>
                <div className="activeProduct" style={{ backgroundColor: activeColor }}>
                    <img src={activeItem[0].image} alt={activeItem[0].name} />
                </div>
                <div className="activeProductDetails">
                    <div className="productHeading">
                        {activeItem[0].name}
                    </div>
                    <div className="productRating">
                        <div className="stars">
                            {
                                [...Array(rating)].map((item, id) => {
                                    return (
                                        <img key={id} src={starRed} alt="star" />
                                    )
                                })
                            }
                            {
                                [...Array(5 - rating)].map((item, id) => {
                                    return (
                                        <img key={id} src={starGray} alt="star" />
                                    )
                                })
                            }
                        </div>
                        <div className="ratingNumber">
                            {
                                `${activeItem[0].rating}/5`
                            }
                        </div>
                        <div className="review">
                            {
                                `(${activeItem[0].reviews} reviews)`
                            }
                        </div>
                    </div>
                    <div className="productDescription">
                        {activeItem[0].description}
                    </div>
                    <div className="pricing">
                        <div className="price">
                            <div className="actualPrice">
                                {`₹${activeItem[0].actual_price}`}
                            </div>
                            <div className="disCountPrice">
                                {`₹${activeItem[0].price}`}
                            </div>
                        </div>
                        <div className="tax">
                            Inclusive of all taxes.
                        </div>
                    </div>
                    <div className="colors">
                        <div className="colorsHeading">
                            Colors
                        </div>
                        <div className="colorsPalatte">
                            {
                                activeItem[0].colors.map((item, id) => {
                                    return (
                                        <div key={id} onClick={setAciveColoring} className="colorCircle" style={{ background: item }}></div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="quantity">
                        <div className="quantityHeading">
                            Quantity
                        </div>
                        <div className="quantityArea">
                            <div className="quantityTracker">
                                <div className="quantityDecrementor" onClick={decrementCount}><div className="stroke"></div></div>
                                <div className="quantityNumber">{activeQuantityCount}</div>
                                <div className="quantityIncrementor" onClick={incrementCount}><div className="stroke1"><div className="stroke2"></div></div></div>
                            </div>
                            <button className="addToCart" onClick={addToCart}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className="offers">
                        <div className="offersHeading">
                            Available Offers!
                        </div>
                        <div className="offersDetails">
                            {
                                activeItem[0].offers.map((item, id) => {
                                    return (
                                        <div key={id} className="eachOffer">
                                            <div className="circle"></div>
                                            <div className="list">
                                                <div>{item}</div>
                                                <a href="#">Know More</a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
