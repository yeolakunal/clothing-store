import { FC } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import { CategoryPreviewContainer, Preview } from "./category-preview.styles";
import { CategoryItem } from "../../store/categories/category.types";

type CategoryItemProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryItemProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
