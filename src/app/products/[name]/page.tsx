import React from "react";

// 1. Add 'async' to the component function
const ProductPageId = async ({ params }) => {
  // 2. Await the params to get the data
  const { name } = await params;

  return (
    <div>
      {/* 3. Use the variable you extracted */}
      ProductPageId is {name}
    </div>
  );
};

export default ProductPageId;
