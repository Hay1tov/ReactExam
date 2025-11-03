import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ma'lumotlarni olish
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
        setFiltered(res.data);
        const uniqueCategories = [
          "all",
          ...new Set(res.data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Filter va qidiruv
  useEffect(() => {
    let result = [...products];

    if (selectedCategory !== "all") {
      result = result.filter((item) => item.category === selectedCategory);
    }

    if (minPrice) result = result.filter((item) => item.price >= +minPrice);
    if (maxPrice) result = result.filter((item) => item.price <= +maxPrice);

    if (search.trim() !== "") {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(result);
  }, [products, selectedCategory, minPrice, maxPrice, search]);

  if (loading) return <p className="text-center">Yuklanmoqda...</p>;
  if (error) return <p className="text-center text-red-500">Xato: {error}</p>;

  return (
    <main className="flex">
      {/* Chapdagi filter panel */}
      <aside className="w-[280px] h-screen p-4 fixed top-15 bg-white shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Filtrlar</h2>

        {/* Kategoriya */}
        <label className="font-medium block mb-2">Kategoriya</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 w-full rounded mb-4 outline-none"
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>

        {/* Narx oralig‘i */}
        <label className="font-medium block mb-2">Narx oralig‘i ($)</label>
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="border p-2 rounded w-1/2 outline-none"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="border p-2 rounded w-1/2 outline-none"
          />
        </div>
      </aside>

      {/* Productlar qismi */}
      <section className="ml-[300px] flex-1 p-6 pt-[80px]">
        {/* Qidiruv input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded w-full shadow-sm outline-none"
          />
        </div>

        {/* Productlar ro‘yxati */}
        <div className="grid grid-cols-3 gap-4">
          {filtered.map((item) => (
            <Link
              to={`/products/cart/${item.id}`}
              key={item.id}
              className="border rounded-xl shadow-md p-4 hover:shadow-lg transition hover:-translate-y-1 duration-200 block"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-contain mx-auto"
              />
              <h2 className="text-lg font-semibold mt-2 line-clamp-2">
                {item.title}
              </h2>
              <p className="text-gray-600 font-medium">${item.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
