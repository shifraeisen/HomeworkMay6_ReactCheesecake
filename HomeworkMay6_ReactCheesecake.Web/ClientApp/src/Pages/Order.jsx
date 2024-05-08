import 'bootstrap/dist/css/bootstrap.css';
import Form from '../components/Form';
import LivePreview from '../components/LivePreview';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Order = () => {

    const [order, setOrder] = useState({
        name: '',
        email: '',
        base: '',
        toppings: [],
        specialRequests: '',
        quantity: 1,
        deliveryDate: '',
    });

    const navigate = useNavigate();

    const total = (order.quantity * 49.99) + (order.toppings.length * 3.95 * order.quantity);

    const onSubmitClick = async () => {
        await axios.post('/api/orders/add', { ...order, baseFlavor: order.base, total, toppings: order.toppings.join(', ') });
        navigate('/success');
    }

    const onTextChange = e => {
        const copy = { ...order };
        copy[e.target.name] = e.target.value;
        setOrder(copy);
    }

    const onCheckChange = t => {
        let tops = order.toppings.includes(t) ? [...order.toppings.filter(x => x !== t)] : [...order.toppings, t];
        setOrder({ ...order, toppings: tops });
    }

    return (
        <div className='container' style={{ marginTop: 80 }}>
            <h1 className='text-center my-4'>Cheesecake Factory Order Form</h1>
            <div className='row'>
                <Form order={order}
                    onTextChange={onTextChange}
                    onCheckChange={onCheckChange}
                    onSubmitClick={onSubmitClick} />
                <LivePreview order={order} total={total} />
            </div>
        </div>
    );
}

export default Order;