const Form = ({ order, onTextChange, onCheckChange, onSubmitClick }) => {

    const { name, email, base, specialRequests, quantity, deliveryDate } = order;
    const bases = ['Classic', 'Chocolate', 'Red Velvet', 'Brownie'];
    const toppings = ['Chocolate Chips', 'Caramel Drizzle', 'Whipped Cream', 'Pecans', 'Almonds', 'Toasted Coconut',
        'Graham Cracker Crumble', 'Cookie Dough', 'Mint Chocolate Chips', 'Caramelized Bananas', 'Rainbow Sprinkles',
        'Powdered Sugar', 'White Chocolate Shavings', 'Peanut Butter Drizzle', 'Dark Chocolate Drizzle'];

    return (
        <>
            <div className='col-md-6'>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input name='name' value={name} onChange={onTextChange} type='text' className='form-control' placeholder='Name' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input name='email' value={email} onChange={onTextChange} type='text' className='form-control' placeholder='Email' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Cheesecake Base Flavor ($49.99)</label>
                    <select name='base' className='form-select' value={base} onChange={onTextChange}>
                        <option defaultValue hidden>--Choose Base--</option>
                        {bases.map(b => <option key={bases.indexOf(b)}>{b}</option>)}
                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Toppings (each topping adds an additional $3.95)</label>
                    {toppings.map(t => (<div key={toppings.indexOf(t)} className='form-check'>
                        <input className='form-check-input' type='checkbox' onChange={() => onCheckChange(t)} />
                        <label className='form-check-label'>{t}</label>
                    </div>))}
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Special Requests</label>
                    <textarea name='specialRequests' value={specialRequests} onChange={onTextChange} className='form-control' rows='3'></textarea>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Quantity</label>
                    <input name='quantity' value={quantity} onChange={onTextChange} type='number' className='form-control' min='1' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Delivery Date</label>
                    <input name='deliveryDate' value={deliveryDate} onChange={onTextChange} type='date' className='form-control' />
                </div>
                <button disabled={!base || !name || !email || !deliveryDate} onClick={onSubmitClick} className='btn btn-success'>Submit Order</button>
            </div>
        </>
    )
}
export default Form;