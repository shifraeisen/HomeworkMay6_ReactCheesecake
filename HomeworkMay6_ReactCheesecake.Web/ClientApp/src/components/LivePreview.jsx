import dayjs from 'dayjs';

const LivePreview = ({ order, total }) => {
    const { base, toppings, specialRequests, quantity, deliveryDate } = order;

    const format = amt => {
        return amt.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    return (
        <div className='col-md-6 position-sticky' style={{ top: '2rem' }}>
            <h2 className='mb-4'>Live Preview</h2>
            <div className='card' style={{ width: '18rem' }}>
                <img src='/src/components/Cheesecake.png' className='card-img-top' alt='Cheesecake' />
                <div className='card-body'>
                    <h5 className='card-title'>Your Custom Cheesecake</h5>
                    <p className='card-text'>Base: {base}</p>
                    <p className='card-text'>Toppings: {toppings.join(', ')}</p>
                    <p className='card-text'>Special Requests: {specialRequests}</p>
                    <p className='card-text'>Quantity: {quantity}</p>
                    <p className='card-text'>Delivery Date: {deliveryDate && dayjs(deliveryDate).format("MM/DD/YYYY")}</p>
                    <p className='card-text fw-bold'>Total: {!base ? format(0) : format(total)}</p>
                </div>
            </div>
        </div>
    )
}
export default LivePreview;