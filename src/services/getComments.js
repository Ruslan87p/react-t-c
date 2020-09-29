import React from 'react';
import Card from '../components/card';

const url = 'https://jsonplaceholder.typicode.com/comments';

class GetComments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      postData: [],
      showPosts: 20,
    };
  }

  fetchComments() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          postData: data,
          loading: false,
          showPosts: 20,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  }

  componentDidMount() {
    this.fetchComments();
  }

  showMoreItems() {
    this.setState((prev) => {
      return {
        showPosts: prev.showPosts + 20,
      };
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.state.loading || !this.state.postData[0].body ? (
              <div>
                <div className="loading">
                  <span className="dot"></span>
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <Card data={this.state} />
              </div>
            )}
          </div>
        </div>

        {this.state.showPosts < this.state.postData.length && (
          <div className="container">
            <div className="row">
              <div className="col-sm-12 d-flex justify-content-center align-items-center">
                <button
                  className="btn-custom mt-4 mb-5"
                  onClick={() => this.showMoreItems()}>
                  Show more
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default GetComments;
