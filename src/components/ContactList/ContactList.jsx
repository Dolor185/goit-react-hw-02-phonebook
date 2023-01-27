import { List, Item, Button } from './ContactList.styled';

export const ContactList = ({ contacts, filter, onDelete }) => {
  const filteredList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredList ? (
    <List>
      {filteredList.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <Button
              onClick={() => {
                onDelete(id);
              }}
            >
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  ) : (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <Button
              onClick={() => {
                onDelete(id);
              }}
            >
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
