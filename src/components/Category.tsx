import React, { Component } from 'react';
import classNames from 'classnames';
import Entry from './Entry';

class Category extends Component<CategoryProps, {}> {
  setActiveCategory:Proxy = () => {
    this.props.setActiveCategory(this.props.categoryId);
  }

  render() {
    const classes = classNames('category', {
      'category--active': this.props.isActive
    });

    return (
      <div className={classes}>
        <div className="category__tab" onClick={this.setActiveCategory}>{this.props.categoryName}</div>
        {this.props.entries.map((entry: EntryDetails, index: number) => (
          <Entry {...this.props} {...entry} key={index} />
        ))}
      </div>
    );
  }
}

export default Category;
