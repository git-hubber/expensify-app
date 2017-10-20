import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

import uuid from 'uuid';

const now = moment();

class ExpenseForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.expense ? props.expense.id : uuid(),
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? props.expense.amount : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error:  "",
      buttonText: props.expense ? "Edit Expense" : "Add Expense"
    };
  }

  _onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  _onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }

  _onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  _onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  }

  _onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  }

  _onFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: "Please be sure to provide the description and amount" }));
    } else {
      this.setState(() => ({ error: "" }));

      const expense = {
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10),// * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      }
      this.props.onSubmit(expense);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this._onFormSubmit}>
        {this.state.error && <p style={{color: 'red'}}>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this._onDescriptionChange}
          />
          <input
            type="text"
            placeholder="amount"
            value={this.state.amount}
            onChange={this._onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this._onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this._onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this._onNoteChange}
          >
          </textarea>
          <button>{this.state.buttonText}</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm;