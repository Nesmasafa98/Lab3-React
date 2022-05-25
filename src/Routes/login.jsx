import { Component } from "react";
import App from "./../App";

class Login extends Component {
  state = {
    AdminData: {
      Name: "Nesma",
      Password: 123,
    },
    UserData: {
        Name: "User",
        Password: 123,
    },
    LogInUser: false,
    Role: "",
    txtuser: "",
    txtpass: "",
  };
  handlerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubMitHandler = (e) => {
    e.preventDefault();

    let loginObjectUser = {
      Name: this.state.txtuser,
      Pass: parseInt(this.state.txtpass),
    };

    if (
      this.state.AdminData.Name == this.state.txtuser &&
      this.state.AdminData.Password == parseInt(this.state.txtpass)
    ) {
      this.setState({
        LogInUser: true,
        Role: "Admin",
      });
    }
    else if (
        this.state.UserData.Name == this.state.txtuser &&
        this.state.UserData.Password == parseInt(this.state.txtpass)
      ) {
        this.setState({
          LogInUser: true,
          Role: "User",
        });
      }
  };
  render() {
    if (!this.state.LogInUser) {
      return (
        <form  className="m-5">
          <span>Username</span>
          <input
            className="form form-control"
            type="text"
            value={this.state.txtuser}
            name="txtuser"
            onChange={this.handlerInput}
          />
          <span>Password</span>
          <input
            type="number"
            className="form form-control"
            value={this.state.txtpass}
            name="txtpass"
            onChange={this.handlerInput}
          />
          <input type={"submit"} value="Log In" className="btn btn-primary" onClick={(e)=>this.onSubMitHandler(e)}/>
        </form>
      );
    } else {
      return <App Role={this.state.Role}/>;
    }
  }
}

export default Login;
