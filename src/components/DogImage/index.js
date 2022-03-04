import React from 'react';

class DogImage extends React.Component {
  constructor(props) {
    super(props);

    this.fetchDog = this.fetchDog.bind(this);

    this.state = {
      dogImg: '',
    };
  }

  componentDidMount() {
    this.fetchDog();
  }

  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((result) => this.setState({ dogImg: result }));
  }

  render() {
    const { dogImg } = this.state;
    if (dogImg === '') return 'loading...';
    return (
      <div>
        <h1>Doguinhos</h1>
        <img src={ dogImg.message } alt="Random dog" />
        <p>
          <button
            type="button"
            onClick={ this.fetchDog }
          >
            New Dog
          </button>
        </p>
      </div>
    );
  }
}

export default DogImage;
