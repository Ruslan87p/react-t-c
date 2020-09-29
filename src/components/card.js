import React from 'react';

class Card extends React.Component {
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
    );
  }
}

export default Card;
