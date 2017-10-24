import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../actions/filters';

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null,
  }

  _onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }

  _onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

  _onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }

  _onSortChange = (e) => {
    if (e.target.value === 'amount') {
      this.props.sortByAmount();
    } else {
      this.props.sortByDate();
    }
  }

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Search expenses"
              value={this.props.filters.text}
              onChange={this._onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this._onSortChange}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this._onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this._onFocusChange}
              showClearDates
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ filters }) => ({ filters });

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
