import React, { useState } from 'react';
import ProductCard from '../Components/ProductCard';
import OrderModal from '../Components/OrderModal';

const products = [
  {
    id: 1,
    name: "Colombian Brew",
    description: "Rich and aromatic from the Colombian mountains.",
    price: "$12.99",
    image: "/images/colombian.jpg",
  },
  {
    id: 2,
    name: "Ethiopian Roast",
    description: "Fruity and bright, a classic African coffee.",
    price: "$14.50",
    image: "/images/ethiopian.jpg",
  },
  {
    id: 3,
    name: "French Roast",
    description: "Dark, bold and intense.",
    price: "$13.75",
    image: "/images/french.jpg",
  },
];

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Coffee Brands</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onOrder={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {selectedProduct && (
        <OrderModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductsPage;
