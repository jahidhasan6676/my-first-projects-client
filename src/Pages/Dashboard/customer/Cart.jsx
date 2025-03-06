import React from "react";
import useCart from "../../../Hooks/useCart";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import usePrice from "../../../Hooks/usePrice";


const Cart = () => {
    const [cart, , refetch] = useCart();
    const [total, shippingFee, subTotal] = usePrice();
    const axiosSecure = useAxiosSecure();

    // product item delete
    const handleCartProductDelete = async (id) => {

        const res = await axiosSecure.delete(`/cart-product-delete/${id}`)
        if (res.data.deletedCount) {
            refetch()
        }

    }

    // update order quantity
    const handleUpdateOrderQuantity = async (newQuantity, id) => {
        const res = await axiosSecure.patch(`/cart-quantity-update/${id}`, { newQuantity })
        if (res.data.modifiedCount) {
            refetch();
        }
    }


    return (
        <>
            <div className="w-11/12 mx-auto pt-10">

                <div className="bg-white mb-10 p-3 md:p-6 lg:p-10 rounded-md">
                    <h2 className="text-2xl font-medium uppercase relative mb-8">
                        <span className="text-gray-500">MY</span> CART
                        <hr className="absolute top-[14px] left-[115px] border-[1px] border-gray-600 w-[50px] " />
                    </h2>

                    <div>
                        {cart?.map(list => <React.Fragment key={list._id}>
                            <div className="flex justify-between py-4 border-b border-gray-200">
                                <div className="flex">
                                    <img src={list?.photo} alt={list?.productName} className="w-20 h-20 object-contain mr-4" />
                                    <div className="flex-grow">
                                        <h3 className="text-sm md:text-lg font-semibold">{list?.productName}</h3>
                                        <p className="text-sm text-gray-600">${list?.price}  </p>
                                        {/* <Link to={`/productDetails/${list?._id}`}><p className="text-sm underline">Details</p></Link> */}
                                    </div>
                                </div>
                                <div className="flex items-center md:gap-10">
                                    <input
                                        type="number"
                                        defaultValue={list?.orderQuantity || 1}
                                        name="orderQuantity"
                                        onChange={(e) => handleUpdateOrderQuantity(parseInt(e.target.value), list?._id)}
                                        min="1"
                                        className="w-16 border border-gray-300 rounded px-2 py-1 mr-2"
                                    />
                                    <button onClick={() => handleCartProductDelete(list._id)} className="text-gray-500 hover:text-gray-700">
                                        <RxCross1 className="w-5 h-5 " />
                                    </button>
                                </div>
                            </div>
                        </React.Fragment>)}
                    </div>
                </div>



                {/* total price and payment */}
                <div className=" pb-10">
                    <div className="flex justify-end">
                        <div className="max-w-lg w-full bg-white p-3 md:p-6 lg:p-10">
                            <h2 className="text-2xl font-medium uppercase relative mb-8">
                                <span className="text-gray-500">CART</span> TOTAL
                                <hr className="absolute top-[14px] left-[150px] border-[1px] border-gray-600 w-[50px]" />
                            </h2>
                            <div className="flex justify-between mb-3">
                                <span>Subtotal</span>
                                <span>${subTotal.toFixed(2)}</span>
                            </div>
                            <hr className="mb-3" />
                            <div className="flex justify-between mb-3">
                                <span>Shipping Fee</span>
                                <span>${shippingFee.toFixed(2)}</span>
                            </div>
                            <hr className="mb-3" />
                            <div className="flex justify-between font-semibold">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-end">
                                <Link to="/dashboard/checkout">
                                    <button className="mt-4 bg-black text-sm text-white py-3 px-8 w-fit">
                                        PROCEED TO CHECKOUT
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;