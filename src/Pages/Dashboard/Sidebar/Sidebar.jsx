import logo from "../../../assets/Assets/logo.png"
import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaBox, FaChartPie, FaPlus, FaTicketAlt, FaUsers } from "react-icons/fa";
import { IoIosLogOut, IoMdHome } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { MdOutlinePending, MdReportProblem } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useRole from "../../../Hooks/useRole";
import { Clock, CheckCircle, XCircle } from "lucide-react";
import useAuth from "../../../Hooks/useAuth";
const Sidebar = () => {
    const [isActive, setActive] = useState(false);
    const [role, isLoading] = useRole();
    const {signOutUser} = useAuth();
    const navigate = useNavigate();

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive);
    };

    const handleUserLogOut = () => {
        signOutUser()
        navigate("/login")
    }
    
    return (
        <div className="">
            {/* Small Screen Navbar */}
            <div className="fixed top-0 z-50 w-full bg-white flex justify-between md:hidden">
                <div className="">
                    <div className="block cursor-pointer p-4 font-bold">
                        <Link to="/"><div className=" flex items-center gap-1">
                            <img className="w-[25px]" src={logo} alt="" />
                            <p className="text-[20px] font-semibold uppercase">Shop<span className="text-secondary">Per</span></p>

                        </div></Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className="mobile-menu-button p-4 focus:outline-none "
                >
                    <AiOutlineBars className="h-5 w-5" />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && "-translate-x-full"
                    } md:translate-x-0 transition duration-200 ease-in-out`}
            >
                <div>
                    <div className="w-full  px-4 py-2 shadow rounded-lg justify-center items-center mx-auto bg-secondary">
                        <h2 className="flex items-center justify-center gap-1 font-medium text-gray-100 "> <IoHome className="text-[15px]" />{`${role === 'customer' ? 'Customer' : role === 'seller' ? "Seller" : role === "moderator" ? "Moderator" : role === "admin" ? "Admin" : ''}`} Home</h2>

                    </div>

                    {/* Nav Items */}
                    <div>
                        <nav className="mt-10  space-y-4 text-[16px] font-medium flex flex-col">

                           
                                {/* customer */}
                                {
                                    role === "customer" && <>
                                        <NavLink to="/dashboard/cart" className={({ isActive }) =>
                                            `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                                ? "bg-gray-100"
                                                : "hover:bg-gray-100"
                                            }`
                                        }><FaPlus />My Cart</NavLink>
                                    </>
                                }

                                {/* seller */}
                                {
                                    role === "seller" && <>
                                        <NavLink to="/dashboard/addProduct" className={({ isActive }) =>
                                            `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                                ? "bg-gray-100"
                                                : "hover:bg-gray-100"
                                            }`
                                        }><FaPlus />Add Product</NavLink>

                                        <NavLink to="/dashboard/myProduct" className={({ isActive }) =>
                                            `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                                ? "bg-gray-100"
                                                : "hover:bg-gray-100"
                                            }`
                                        }><FaBox />My Product</NavLink>

                                    </>
                                }

                                {/* moderator */}
                                {
                                    role === "moderator" && <>
                                        <NavLink to="/dashboard/pendingProduct" className={({ isActive }) =>
                                            `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                                ? "bg-gray-100"
                                                : "hover:bg-gray-100"
                                            }`
                                        }><Clock className="text-yellow-500 w-[18px] h-[18px]" /> Pending Product</NavLink>
                                        <NavLink to="/dashboard/approveProduct" className={({ isActive }) =>
                                            `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                                ? "bg-gray-100"
                                                : "hover:bg-gray-100"
                                            }`
                                        }> <CheckCircle className="text-green-600 w-[18px] h-[18px]" /> Approve Product</NavLink>
                                        <NavLink to="/dashboard/rejectProduct" className={({ isActive }) =>
                                            `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                                ? "bg-gray-100"
                                                : "hover:bg-gray-100"
                                            }`
                                        }>  <XCircle className="text-red-600 w-[18px] h-[18px]" /> Rejected Product</NavLink>
                                        <NavLink to="/dashboard/rejectProduct" className={({ isActive }) =>
                                            `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                                ? "bg-gray-100"
                                                : "hover:bg-gray-100"
                                            }`
                                        }><MdReportProblem className="w-[18px] h-[18px]" /> Report Product</NavLink>
                                    </>
                                }

                                {/* admin */}
                                {
                                    role === "admin" && <>
                                        <NavLink to="/statistics" className={({ isActive }) =>
                                            `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                                ? "bg-gray-100"
                                                : "hover:bg-gray-100"
                                            }`
                                        }><FaChartPie /> Statistics</NavLink>

                                        <NavLink to="/dashboard/manageUsers" className={({ isActive }) =>
                                            `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                                ? "bg-gray-100"
                                                : "hover:bg-gray-100"
                                            }`
                                        }><FaUsers />Manage Users</NavLink>

                                        <NavLink to="/" className={({ isActive }) =>
                                            `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                                ? "bg-gray-100"
                                                : "hover:bg-gray-100"
                                            }`
                                        }><FaTicketAlt />Manage Coupon</NavLink>
                                    </>
                                }

                           
                            <div className="space-y-4">
                                <hr className="mt-[100px]" />
                                <NavLink to="/dashboard/profile" className={({ isActive }) =>
                                    `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                        ? "bg-gray-100"
                                        : "hover:bg-gray-100"
                                    }`
                                }><CgProfile className="w-[18px] h-[18px]" /> Profile</NavLink>

                                <NavLink to="/" className={({ isActive }) =>
                                    `flex items-center gap-2 px-4 py-2 rounded-lg ${isActive
                                        ? "bg-gray-100"
                                        : "hover:bg-gray-100"
                                    }`
                                }><IoMdHome className="w-[18px] h-[18px]" /> Home</NavLink>

                                <button onClick={handleUserLogOut} className="
                                    flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 w-full"><IoIosLogOut className="w-[18px] h-[18px]" /> LogOut</button>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;