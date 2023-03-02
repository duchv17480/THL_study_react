import React, { Component } from "react";
import phoneService from "../services/phoneService";

class CreateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: "",
      color: "",
      brand: "",
      price: "",
    };
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add</h3>;
    } else {
      return <h3 className="text-center">Update</h3>;
    }
  }

  componentDidMount() {
      if(this.state.id === '_add') {
          return
      }else {
          phoneService.getPhoneById(this.state.id).then((res) => {
              let phone = res.data.data;
              this.setState({name: phone.name,
                            color: phone.color,
                            brand: phone.brand,
                            price: phone.price
            })
          })
      }
  }

  saveOrUpdate = (p) => {
      p.preventDefault();
      let phone = {name : this.state.name, color : this.state.color, brand: this.state.brand, price: this.state.price}
      if(this.state.id === '_add') {
          phoneService.createPhone(phone).then(res => {
              this.props.history.push('/phone');
          });
      }else{
          phoneService.updatePhone(phone, this.state.id).then( res => {
              this.props.history.push('/phone')
          })
      }
  }

  changeName = (event) => {
    this.setState({ name: event.target.value });
  };

  changeColor = (event) => {
    this.setState({ color: event.target.value });
  };

  changeBrand = (event) => {
    this.setState({ brand: event.target.value });
  };

  changePrice = (event) => {
    this.setState({ price: event.target.value });
  };
  cancel() {
      this.props.history.push('/phone')
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                {this.getTitle}
                <form>
                  <div className="form-group">
                    <label>Name: </label>
                    <input
                      name="name"
                      className="form-control"
                      onChange={this.changeName}
                      value={this.state.name}
                    />
                  </div>
                  <div className="form-group">
                    <label>Color: </label>
                    <input
                      name="color"
                      className="form-control"
                      onChange={this.changeColor}
                      value={this.state.color}
                    />
                  </div>
                  <div className="form-group">
                    <label>Brand: </label>
                    <input
                      name="brand"
                      className="form-control"
                      onChange={this.changeBrand}
                      value={this.state.brand}
                    />
                  </div>
                  <div className="form-group">
                    <label>Price: </label>
                    <input
                      name="price"
                      className="form-control"
                      onChange={this.changePrice}
                      value={this.state.price}
                    />
                  </div>
                  <button className="btn btn-success" onClick={this.saveOrUpdate}>Save</button>
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                    onClick={this.cancel.bind(this)}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateComponent;
