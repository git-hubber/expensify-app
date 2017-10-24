import selectExpensesTotal from '../../selectors/expenses-total';

import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test('should return total if only ONE expenses', () => {
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(expenses[0].amount);
});

test('should return total if multiples expenses', () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(114195);
});
