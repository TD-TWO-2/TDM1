import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./RegisterNow.css";
import TextInput from "../../Components/TextInput";
import Button from "../../Components/Button";
import TextArea from "../../Components/TextArea";

const RegisterNow = () => {
  return (
    <>
      <Navbar />
      <div className="bg">
        <div className="container d-flex justify-content-center">
          <div className="contactForm my-5">
            <h1 className="mb-1 marcellus-regular">RegisterNow</h1>
            <div>
              <div className="m-3"></div>
              <TextInput placeHolder="Enter Name" label="Enter Name" backgroundColor={'#EDF1FC'}/>
              <TextInput placeHolder="Enter Email" label="Enter Email" backgroundColor={'#EDF1FC'}/>
              <TextInput placeHolder="Enter Password" label="Enter Password" backgroundColor={'#EDF1FC'}/>
              <TextInput placeHolder="Confirm Password" label="Confirm Password" backgroundColor={'#EDF1FC'}/>
              {/* <div className="d-flex flex-column flex-md-row justify-content-between gap-10">
                <TextInput placeHolder="Phone Number" label="Phone Number" backgroundColor={'#EDF1FC'} />
                <TextInput placeHolder="Enter Email" label="Enter Email" backgroundColor={'#EDF1FC'} />
              </div> */}
              {/* <TextArea placeHolder="Enter Message" label="Message" backgroundColor={'#EDF1FC'}/> */}
              <div className="m-3"/>
              <Button btnTitle={'Submit'}/>
              <div className="m-3"></div>
                <div className="d-flex justify-content-center">
              <label className="TextInputLabel roboto-medium text-center">Already have an Account <a href="#" class="pe-auto">Login</a></label>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterNow;
