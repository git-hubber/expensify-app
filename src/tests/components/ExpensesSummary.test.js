import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should correctly render with no expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render with 2 expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[expenses[0], expenses[1]]} />);
  expect(wrapper).toMatchSnapshot();
});
