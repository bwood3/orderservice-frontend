import React, { useState } from 'react';
import axios from 'axios';

const AddOrder = () => {
    const [customerId, setCustomerId] = useState('');
    const [total, setTotal] = useState('');
    const [shippingAddress, setShippingAddress] = useState({ state: '', city: '', postalCode: '' });
    const [items, setItems] = useState([{ name: '', quantity: '', price: '' }]);
    const [payment, setPayment] = useState({ method: '', number: '', billingAddress: { state: '', city: '', postalCode: '' }});

    const addItem = () => {
        setItems([...items, { name: '', quantity: '', price: '' }]);
    };

    const handleChangeItem = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;
        setItems(newItems);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const order = {
            customerId: parseInt(customerId),
            total: parseFloat(total),
            shippingAddress,
            items,
            payment
        };

        try {
            const response = await axios.post('https://orderserviceapplication-production.up.railway.app/orders', order);
            console.log('Order added, ID:', response.data);
            alert(`Order added successfully, ID: ${response.data}`);
        } catch (error) {
            console.error('Error adding order:', error);
        }
    };

    return (
        <div>
            <h1>Add Order</h1>
            <form onSubmit={handleSubmit}>
                <label>Customer ID:</label>
                <input type="number" value={customerId} onChange={(e) => setCustomerId(e.target.value)} required />
                <br />
                <label>Total:</label>
                <input type="number" step="0.01" value={total} onChange={(e) => setTotal(e.target.value)} required />
                <br />
                <label>Shipping Address:</label>
                <input
                    type="text"
                    placeholder="State"
                    value={shippingAddress.state}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="City"
                    value={shippingAddress.city}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                    required
                />
                <input
                    type="number"
                    placeholder="Postal Code"
                    value={shippingAddress.postalCode}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: parseInt(e.target.value) })}
                    required
                />
                <br />
                <label>Items:</label>
                {items.map((item, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            placeholder="Name"
                            value={item.name}
                            onChange={(e) => handleChangeItem(index, 'name', e.target.value)}
                            required
                        />
                        <input
                            type="number"
                            placeholder="Quantity"
                            value={item.quantity}
                            onChange={(e) => handleChangeItem(index, 'quantity', parseInt(e.target.value))}
                            required
                        />
                        <input
                            type="number"
                            step="0.01"
                            placeholder="Price"
                            value={item.price}
                            onChange={(e) => handleChangeItem(index, 'price', parseFloat(e.target.value))}
                            required
                        />
                    </div>
                ))}
                <button type="button" onClick={addItem}>Add Item</button>
                <br />
                <label>Payment:</label>
                <input
                    type="text"
                    placeholder="Method"
                    value={payment.method}
                    onChange={(e) => setPayment({ ...payment, method: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Number"
                    value={payment.number}
                    onChange={(e) => setPayment({ ...payment, number: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Billing State"
                    value={payment.billingAddress.state}
                    onChange={(e) => setPayment({ ...payment, billingAddress: { ...payment.billingAddress, state: e.target.value } })}
                    required
                />
                <input
                    type="text"
                    placeholder="Billing City"
                    value={payment.billingAddress.city}
                    onChange={(e) => setPayment({ ...payment, billingAddress: { ...payment.billingAddress, city: e.target.value } })}
                    required
                />
                <input
                    type="number"
                    placeholder="Billing Postal Code"
                    value={payment.billingAddress.postalCode}
                    onChange={(e) => setPayment({ ...payment, billingAddress: { ...payment.billingAddress, postalCode: parseInt(e.target.value) } })}
                    required
                />
                <br />
                <button type="submit">Submit Order</button>
            </form>
        </div>
    );
};

export default AddOrder;
