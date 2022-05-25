import React from "react";
class ProductAdd extends React.Component
{
    state = {
        _id: "",
        _Name: "",
        _Price: "",
        _Quantity: "",
        _Desc: "",
        _Img: "",
      };

      handlerInput = (eventObject) => {
        this.setState({
          [eventObject.target.name]:eventObject.target.value
        })
      };

      render() {
        return (
          <>
            <div className="form-group m-5">
                <label>ID</label>
                <input
                    type={"text"}
                    className="form-control"
                    value={this.state._id}
                    name="_id"
                    onChange={this.handlerInput}
                />
            </div>
            <div className="form-group m-5">
                <label>Name</label>
                <input
                    type={"text"}
                    className="form-control"
                    value={this.state._Name}
                    name="_Name"
                    onChange={this.handlerInput}
                />
            </div>
            <div className="form-group m-5">
                <label>Price</label>
                <input
                    type={"number"}
                    className="form-control"
                    value={this.state._Price}
                    name="_Price"
                    onChange={this.handlerInput}
                />
            </div>
            <div className="form-group m-5">
                <label>Quantity</label>
                <input
                    type={"number"}
                    className="form-control"
                    value={this.state._Quantity}
                    name="_Quantity"
                    onChange={this.handlerInput}
                />
            </div>
            <div className="form-group m-5">
                <label>Description</label>
                <input
                    type={"text"}
                    className="form-control"
                    value={this.state._Desc}
                    name="_Desc"
                    onChange={this.handlerInput}
                />
            </div>
            <div className="form-group m-5">
                <label>Image</label>
                <input
                    type={"text"}
                    className="form-control"
                    value={this.state._Img}
                    name="_Img"
                    onChange={this.handlerInput}
                />
            </div>
            <input type={"button"} value="Add Product" className="btn btn-primary m-5" 
                onClick={() => {this.props.AddHandlerRef(
                    { id: this.state._id, 
                        name:this.state._Name, 
                        price:this.state._Price,  
                        quantity:this.state._Quantity, 
                        productDesc:this.state._Desc, 
                        productImg:this.state._Img
                    }
                        );
                    this.props.history.push("/");
                    }}
            />
          </>
        );
      }
}

export default ProductAdd;