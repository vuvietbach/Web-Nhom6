import { MainLayout } from 'components/layoutTemplate/layoutTemplate'
import './cartPage.css'
import { useState } from 'react'
const QuantityButton = ({quantity}) => {
    return (
        <div style={{display:"flex", alignItems:"center"}}>
            <button className='quantity-button'>-</button>
            <div style={{margin:"0 10px"}}>{quantity}</div>
            <button className='quantity-button'>+</button>
        </div>
    )
}

const CartItem = ({item, handleQuantityChange}) => {
    const handleClick = () => {
    }
    return (
        <div class="cart-row" style={{marginBottom:"15px"}}>
            <input type="checkbox"></input>
            <div style={{display:"flex", gap:"15px"}}>
                <img src={item.image_url} alt={item.name} style={{width:"80px", height:"80px"}}/>
                <div>{item.name}</div>
            </div>
            <div style={{margin:"auto 0"}}>{item.price}</div>
            <div style={{margin:"auto 0"}}><QuantityButton quantity={item.quantity}/></div>
            <div style={{margin:"auto 0"}}>{item.price*item.quantity}</div>
            <div style={{display:"flex", alignItems:"center"}} onClick={handleClick}>
                <i style={{marginLeft:"auto"}} class="fa-solid fa-trash"></i>
            </div>
        </div>
    )
}

export default function CartPage() {
    const [cart, setCart] = useState([
        {image_url: 'https://salt.tikicdn.com/cache/w78/ts/product/df/b9/d1/15e8aece47d0d13ca0f0fe7d94a1f302.png.webp', name: 'Iphone 12', price: 10000000, quantity: 1},
        {image_url: 'https://salt.tikicdn.com/cache/w78/ts/product/df/b9/d1/15e8aece47d0d13ca0f0fe7d94a1f302.png.webp', name: 'Iphone 12', price: 10000000, quantity: 1},
        {image_url: 'https://salt.tikicdn.com/cache/w78/ts/product/df/b9/d1/15e8aece47d0d13ca0f0fe7d94a1f302.png.webp', name: 'Iphone 12', price: 10000000, quantity: 1}
    ])
    const handleQuantityChange = (item, quantity) => {
        if (quantity < 1) {
            return
        }
        const newCart = cart.map((cartItem) => {
            if (cartItem.name === item.name) {
                return {...cartItem, quantity: quantity}
            }
            return cartItem
        })
        setCart(newCart)
    }
    return (
        <MainLayout>
            <div>Gio hang</div>
            <div class="two-area-layout">
                <div class="main-container">
                    <div class="card">
                        <div class="cart-row">
                            <input type="checkbox"></input>
                            <div>Tất cả</div>
                            <div>Đơn giá</div>
                            <div>Số lượng</div>
                            <div>Thành tiền</div>
                            <div style={{display:"flex", alignItems:"center"}}>
                                <i style={{marginLeft:"auto"}} class="fa-solid fa-trash"></i>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        {cart.map((item) => {
                            return CartItem({item})
                        })}    
                    </div>
                </div>
                <div class="side-container">
                    <div className='card'>
                        Tong tien: 10000000d
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}