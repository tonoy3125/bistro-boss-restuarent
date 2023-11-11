import { NavLink } from "react-router-dom";
import icon from "../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import profile from "../../../assets/others/profile.png";
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 fixed z-10 bg-opacity-30 bg-[#15151580]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <AiOutlineMenu className="text-2xl font-bold text-white"></AiOutlineMenu>
                    </label>
                    <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                        <li className="text-white text-base hover:text-[#46d993] font-bold uppercase"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-[#EEFF25] underline" : ""
                        } to="/">Home</NavLink></li>
                        <li className="text-white text-base hover:text-[#46d993] font-bold uppercase"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " text-[#EEFF25]  font-bold underline" : ""
                        } to="/contactus">CONTACT us</NavLink></li>
                        <li className="text-white text-base hover:text-[#46d993] font-bold uppercase"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-[#EEFF25]  underline" : ""
                        } to="/dashboard">DASHBOARD</NavLink></li>
                        <li className="text-white text-base hover:text-[#46d993] font-bold uppercase"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-[#EEFF25]  underline" : ""
                        } to="/menu">Our Menu</NavLink></li>
                        <li className="text-white text-base hover:text-[#46d993] font-bold uppercase"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-[#EEFF25]  underline" : ""
                        } to="/shop">Our Shop</NavLink></li>
                        <img className="w-12" src={icon} alt="" />
                        <li className="text-white text-base hover:text-[#46d993] font-bold uppercase"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-[#EEFF25]  underline" : ""
                        } to="/shop">Sign Out</NavLink></li>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={profile} />
                            </div>
                        </label>

                    </ul>
                </div>
                <div className="ml-16 md:ml-0">
                    <h1 className="font-black text-[#FFF] text-xl lg:text-[32px]">BISTRO BOSS <br /> RESTAURANT</h1>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className=" flex items-center gap-5">
                    <li className="text-white text-xl hover:text-[#46d993] font-bold uppercase"><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-[#EEFF25] underline" : ""
                    } to="/">Home</NavLink></li>
                    <li className="text-white text-xl hover:text-[#46d993] font-bold uppercase"><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " text-[#EEFF25]  font-bold underline" : ""
                    } to="/contactus">CONTACT us</NavLink></li>
                    <li className="text-white text-xl hover:text-[#46d993] font-bold uppercase"><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-[#EEFF25]  underline" : ""
                    } to="/dashboard">DASHBOARD</NavLink></li>
                    <li className="text-white text-xl hover:text-[#46d993] font-bold uppercase"><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-[#EEFF25]  underline" : ""
                    } to="/menu">Our Menu</NavLink></li>
                    <li className="text-white text-xl hover:text-[#46d993] font-bold uppercase"><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-[#EEFF25]  underline" : ""
                    } to="/shop">Our Shop</NavLink></li>
                    <img className="w-16" src={icon} alt="" />
                    <li className="text-white text-xl hover:text-[#46d993] font-bold uppercase"><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-[#EEFF25]  underline" : ""
                    } to="/shop">Sign Out</NavLink></li>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={profile} />
                        </div>
                    </label>
                </ul>


            </div>
        </div>
    );
};

export default Navbar;