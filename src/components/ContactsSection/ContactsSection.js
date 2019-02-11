import React from 'react';
import './ContactsSection.css';
import SectionTitle from "../UI/SectionTitle/SectionTitle";


const ContactsSection = props => {
    const contacts = props.contacts ? props.contacts : []
    return (
        <div id={'contacts'}>

                <div className="ContactsSection" id={'contacts'}>
                    <div className="ContactsData">
                        <SectionTitle title={'Контакты'}/>
                        <div className="ContactItem">
                            <i className="fas fa-map-marker-alt"/>
                            <p>ул. Байтик Баатыра 70, офис 401</p>
                        </div>
                        <div className="ContactItem">
                            <i className="fas fa-envelope"/>
                            <p>neobiskg@gmail.com</p>
                        </div>
                        <div className="ContactItem">
                            <i className="fas fa-phone"/>
                            <div>
                                <p>+996(550)225310 - Sanira</p>
                                <p>+996(773)090203 - Begimai</p>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
}

export default ContactsSection;