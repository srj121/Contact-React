import React from "react";
import ContactCard from "./contactCard";

const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.contacts.map((contact) => {
        return (
<ContactCard contact={contact}></ContactCard>
        );
    });
    return(
        <div className="ui celled List">
            {renderContactList}
        </div>
    );
}
export default ContactList
