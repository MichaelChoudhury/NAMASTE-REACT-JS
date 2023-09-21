import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props) {
        super(props);

        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
    }

    render() {
        console.log("Parent Render");
        return(
            <div>
                <h1>About Class Component</h1>
                <div>
                    LoggedIn User: 
                    <UserContext.Consumer>
                        {({loggedInUser}) => (
                        <h1 className="text-xl font-bold">{loggedInUser}</h1>)}
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste React Web Series</h2>
                {/* <User name={"Michael Choudhury (function)"}/> */}
    
                <UserClass name={"First"} location={"Brisbane Class"} />
                {/* <UserClass name={"Second"} location={"Austin Class"} /> */}
            </div>
        );
    }
}



// const About = () => {
//     return(
//         <div>
//             <h1>About Page</h1>
//             <h2>This is Namaste React Web Series</h2>
//             {/* <User name={"Michael Choudhury (function)"}/> */}

//             <UserClass name={"Michael Choudhury (class)"} location={"Brisbane Class"} />
//         </div>
//     );
// };

export default About;