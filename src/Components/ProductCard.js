const ProductCard = ({ image, name, description, price, onOrder }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
        <p className="mt-2 font-bold text-lg">{price}</p>
        <button
          onClick={onOrder}
          className="mt-4 bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-800"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
