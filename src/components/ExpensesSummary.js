import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {
  const totalExpenses = props.expenses.length;
  const totalAmount = numeral(selectExpensesTotal(props.expenses))
    .format('$0,0.00');
  const word = totalExpenses === 1 ? 'expense' : 'expenses';

  return (
    <div>
      Viewing {totalExpenses} {word} totalling {totalAmount}
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpensesSummary);
