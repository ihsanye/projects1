import { useState } from 'react'

function Form({ addContact, contacts }) {
    const [form, setForm] = useState({ fullname: '', phone_number: '' });
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (form.fullname === "" || form.phone_number === "") {
            return false;
        }
        addContact([...contacts, form]); //yeni arraylerin eklenmesini saglar, surekli sifirlamaz
        setForm({ fullname: '', phone_number: '' }); //input form icini temizler
    }

    return (
        <form >
            <div><input name='fullname' value={form.fullname} placeholder='Full Name' onChange={onChangeInput}></input></div>
            <div><input name='phone_number' value={form.phone_number} placeholder='Phone Number' onChange={onChangeInput}></input></div>
            <button onClick={onSubmit}>Add</button>
        </form >
    )
}

export default Form