import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./OrderManagement.css"
import images from "../../assets/assets";


const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('all');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${window.env.REACT_APP_SERVER_URL}/order/get-order-by-user-id/{user_id}`);
      if (response.data.orders) {
        setOrders(response.data.orders);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const createOrder = async () => {
    try {
      // Code to create a new order
      await axios.post(`${window.env.REACT_APP_SERVER_URL}/order/create-order`, { /* order data */ });
      fetchOrders();
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  const changeOrderStatus = async (orderId) => {
    try {
      await axios.post(`${window.env.REACT_APP_SERVER_URL}/order/change-status`, { orderId, newStatus: 'DONE' });
      fetchOrders();
    } catch (error) {
      console.error('Error changing order status:', error);
    }
  };

  const filterOrdersByStatus = (status) => {
    if (status === 'all') {
      return orders;
    } else {
      return orders.filter((order) => order.status === status);
    }
  };

  const handleStatusFilterChange = (status) => {
    setSelectedStatus(status);
  };

  return (
    <>
    <div id="cot_menu" className="menu">
                  <div id="avatar" style={{width: '50px', display: 'inline-block', verticalAlign: 'top', backgroundColor: '#F11B1F', height: '50px', borderRadius: '50%', overflow: 'hidden'}}>
                    <img src={images['./bach.jpg']} alt="Avatar" style={{width: '100%', height: '100%', display: 'inline-block'}} />
                  </div>
                  <div id="menu_1" style={{display: 'inline-block', verticalAlign: 'top', border: '#F9EAEA 0px none', height: '50px', marginBottom: '20px', marginLeft: '20px'}}>Tài khoản của <br />
                    <strong>Bách Vũ</strong>
                  </div>
                  <div id="menu_2" style={{ height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./thongtintaikhoan.png']} alt="Avatar" />Thông tin tài khoản
                  </div>
                  <div id="menu_3" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./thongbaocuatoi.png']} alt="Avatar" />Thông báo của tôi </div>
                  <div id="menu_4" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./quanlydonhang.png']} alt="Avatar" />Quản lý đơn hàng </div>
                  <div id="menu_5" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./quanlydoitra.png']} alt="Avatar" />Quản lý đổi trả </div>
                  <div id="menu_6" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./sodiachi.png']} alt="Avatar" />Sổ địa chỉ </div>
                  <div id="menu_7" style={{height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./thongtinthanhtoan.png']} alt="Avatar" />Thông tin thanh toán </div>
                  <div id="menu_8" style={{backgroundColor: '#E0E0E0',height: '40px', border: '#F9EAEA 0px none'}}>
                    <img style={{width: '30px', display: 'inline-block', verticalAlign: 'top', height: '30px', borderRadius: '50%', overflow: 'hidden'}} src={images['./danhgiasanpham.png']} alt="Avatar" />Đánh giá sản phẩm </div>
                  
                </div>
    <div className="order-management">
      <h1>Quản lý đơn hàng của tôi</h1>
      <div className="order-filters">
        <button
          className={selectedStatus === 'all' ? 'active' : ''}
          onClick={() => handleStatusFilterChange('all')}
        >
          Tất cả đơn
        </button>
        <button
          className={selectedStatus === 'waiting_payment' ? 'active' : ''}
          onClick={() => handleStatusFilterChange('waiting_payment')}
        >
          Chờ thanh toán
        </button>
        <button
          className={selectedStatus === 'processing' ? 'active' : ''}
          onClick={() => handleStatusFilterChange('processing')}
        >
          Đang xử lý
        </button>
        <button
          className={selectedStatus === 'shipping' ? 'active' : ''}
          onClick={() => handleStatusFilterChange('shipping')}
        >
          Đang vận chuyển
        </button>
        <button
          className={selectedStatus === 'delivered' ? 'active' : ''}
          onClick={() => handleStatusFilterChange('delivered')}
        >
          Đã giao
        </button>
        <button
          className={selectedStatus === 'cancelled' ? 'active' : ''}
          onClick={() => handleStatusFilterChange('cancelled')}
        >
          Đã hủy
        </button>
      </div>
      <div className="order-list">
        {orders && orders.length > 0 ? (
          filterOrdersByStatus(selectedStatus).map((order) => (
            <div key={order.id} className="order-item">
              <div className="order-details">
                <p className="order-id">Mã đơn hàng: {order.id}</p>
                <p className="order-product">Sản phẩm: {order.productName}</p>
                <p className="order-status">Trạng thái: {order.status}</p>
              </div>
              <div className="order-actions">
                {order.status === 'shipping' && (
                  <button
                    className="receive-button"
                    onClick={() => changeOrderStatus(order.id)}
                  >
                    Nhận hàng
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>Không có đơn hàng.</p>
        )}
      </div>
      
    </div>
    </>
  );
};

export default OrderManagement;
