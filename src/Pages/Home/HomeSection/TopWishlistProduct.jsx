import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";


const TopWishlistProduct = () => {
    const axiosPublic = useAxiosPublic();

    const { data: topWishlistProduct = [], isLoading, refetch, error } = useQuery({
        queryKey: ["topWishlistProduct"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/top-wishlist-product`);
            return res.data;
        },
    });

    if (isLoading) return <LoadingSpinner />

    return (
        <div className="w-11/12 mx-auto pb-20">
            <h2 className="text-2xl md:text-3xl font-medium uppercase relative mb-10 ">
                <span className="text-gray-500">TOP</span> WISHLIST
                <hr className="absolute top-[16px] left-[170px] md:left-[210px] border-[1px] border-gray-600 w-[50px] " />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                {topWishlistProduct?.map(product => (
                    <div key={product._id} className="">
                        <Link to={`/productDetails/${product?._id}`}><img src={product?.photo} alt="" className="h-auto max-h-[350px] object-contain" /></Link>
                        <div className="mt-2">
                            <h2>{product?.productName}</h2>
                            <div className="flex items-center gap-10">
                                <p>${product?.price}</p>
                                {/* <p>Wish({product?.wishlistCount})</p> */}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopWishlistProduct;
