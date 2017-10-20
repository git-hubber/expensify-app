import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends Component {
  _onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Add Expenses</h1>
        <ExpenseForm
          onSubmit={this._onSubmit}
        />
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
