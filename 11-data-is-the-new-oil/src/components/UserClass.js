import React from "react";
import { useActionData } from "react-router-dom";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state =  {
            // count: 0,
            // count2: 2,
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
        };
       console.log(this.props.name + "Child Constructor");
    }
    
    // async componentDidMount() {
    //     console.log(this.props.name + "Child Component Did Mount");
    //     // API call

    //     const data = await fetch("https://api.github.com/users/michaelchoudhury");
    //     const json = await data.json();

    //     this.setState ({
    //         userInfo: json,
    //     });

    //     console.log(json);
    // }

    componentDidMount() {
        this.timer = setInterval(() => {
            console.log("NAMASTE REACT OP");
        }, 1000);
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log("Componenet Will Unmount");
        clearInterval(this.timer);
    }

    render() {
       // const { location, name } = this.props;
        // const {count} = this.state;

       console.log(this.props.name + "Child Render");

       const { login, url, avatar_url} = this.state.userInfo;

        // debugger;

        return(
        <div className="user-card">
            {/* <h1>Count: {count}</h1> */}
            {/* <h1>Count2: {this.state.count2}</h1> */}
            {/* <button onClick={() => {
                this.setState({
                    count: this.state.count+1,
                })
            }}>Count Increase</button> */}
            <img src={avatar_url} />
            <h2>Name: {login}</h2>
            <h3>Location: {url}</h3>
            <h4>Contact: @michaelchoudhury</h4>
        </div>
        );
    };   
}; 

export default UserClass;