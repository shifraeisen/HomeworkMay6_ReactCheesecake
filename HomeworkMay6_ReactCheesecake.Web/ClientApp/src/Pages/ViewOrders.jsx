import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const ViewOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const { data } = await axios.get('/api/orders/getorders');
            setOrders(data);
        }
        getOrders();
    }, []);
    const format = amt => {
        return amt.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const getTableContent = () => {
        if (orders.length === 0) {
            return <div className='container' style={{ marginTop: 80 }}>
                <h1 className='text-center'>
                    No Orders Have Been Placed Yet
                </h1>
            </div>
        }
        else {
            return (
                <div className='container' style={{ marginTop: 80 }}>
                    <div className='d-flex justify-content-center'>
                        <table className='table text-center shadow-lg' style={{ borderollapse: 'separate', borderSpacing: '0px 15px', maxWidth: '80%' }}>
                            <thead>
                                <tr style={{ backgroundColor: 'rgb(33, 37, 41)', color: 'white', borderRadius: '15px' }}>
                                    <th>Name/Email</th>
                                    <th>Base Flavor</th>
                                    <th>Toppings</th>
                                    <th>Special Requests</th>
                                    <th>Quantity</th>
                                    <th>Delivery Date</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map(o =>
                                    <tr key={o.id} style={{ backgroundColor: 'rgb(248, 249, 250)', borderRadius: 15 }}>
                                        <td style={{ paddingTop: '15px', paddingBottom: '15px' }}><Link to={`/order-details/${o.id}`} style={{textDecoration: 'none'} }>{o.name} - {o.email}</Link></td>
                                        <td style={{ paddingTop: '15px', paddingBottom: '15px' }}>{o.baseFlavor}</td>
                                        <td style={{ paddingTop: '15px', paddingBottom: '15px' }}>{!o.toppings ? 'N/A' : o.toppings}</td>
                                        <td style={{ paddingTop: '15px', paddingBottom: '15px' }}>{!o.specialRequests ? 'N/A' : o.specialRequests}</td>
                                        <td style={{ paddingTop: '15px', paddingBottom: '15px' }}>{o.quantity}</td>
                                        <td style={{ paddingTop: '15px', paddingBottom: '15px' }}>{dayjs(o.deliveryDate).format("MM/DD/YYYY")}</td>
                                        <td style={{ paddingTop: '15px', paddingBottom: '15px' }}>{format(o.total)}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }
    return getTableContent()
}

export default ViewOrders;