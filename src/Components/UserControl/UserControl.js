import React, { Component } from "react";
import { MdAccountCircle, MdExpandMore } from "react-icons/md";
import "./UserControl.css";

export class UserControl extends Component {
  render() {
    return (
      <div className="user-control">
        <div className="profile-pic">
          <MdAccountCircle />
        </div>
        <div className="user-details">
          <div className="name">Pritam Bhanji</div>
          <div className="agency">SafeChain Test Agency</div>
        </div>
        <div className="controls">
          <MdExpandMore />
        </div>
      </div>
    );
  }
}
