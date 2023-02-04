import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";

import { CategoriesContext } from "../../context/categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
      <div className="products-container"></div>
    </>
  );
};

export default CategoriesPreview;
