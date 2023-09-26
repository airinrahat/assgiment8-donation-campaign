/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CategoriesCard = ({ category }) => {
  const {
    id,
    picture,
    title,
    category_name,
    text_color,
    category_bg,
    card_bg,
  } = category || {};
  return (
    <Link to={`/categories/${id}`}>
      <div className="lg:p-0 md:p-10 p-5">
        <div
          className="card card-compact  bg-base-100 rounded-lg"
          style={{ backgroundColor: category_bg }}
        >
          <figure>
            <img src={picture} alt="Shoes" />
          </figure>
          <div className="card-body p-0">
            <h2
              className="w-20 p-1 text-center font-medium rounded"
              style={{ backgroundColor: card_bg, color: text_color }}
            >
              {category_name}
            </h2>
            <h2 className="text-xl font-bold" style={{ color: text_color }}>
              {title}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoriesCard;
