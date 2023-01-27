import { Input, Label } from './Filter.styled';

export const Filter = ({ filter, findContact }) => {
  return (
    <Label>
      Find contacts by name
      <Input name="filter" value={filter} onChange={findContact}></Input>
    </Label>
  );
};
