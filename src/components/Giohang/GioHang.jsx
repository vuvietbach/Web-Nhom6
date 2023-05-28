import React from 'react';
import './GioHang.css';

const GioHang = ({ items }) => {
    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const shippingFee = 20000;
    const total = subtotal + shippingFee;

    return (
        <div className="shopping-cart">
        <div className="shopping-cart-header">
            <h2 className="shopping-cart-title">Giỏ hàng</h2>
            <p className="shopping-cart-item-count">{items.length} sản phẩm</p>
        </div>
        <div className="shopping-cart-body">
            <table className="shopping-cart-table">
            <thead>
                <tr>
                <th>Ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                <tr key={item.id}>
                    <td>
                    <img src={item.image} alt={item.name} className="shopping-cart-item-image" />
                    </td>
                    <td>
                    <p className="shopping-cart-item-name">{item.name}</p>
                    </td>
                    <td>
                    <p className="shopping-cart-item-price">{item.price.toLocaleString('vi-VN')} đ</p>
                    </td>
                    <td>
                    <div className="shopping-cart-item-quantity">
                        <button className="shopping-cart-quantity-button" disabled={item.quantity === 1} onClick={() => console.log('-')}>-</button>
                        <span className="shopping-cart-quantity">{item.quantity}</span>
                        <button className="shopping-cart-quantity-button" onClick={() => console.log('+')}>+</button>
                    </div>
                    </td>
                    <td>
                    <p className="shopping-cart-item-subtotal">{(item.price * item.quantity).toLocaleString('vi-VN')} đ</p>
                    </td>
                    <td>
                    <button className="shopping-cart-remove-button" onClick={() => console.log('remove')}>Xóa</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        <div className="shopping-cart-footer">
            <div className="shopping-cart-summary">
            <p className="shopping-cart-summary-title">Tạm tính:</p>
            <p className="shopping-cart-summary-total">{subtotal.toLocaleString('vi-VN')} đ</p>
            </div>
            <div className="shopping-cart-summary">
            <p className="shopping-cart-summary-title">Phí vận chuyển:</p>
            <p className="shopping-cart-summary-total">{shippingFee.toLocaleString('vi-VN')} đ</p>
            </div>
            <div className="shopping-cart-summary">
            <p className="shopping-cart-summary-title">Tổng cộng:</p>
            <p className="shopping-cart-summary-total">{total.toLocaleString('vi-VN')} đ</p>
            </div>
            <button className="shopping-cart-checkout-button">Thanh toán</button>
        </div>
        </div>
    )
}

export default GioHang;