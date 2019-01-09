import React, { Component } from 'react';
import Category from './Category';
import { toggleKeyInObjectArray } from '../helper';

class Wshlst extends Component<WshlstDetails, WshlstDetails> {
  componentDidMount() {
    this.setState(this.props);
  }

  setActiveCategory: setActiveCategory = cateogryId => {
    const categories = this.state.categories;

    const newCategories:CategoryDetails[] = categories.map(category => {
      category.categoryId === cateogryId
        ? (category.isActive = true)
        : (category.isActive = false);

      return category;  
    });

    this.setState({categories: newCategories});
  };

  toggleProductReservation: toggleEntry = entryId => {
    const entries = this.state.entries;

    this.setState({
      entries: toggleKeyInObjectArray('isReserved', entryId, entries)
    });
  };

  toggleProductVisibility: toggleEntry = entryId => {
    const entries = this.state.entries;

    this.setState({
      entries: toggleKeyInObjectArray('isOpen', entryId, entries) 
    });
  };

  filterEntriesByCategory: filterEntriesByCategory = (entries, id) => {
    const filteredEntries: EntryDetails[] = entries.filter(entry => {
      return entry.categoryId === id;
    });
    return filteredEntries;
  };

  render() {
    const { entries, categories } = this.props;
    return (
      <div>
        {categories.map((category: CategoryDetails, index: number) => (
          <Category
            toggleProductReservation={this.toggleProductReservation}
            toggleProductVisibility={this.toggleProductVisibility}
            setActiveCategory={this.setActiveCategory}
            {...category}
            entries={this.filterEntriesByCategory(entries, category.categoryId)}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default Wshlst;
