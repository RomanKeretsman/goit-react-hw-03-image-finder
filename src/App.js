import React from 'react';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button';
import Modal from './components/Modal';

import imagesApi from './services/imagesApi';

import './App.scss';

class App extends React.Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
    isLoading: false,
    showModal: false,
    largeImageUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (searchQuery !== prevState.searchQuery) {
      this.fetchImages();
    }
  }

  handleQueryChange = query => {
    this.setState({ images: [], searchQuery: query, currentPage: 1 });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery: searchQuery, currentPage: currentPage };

    this.setState({ isLoading: true });

    imagesApi
      .fetchGetImages(options)
      .then(({ hits }) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .then(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => {
        alert('Error occured, please try again');
        console.log(error);
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  openModal = event => {
    const { target } = event;
    if (target.nodeName === 'IMG') {
      this.setState({ showModal: true, largeImageUrl: target.dataset.source });
    }
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImageUrl: '' });
  };

  render() {
    const { images, isLoading, showModal, largeImageUrl } = this.state;
    const existImagesToShow = images.length > 0;

    return (
      <div className='App'>
        <Searchbar onSubmit={this.handleQueryChange} />
        <ImageGallery images={images} onClick={this.openModal} />
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={largeImageUrl} alt="" />
          </Modal>
        )}
        {isLoading && <Loader />}
        {existImagesToShow && !isLoading && (
          <Button onClick={this.fetchImages} />
        )}
      </div>
    );
  }
}

export default App;
