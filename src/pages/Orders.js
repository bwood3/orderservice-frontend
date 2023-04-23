import React, { useState } from 'react';
import axios from 'axios';

const Orders = () => {
    const [customerId, setCustomerId] = useState('');
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await axios.get(`http://localhost:8083/orders/${customerId}`);
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    return (
        <div>
            <h1>Orders</h1>
            <input
                type="number"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
                placeholder="Enter customer ID"
            />
            <button onClick={fetchOrders}>Get Orders</button>

            {orders.map((order) => (
                <div key={order.id}>
                    <h2>Order ID: {order.id}</h2>
                    <p>Customer ID: {order.customerId}</p>
                    <p>Total: {order.total}</p>
                    <p>Shipping Address:</p>
                    <p>
                        {order.shippingAddress.city}, {order.shippingAddress.state}{' '}
                        {order.shippingAddress.postalCode}
                    </p>
                    <p>Items:</p>
                    <ul>
                        {order.items.map((item) => (
                            <li key={item.id}>
                                {item.name} - {item.quantity} - ${item.price}
                            </li>
                        ))}
                    </ul>
                    <p>Payment Method: {order.payment.method}</p>
                </div>
            ))}
        </div>
    );
};

export default Orders;
