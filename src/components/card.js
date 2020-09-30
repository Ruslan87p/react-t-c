import React from 'react';

class Card extends React.Component {
  onDelete(item) {
    this.props.onDelete(item);
  }

  render() {
    return (
      <div>
        <div className="col-lg-12">
          {this.props.data.postData
            .slice(0, this.props.data.showPosts)
            .map((item, index) => {
              return (
                <div className="post" key={item.id}>
                  <div className="d-flex flex-column justify-content-between">
                    <small className="id">Post Id {item.id}</small>
                    <div className="">
                      <h5>{item.name}</h5>
                      <p>{item.body}</p>
                      <small>{item.email}</small>
                    </div>
                    <button
                      className="btn btn btn-outline-danger w-25"
                      onClick={this.onDelete.bind(this, item)}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Card;
