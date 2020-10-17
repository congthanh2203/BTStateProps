import React, { Component } from "react";

export default class MauThuKinh extends Component {
  render() {
    return (
      <>
        <div className="" style={{ position: "relative" }}>
          <img
            style={{ width: "20%", marginTop: 100, marginRight: 200 }}
            src="./img/model.jpg"
          ></img>

          <img
            style={{ width: "20%", marginTop: 100, marginLeft: 200 }}
            src="./img/model.jpg"
          ></img>
          <div
            className="display-1"
            style={{
              width: "20%",
              position: "absolute",
              bottom: 0,
              left: 336,
              backgroundColor: "#ffa50069",
            }}
          >
            <h2
              style={{
                color: "blue",
                textAlign: "left",
                padding: 5,
                margin: 2,
              }}
            >
              {this.props.matKinh.name}
            </h2>
            <p
              style={{
                color: "white",
                textAlign: "left",
                fontSize: 20,
                fontWeight: 500,
                padding: 5,
                margin: 3,
              }}
            >
              {this.props.matKinh.desc}
            </p>
          </div>
          <div
            className=""
            style={{
              position: "absolute",
              top: 215,
              left: 318,
              background: "transparent",
            }}
          >
            <img
              className=""
              style={{ width: "50%" }}
              src={this.props.matKinh.url}
            ></img>
          </div>
        </div>
      </>
    );
  }
}
