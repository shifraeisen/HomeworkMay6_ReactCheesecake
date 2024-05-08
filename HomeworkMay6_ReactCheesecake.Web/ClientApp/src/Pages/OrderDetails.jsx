import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';


const OrderDetails = () => {
    const { id } = useParams();

    const [order, setOrder] = useState({});

    useEffect(() => {

        const getOrderById = async () => {
            const { data } = await axios.get(`/api/orders/getorderbyid?id=${id}`);
            setOrder(data);
        }
        getOrderById();
    }, []);

    const format = amt => {
        const formatAsCurrency = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        return formatAsCurrency.format(amt);
    }

    const { name, email, baseFlavor, toppings, specialRequests, quantity, deliveryDate, total } = order;

    return (
        <div className='container' style={{ marginTop: 80 }}>
            <div className='d-flex align-items-center justify-content-center' style={{ height: '80vh' }}>
                <div className='card text-center shadow p-3 mb-5 bg-body rounded' style={{ width: '30rem', backgroundColor: 'rgb(248, 249, 250)' }}>
                    <div className='card-body'>
                        <h3 className='card-title fw-bold'>{name}</h3>
                        <p className='card-text fs-5'>{email}</p>
                        <p className='card-text fs-5'>{baseFlavor}</p>
                        <p className='card-text fs-5'>{!toppings ? 'N/A' : toppings}</p>
                        <p className='card-text fs-5'>{!specialRequests ? 'N/A' : specialRequests}</p>
                        <p className='card-text fs-5'>{quantity}</p>
                        <p className='card-text fs-5'>{dayjs(deliveryDate).format("MM/DD/YYYY")}</p>
                        <p className='card-text fs-5'>{format(total)}</p>
                    </div>
                    <Link to={'/view-orders'}><button className='btn btn-outline-info w-100'>Back To Orders</button></Link>
                </div>
            </div>
        </div>
    )
}
export default OrderDetails;