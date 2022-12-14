// styling
import styles from "./ProductCard.module.scss";

const ProductCard = ({ productName, productPrice, productImages }) => {
    return (
        <div className={styles.ProductCard}>
            <img
                src={productImages[0]}
                alt="item cover"
                className={styles.ProductCard__image}
            />
            <p className={styles.ProductCard__name}>{productName}</p>
            <p className={styles.ProductCard__price}>
                ${productPrice.toFixed(2)}
            </p>
        </div>
    );
};

export default ProductCard;
