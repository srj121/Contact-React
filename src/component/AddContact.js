import {Component} from "react";
class AddContact extends Component {
    state = {
        name: "",
        email: "",
    };
    add =(e) =>{
        this.props.addContactHandler(this.state);
        this.setState({name: "",email: ""});
        e.preventDefault();
        if(this.state.name === "" && this.state.email === ""){
            alert("All the fields are mandatory!");
            return
        }
        console.log(this.state);
    }

    render() {
        return(
        <div className="ui main">
            <h2>Add contact</h2>
            <form className="ui from" onSubmit={this.add}>
                <div className="filed">
                    <label>Name</label>
                    <input type="text"
                           name="name"
                           placeholder="Name"
                           value={this.state.name}
                           onChange={ (e) => this.setState({name: e.target.value})} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(e) => this.setState({email: e.target.value})}/>
                </div>
                <button
                   className="ui button blue">Add</button>
            </form>
        </div>
    );
    }
}
export default AddContact