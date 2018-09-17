import React, { Component } from "react";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import { Link} from "react-router-dom";
import { Pp , ProfileImg , EditButton ,createButton } from "./ProfilePage.style.js";
import photo from "../../assets/profilePhotos/HELLOMATE.jpg";
import edit from "../../assets/images/editt.png";
import createGroup from "../../assets/images/create.png";

class ProfilePage extends Component {

  render() {
    return (
      <React.Fragment>
        <Header/>
        <ProfileImg src={photo}/>
          <Link to="/edit">
          <EditButton img={edit} text="Edit" />
          </Link>
          <Pp>Username :  {this.props.users[0].username}</Pp>
          <Pp>Bio: {this.props.users[0].bio}</Pp>
          <Pp> DOB:{this.props.users[0].yob}</Pp>
          <Pp>Groups:{this.props.users[0].groups}</Pp>
          <Link to="/create">
          <createButton img={createGroup} text="Create" />
          </Link>
      <Footer />
      </React.Fragment>
    );
  }
  }

  export default ProfilePage;
