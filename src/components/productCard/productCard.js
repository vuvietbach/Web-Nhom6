import './productCard.css';
import { useNavigate } from 'react-router-dom';
const ProductCard = ({product}) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate(`/chi-tiet-san-pham/${product.id}`);
    }
    return (
        <div className="product-card" onClick={handleOnClick}>
            <img class="card-img-top" src={product.image_url} alt={product.name}/>
            <div class="product-body">
                <div className="product-name">{product.name}</div>
                <div className='product-rating'>
                    {
                        product.rating && (
                            <span>
                                <span>{product.rating}</span>
                                <i class="fas fa-star" style={{fontSize:"0.7rem", color:'orange'}}></i>
                            </span>
                        )
                    }
                    {
                        (product.rating && product.number_sold) && (
                            <span className='vertical-rule mx-2'></span>
                        )
                    }
                    {
                        product.number_sold && (
                            <span>
                                Đã bán {product.number_sold}
                            </span>   
                        )
                    }
                </div>
                <div className='product-price'>
                    {product.price.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'})}
                </div>
            </div>
        </div>
    )
}
export default ProductCard;