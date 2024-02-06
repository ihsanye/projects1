import { useState, useEffect } from 'react'

const initialFormValues = { fullname: '', phone_number: '' };

function Form({ addContact, contacts }) {
    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts]);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (form.fullname === "" || form.phone_number === "") {
            return false;
        }
        addContact([...contacts, form]); //yeni arraylerin eklenmesini saglar, surekli sifirlamaz

    }

    return (
        <form >
            <div><input name='fullname' value={form.fullname} placeholder='Full Name' onChange={onChangeInput}></input></div>
            <div><input name='phone_number' value={form.phone_number} placeholder='Phone Number' onChange={onChangeInput}></input></div>
            <div className='btn'><button onClick={onSubmit}>Add</button></div>
        </form >
    )
}

export default Form