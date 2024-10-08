import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./Contactus.css";
import TextInput from "../../Components/TextInput";
import Button from "../../Components/Button";
import TextArea from "../../Components/TextArea";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const Contactus = () => {
  const [value, setValue] = useState();
  return (
    <>
      <Navbar />
      <div className="m-5" />
      <div className="container">
        <div className="row">
          <div className="col-6  d-flex flex-column justify-content-center">
            <p
              className="poppins-medium"
              style={{ fontSize: 65, lineHeight: 1 }}
            >
              Get In{" "}
              <span className="poppins-bold" style={{ color: "#52B0AC" }}>
                Touch
              </span>
            </p>
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
          <div className="col-6 d-flex justify-content-center">
            <img
              src={require("../../Images/contactvector.png")}
              style={{ width: 450, height: 450, objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contactus;
