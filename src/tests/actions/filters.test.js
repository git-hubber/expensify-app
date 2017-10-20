import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from '../../actions/filters';

import moment from 'moment';

test('Should generate set startdate action object with provieded date', () => {
  const startDate = moment(1000);
  const action = setStartDate(startDate);

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate
  });
});

test('Should generate set enddate action object with provieded date', () => {
  const endDate = moment(1000);
  const action = setEndDate(endDate);

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate
  });
});
///////////////////////////////////////////
test('Should generate sortByAmount action object', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('Should generate sortByDate action object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('Should generate setTextFilter action object with default data', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('Should generate setTextFilter action object with provided data', () => {
  const text = "hello world";
  const action = setTextFilter(text);

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});