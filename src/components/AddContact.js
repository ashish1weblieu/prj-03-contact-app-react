import React from "react";
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "" || this.state.phone === "" || this.state.address === "" || this.state.city === "") {
      alert("ALL the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" ,phone: "",address: "",city: ""});
  };
  render() {
    return (
    <section style={{ backgroundImage: `url("https://kerrys.co.in/demo/MHMProject/assets/front/images/Mask-group.jpg")` }}>
      <div className="container padd-form" id="contact">
        <div className="row contact-bg">
          <div className="text-center">
            <h3>Contact Us</h3>
          </div>
          <div className="contact-form">
            <form className="ui form" onSubmit={this.add}>
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="field">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="phone"
                  value={this.state.phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
              </div>
              <div className="field">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={(e) => this.setState({ address: e.target.value })}
                />
              </div>
              <div className="field">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={this.state.city}
                  onChange={(e) => this.setState({ city: e.target.value })}
                />
              </div>
              <button className="ui button blue">Add</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
}
export default AddContact;
