import { IInputProps } from './Input.component';

const base: IInputProps = {
  id: 'text',
  value: 'Jhon Doe',
  placeholder: 'input your full name',
  onChange: 'test',
  type: 'text',
};

export const mockInputProps = {
  base,
};
