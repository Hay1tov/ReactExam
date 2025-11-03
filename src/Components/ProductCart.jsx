import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";

const ProductCart = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
				setProduct(res.data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchProduct();
	}, [id]);

	if (loading) return <p className="text-center mt-10">Yuklanmoqda...</p>;
	if (error) return <p className="text-center text-red-500 mt-10">Xato: {error}</p>;
	if (!product) return <p className="text-center mt-10">Mahsulot topilmadi</p>;

	return (
		<div className="max-w-4xl mx-auto p-6 space-y-3 mt-15">
			<div className="">
				<NavLink
					to="/products"
					className="text-2xl text-black font-semibold py-0.5 rounded flex items-center gap-2"
				>
					<BiArrowBack color="black"/> Back
				</NavLink>
			</div>


			<div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl shadow-xl">
				<img
					src={product.image}
					alt={product.title}
					className="w-64 h-64 object-contain mx-auto"
				/>

				<div className="flex-1">
					<h1 className="text-2xl font-bold mb-2">{product.title}</h1>
					<p className="text-gray-700 mb-3">{product.description}</p>
					<p className="text-lg font-semibold mb-2">
						Kategoriya:{" "}
						<span className="text-blue-600">{product.category}</span>
					</p>
					<p className="text-2xl font-bold text-green-600">${product.price}</p>

					<button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
						Savatga qo‘shish
					</button>
				</div>
			</div>
		</div>
	);
};


export default ProductCart;
