import React from 'react'
import classes from './Header.module.css'

import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';



function Header() {
  return (
    <>
    <section>
        <div className={classes.header_container}>
            <div className={classes.logo_container}>
                {/* logo  section*/}
                <a href="">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                </a>
                <div className={classes.delivery}>
                    {/* delivery */}
                <span>
                    {/* icon */}
                    <SlLocationPin />

                </span>
                <div>
                    <p>Delivered to</p>
                    <span>Ethiopia</span>
                </div>
            </div>
            </div>
                {/* search */}
            <div className={classes.search}>
                
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text" name='' id='' placeholder='Search Product' />
                {/* icon */}
                <BsSearch size={25} />

            </div>
            {/* right side link */}
            {/* other section */}
            <div className={classes.order_container}>
                <a href='' className={classes.language}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/255px-Flag_of_the_United_States_%28Pantone%29.svg.png" alt="" />
                    <select name="" id="">
                        <option value="">EN</option>
                    </select>
                </a>
                {/* three components */}
                <a href="">
                    <div>
                        <p>Sign In</p>
                        <span>Account & Lists</span>
                    </div>
                </a>
                {/* order */}
                <a href="">
                    <p>returns</p>
                    <span>& Orders</span>
                </a>
                {/* cart */}
                <a href='' className={classes.cart}>
                {/* icon */}
                <BiCart size={35} />

                <span>0</span>
                </a>
            </div>
        </div>

    </section>
    <LowerHeader/>
    </>
  )
}

export default Header