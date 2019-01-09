import React, { Component } from 'react';
import classNames from 'classnames';

import './Entry.scss';
import { formatValueToCurrency } from '../helper';

class Entry extends Component<EntryProps, {}> {
  toggleProductReservation:Proxy = () => {
    this.props.toggleProductReservation(this.props.entryId);
  };

  toggleProductVisibility:Proxy = () => {
    this.props.toggleProductVisibility(this.props.entryId);
  };

  render() {
    const classes: string = classNames('entry', {
      'entry--isReserved': this.props.isReserved,
      'entry--isOpen': this.props.isOpen
    });

    return (
      <div className={classes}>
        <div className="entry__glance" onClick={this.toggleProductVisibility}>
          <span>{this.props.title}</span>
          <span>{formatValueToCurrency(this.props.cost)}</span>
          <span>{this.props.isOpen ? '-' : '+'}</span>
        </div>
        <div className="entry__details">
          <a href={this.props.link}>zum Produkt</a>
          <span onClick={this.toggleProductReservation}>{this.props.isReserved ? 'nicht mehr reservieren' : 'reservieren'}</span>
        </div>
      </div>
    );
  }
}

export default Entry;
