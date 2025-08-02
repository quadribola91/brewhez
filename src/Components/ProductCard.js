const ProductCard = ({ image, hoverImage, name, description, price, onOrder }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg">
      <div className="relative w-full h-48 group">
        {/* Default Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        {/* Hover Image */}
        <img
          src={hoverImage}
          alt={`${name} alternate`}
          className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
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
