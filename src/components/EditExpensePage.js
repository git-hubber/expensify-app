import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends Component {
  _onSubmit = (expense) => {
    this.props.editExpense(expense.id, expense);
    this.props.history.push("/");
  };

  _onRemove = () => {
    this.props.startRemoveExpense( { id: this.props.expense.id } );
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h1>Edit Expense</h1>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this._onSubmit}
        />
        <button onClick={this._onRemove}>
          Remove
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ expenses }, props) => ({
  expense: expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
