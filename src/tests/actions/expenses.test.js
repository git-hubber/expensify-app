import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '1234abcd' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1234abcd'
  });
});

test('should setup edit expense action object', () => {
  const id = 'abcd1234';
  const updates = { amount: 400, note: 'some note' };
  const action = editExpense( id, updates );

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id,
    updates
  })
});

test('shoud setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  };
  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('shoud setup add expense action object with default values', () => {
  const expense = {
    id: expect.any(String),
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense
  });
});