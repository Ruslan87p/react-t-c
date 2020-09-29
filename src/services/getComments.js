import React from 'react';

const url = 'https://jsonplaceholder.typicode.com/comments';

class GetComments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: [],
      showItems: 20,
    };

    // this.showMoreItems = this.showMoreItems.bind(this);
  }

  async componentDidMount() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          user: data,
          loading: true,
          showItems: 20,
        });
      });
  }

  showMoreItems() {
    this.setState((prev) => {
      return {
        showItems: prev.showItems + 20,
      };
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {this.state.user
                .slice(0, this.state.showItems)
                .map((item, index) => {
                  return (
                    <div className="post" key={item.id}>
                      <div className="d-flex flex-column justify-content-between">
                        <small className="id">Post Id {index + 1}</small>
                        <div className="">
                          <h5>{item.name}</h5>
                          <p>{item.body}</p>
                          <small>{item.email}</small>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {this.state.showItems < this.state.user.length && (
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
