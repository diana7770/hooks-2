import styled from "styled-components";

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const DeleteButton = styled.button`
  padding: 5px 10px;
  margin-left: 20px;
  font-size: 14px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const ContactsList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map((contact) => (
      <ContactItem key={contact.id}>
        <p>
          {contact.name}: {contact.number}
        </p>
        <DeleteButton type="button" onClick={() => deleteContact(contact.id)}>
          Delete
        </DeleteButton>
      </ContactItem>
    ))}
  </ul>
);

export default ContactsList;
