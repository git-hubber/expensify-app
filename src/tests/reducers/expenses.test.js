import expensesReducer from '../../reducers/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add expense to current state', () => {
  const currentState = [
    {
      note: 'Phone',
      amount: 10,
      createdAt: -10,
      description: 'Phone description',
      id: '123',
    },
  ];
  const expense = {
    note: 'Rent',
    amount: 100,
    createdAt: 0,
    description: 'Some description',
    id: '1234',
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense,
  };
  const state = expensesReducer(currentState, action);
  expect(state).toEqual([...currentState, expense]);
});

test('should remove expense from current state', () => {
  const currentState = [
    {
      note: 'Phone',
      amount: 10,
      createdAt: -10,
      description: 'Phone description',
      id: '123',
    },
    {
      note: 'Rent',
      amount: 100,
      createdAt: 0,
      description: 'Some description',
      id: '1234',
    },
  ];
  const id = '123';
  const action = {
    type: 'REMOVE_EXPENSE',
    id,
  };
  const state = expensesReducer(currentState, action);
  expect(state).toEqual([currentState[1]]);
});

test('should not remove expenses if id not found', () => {
  const currentState = [
    {
      note: 'Phone',
      amount: 10,
      createdAt: -10,
      description: 'Phone description',
      id: '123',
    },
    {
      note: 'Rent',
      amount: 100,
      createdAt: 0,
      description: 'Some description',
      id: '1234',
    },
  ];
  const id = '12345';
  const action = {
    type: 'REMOVE_EXPENSE',
    id,
  };
  const state = expensesReducer(currentState, action);
  expect(state).toEqual(currentState);
});

test('should edit expense', () => {
  const currentState = [
    {
      note: 'Phone',
      amount: 10,
      createdAt: -10,
      description: 'Phone description',
      id: '123',
    },
    {
      note: 'Rent',
      amount: 100,
      createdAt: 0,
      description: 'Some description',
      id: '1234',
    },
  ];
  const updates = {
    amount: 100,
  };
  const id = '123';
  const action = {
    type: 'EDIT_EXPENSE',
    id,
    updates,
  };
  const updatedExpense = {
    ...currentState[0],
    ...updates,
  };
  const state = expensesReducer(currentState, action);
  expect(state).toEqual([
    updatedExpense, currentState[1],
  ]);
});

test('should not edit expense if expense not found', () => {
  const currentState = [
    {
      note: 'Phone',
      amount: 10,
      createdAt: -10,
      description: 'Phone description',
      id: '123',
    },
    {
      note: 'Rent',
      amount: 100,
      createdAt: 0,
      description: 'Some description',
      id: '1234',
    },
  ];
  const updates = {
    amount: 1000,
  };
  const id = '12345';
  const action = {
    type: 'EDIT_EXPENSE',
    id,
    updates,
  };
  const state = expensesReducer(currentState, action);
  expect(state).toEqual(currentState);
});

test('should set expenses', () => {
  const currentState = [
    {
      note: 'Phone',
      amount: 10,
      createdAt: -10,
      description: 'Phone description',
      id: '123',
    },
    {
      note: 'Rent',
      amount: 100,
      createdAt: 0,
      description: 'Some description',
      id: '1234',
    },
  ];
  const newExpenses = [
    {
      note: 'Electricity Bill',
      amount: 120,
      createdAt: 5000,
      description: 'Electricity description',
      id: 'elec123',
    },
    {
      note: 'Gas Bill',
      amount: 100,
      createdAt: 10000,
      description: 'Gas description',
      id: 'gas1234',
    },
  ];

  const action = {
    type: 'SET_EXPENSES',
    expenses: newExpenses,
  };
  const state = expensesReducer(currentState, action);
  expect(state).toEqual(newExpenses);
});
