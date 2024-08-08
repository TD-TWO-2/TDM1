import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./Demo.css";
import TextInput from "../../Components/TextInput";
import Button from "../../Components/Button";
import TextArea from "../../Components/TextArea";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const Demo = () => {
  const [value, setValue] = useState();
  return (
    <>
      <Navbar />
      <div className="m-5" />
      <div className="container">
        <div className="row">
          <div className="col-6 d-flexflex-column justify-content-center">
            <p
              className="poppins-medium"
              style={{ fontSize: 55, lineHeight: 1 }}
            >
              Request a<br></br>
              <span className="poppins-bold" style={{ color: "#52B0AC" }}>
            Personalized<br></br> Demo
              </span>
            </p>
            <img
              src={require("../../Images/demo.png")}
              style={{ width: 350, height: 350, objectFit: "cover",position:"relative",top:-90,zIndex:-1 }}
            />
          </div>
          <div className="col-6  d-flex flex-column justify-content-center">
            <div className="m-3" />
            <div className="d-flex align-items-center" style={{ gap: 45 }}>
              <span style={{ whiteSpace: "pre" }}>Your Name</span>
              <TextInput placeHolder="Enter Name" backgroundColor={"#F4F4F4"} />
            </div>
            <div className="m-2" />
            <div className="d-flex align-items-center" style={{ gap: 15 }}>
              <span style={{ whiteSpace: "pre" }}>Phone Number</span>
              {/* <TextInput placeHolder="Enter Name" backgroundColor={"#F4F4F4"} /> */}
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                className="form-control TextInput px-0  custom-phone-input"
              />
            </div>
            <div className="m-2" />
            <div className="d-flex align-items-center" style={{ gap: 45 }}>
              <span style={{ whiteSpace: "pre" }}>Your Email</span>
              <TextInput
                placeHolder="your@gmail.com"
                backgroundColor={"#F4F4F4"}
              />
            </div>
            <div className="m-2" />
            <div className="d-flex align-items-center" style={{ gap: 65 }}>
              <span style={{ whiteSpace: "pre" }}>Subject</span>
              <TextInput placeHolder="Subject" backgroundColor={"#F4F4F4"} />
            </div>
            <div className="m-2" />
            <div className="d-flex align-items-center" style={{ gap: 55 }}>
              <span style={{ whiteSpace: "pre" }}>Message</span>
              <TextArea
                placeHolder="Enter Message"
                backgroundColor={"#F4F4F4"}
              />
            </div>
            <div className="m-2" />
            <div className="d-flex align-items-center" style={{ gap: 116 }}>
              <span style={{ whiteSpace: "pre" }}></span>
              <Button btnTitle={"Submit"} />
            </div>

            <div className="m-4"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Demo;
