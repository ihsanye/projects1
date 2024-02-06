import { useState, useEffect } from 'react'
import "./styles.css"
import List from '../List'
import Form from '../Form'

function Contacts() {
    const [contacts, setContacts] = useState([
        { fullname: "ihs", phone_number: '505' },
        { fullname: "sefa", phone_number: '506' },
        { fullname: "brky", phone_number: '507' },
        { fullname: "ven", phone_number: '508' },
        { fullname: "must", phone_number: '509' },

    ]);
    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
        <div id='container'>
            <h2>Contacts</h2>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts