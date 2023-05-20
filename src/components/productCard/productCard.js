import './productCard.css';

export const ProductCard = ({product}) => {
    return (
        <div className="product-card">
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
                        (product.numberSold && product.rating) && (
                            <span className='vertical-rule mx-2'></span>
                        )
                    }
                    {
                        product.numberSold && (
                            <span>
                                Đã bán {product.numberSold}
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