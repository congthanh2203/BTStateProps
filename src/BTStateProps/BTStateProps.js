import React, { Component } from "react";
import danhSachMatKinh from "./data.json";
import MauThuKinh from "./MauThuKinh";

export default class BTStateProps extends Component {
  state = {
    matKinh: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  thayDoiMatKinh = (matKinh) => {
    this.setState({
      matKinh,
    });
  };

  renderDanhSachMatKinh = () => {
    return danhSachMatKinh.map((matKinh, index) => {
      return (
        <img
          key={index}
          onClick={() => {
            this.thayDoiMatKinh(matKinh);
          }}
          style={{
            width: "10%",
            border: "solid 1px black",
            padding: 10,
            margin: 40,
            cursor: "pointer",
          }}
          src={matKinh.url}
        ></img>
      );
    });
  };

  render() {
    return (
      <div
        className="card text-left"
        style={{
          backgroundImage: "url(./img/background.jpg)",
          width: "100%",
          height: "100%",
          position: "fixed",
          backgroundSize: "cover",
          backgroundColor: "#0000008c",
        }}
      >
        <div className="container">
          <h1
            style={{
              backgroundColor: "black",
              color: "white",
              padding: 30,
              opacity: 0.5,
              margin: 0,
            }}
          >
            TRY GLASSES APP ONLINE
          </h1>
          <MauThuKinh matKinh={this.state.matKinh} />
          <div
            className="container text-center"
            style={{ backgroundColor: "white", margin: 20 }}
          >
            {this.renderDanhSachMatKinh()}
          </div>
        </div>
      </div>
    );
  }
}
