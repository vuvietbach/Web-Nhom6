import './productCard.css';

const ProductCard = ({product}) => {
    const hasRating = ("rating" in product && product.rate) ? true : false;
    const hasNumberSold = ("number_sold" in product && product.number_sold) ? true : false;
    return (
        <div className="product-card">
            <img class="card-img-top" src={product.img} alt={product.name}/>
            <div class="product-body">
                <div className="product-name">{product.name}</div>
                <div className='product-rating'>
                    {
                        product.rate && (
                            <span>
                                <span>{product.rate}</span>
                                <i class="fas fa-star" style={{fontSize:"0.7rem", color:'orange'}}></i>
                            </span>
                        )
                    }
                    {
                        (product.rate && product.number_sold) && (
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