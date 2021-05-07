import React, { Component } from 'react';
import styles from './Searchbar.module.scss';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  // метод записи в state ввода запроса в инпут

  handleChange = event => {
    const { value } = event.target;
    this.setState({ query: value });
  };

  // метод при submit на кнопке формы

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;

    this.props.onSubmit(query);
    this.reset();
  };

  // метод для сброса параметра query в state

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            value={query}
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
