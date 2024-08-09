import React from "react";
import Navbar from "../../Components/Navbar";
import "./Home.css";
import LogoSlider from "../../Components/LogoSlider";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  const cardsData = [
    {
      image: require("../../Images/moto.png"),
      title: "MOTO",
      text: "To Innovate and Provide cutting edge solutions in ever changing work dynamics",
      hoverText:
        "Our motto is to provide such solutions which are cutting edge and constantly changing in the fast paced work dynamics. By constantly adopting to the ever changing work scenarios and upgrading our services our clients will always be one step ahead in overcoming day to day challenges which in turn will help in maintaining optimal work efficiency.",
    },
    {
      image: require("../../Images/mission.png"),
      title: "Mission",
      text: "To Innovate and Provide cutting edge solutions in ever changing work dynamics",
      hoverText:
        "our mission is to provide cutting edge and state of the art enterprise management software to all types of industrial and service based clients, no matter what is the size of their work force and operational budget restrictions this will help small business grow and large businesses maintain their optimal performance and growth",
    },
    {
      image: require("../../Images/vision.png"),
      title: "Vision",
      text: "To Innovate and Provide cutting edge solutions in ever changing work dynamics",
      hoverText:
        "our vision is to innovate newer ways and methods which will in turn be Trend Setters in enterprise management software. By constantly evolving and adopting to newer work challenges and scenarios we will make sure that our valued cliental are always one step ahead in current fast paced work enviroment",
    },
  ];
  const servicesData = [
    {
      image: require("../../Images/card5.png"),
      title: "Performance Management",
      text: "To optimize productivity and growth through comprehensive evaluation, feedback, and goal alignment",
    },
    {
      image: require("../../Images/card2.png"),
      title: "Payroll Management",
      text: "Efficient payroll solutions for smooth management of your workforce's Remuneration needs.",
    },
    {
      image: require("../../Images/card4.png"),
      title: "Adherence Management",
      text: "Providing effective strategies to ensure strict adherence for optimal organizational performance.",
    },
    {
      image: require("../../Images/card6.png"),
      title: "Mobile Application",
      text: "Empower your team with on-the-go access and productivity through our mobile application.",
    },
    {
      image: require("../../Images/card3.png"),
      title: "Notice Management",
      text: "Effortlessly manage and distribute important notices, keeping your team informed and on track.",
    },
    {
      image: require("../../Images/card1.png"),
      title: "Travel Management",
      text: "Effective solutions for seamless travel planning and expenses management for worldwide business travel.",
    },
  ];
  const servicesData2 = [
    {
      image: require("../../Images/c7.png"),
      title: "Detailed Employee Profile Management",
    },
    {
      image: require("../../Images/c8.png"),
      title: "Optimizing productivity With Synchronized Work force Management",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12  d-flex flex-column justify-content-center">
            <p
              className="poppins-extrabold"
              style={{ fontSize: 65, lineHeight: 1 }}
            >
              <span style={{ color: "#52B0AC" }}> We </span> specialize<br></br>
              <span style={{ color: "#52B0AC" }}>in managing</span> what matters
              <br></br> <span style={{ color: "#52B0AC" }}>to you</span>
            </p>
            <p className="poppins-medium">
              Empowering the visionaries who dare to blaze their own trail,
              crafting solutions for those who walk the entrepreneurial path.
            </p>
            <Link to="/Demo">
              <button
                className="poppins-medium px-2"
                style={{
                  border: "none",
                  borderRadius: 5,
                  padding: 5,
                  width: 100,
                }}
              >
                Demo
              </button>
            </Link>
          </div>
          <div className="col-lg-6 col-md-12 d-flex justify-content-end">
            <img
              src={require("../../Images/dashboardImage.png")}
              style={{ width: 450, height: 450 }}
            />
          </div>
        </div>
        <div className="m-5" />
        <div className="row">
          <div className="col-2 poppins-medium mt-1">
            <h1 className="">71k+</h1>
            <span>Active Member</span>
          </div>
          <div className="col-2 poppins-medium mt-1">
            <h1 className="">65k+</h1>
            <span>Success Member</span>
          </div>
          <div className="col-2 poppins-medium mt-1">
            <h1 className="">876k+</h1>
            <span>Project Completed</span>
          </div>
          <div className="col-6 poppins-bold mt-1 d-flex justify-content-center align-items-center">
            <span style={{ color: "#52B0AC", textAlign: "center" }}>
              Capture current data with our system
            </span>
          </div>
        </div>
        <div className="m-5" />
        <div className="row d-flex align-items-center">
          <span
            className="poppins-semibold"
            style={{ color: "#52B0AC", position: "relative", top: 20 }}
          >
            <u>Feature</u>
          </span>

          <div className="col-3" style={{ color: "#52B0AC" }}>
            <ul>
              <li>Monitor time entry</li>
              <li>Manage labour cost</li>
              <li>Automate payroll</li>
              <li>Manage labour cost</li>
              <li>Automate payroll</li>
              <li>Manage labour cost</li>
            </ul>
          </div>
          <div className="col-3" style={{ color: "#52B0AC" }}>
            <ul>
              <li>Monitor time entry</li>
              <li>Manage labour cost</li>
              <li>Automate payroll</li>
              <li>Manage labour cost</li>
              <li>Automate payroll</li>
              <li>Manage labour cost</li>
            </ul>
          </div>
          <div className="col-2 d-flex flex-column justify-content-center align-items-center">
            <img src={require("../../Images/motivation.png")} />
            <h3 className="poppins-medium my-2" style={{ color: "#52B0AC" }}>
              Moto
            </h3>
            <p className="poppins-regular" style={{ fontSize: 10 }}>
              To Innovate and Provide cutting edge solutions in ever changing
              work dynamics
            </p>
          </div>
          <div className="col-2 d-flex flex-column justify-content-center align-items-center">
            <img src={require("../../Images/motivation.png")} />
            <h3 className="poppins-medium my-2" style={{ color: "#52B0AC" }}>
              Mission
            </h3>
            <p className="poppins-regular" style={{ fontSize: 10 }}>
              To Innovate and Provide cutting edge solutions in ever changing
              work dynamics
            </p>
          </div>
          <div className="col-2 d-flex flex-column justify-content-center align-items-center">
            <img src={require("../../Images/motivation.png")} />
            <h3 className="poppins-medium my-2" style={{ color: "#52B0AC" }}>
              vision
            </h3>
            <p className="poppins-regular" style={{ fontSize: 10 }}>
              To Innovate and Provide cutting edge solutions in ever changing
              work dynamics
            </p>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-lg-9 mb-5">
            <p className="rubik-medium text-dark font-weight-bold">
              OUR SERVICES
            </p>
            <h1 className="marcellus-regular text-dark">
              Innovative, Customized and Flexible solutions to Grow your
              business
            </h1>
            <div className="row pt-5">
              {servicesData.map((card, index) => (
                <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                  <div className="card cardBg border-0 h-100">
                    <div className="card-body">
                      <div className="p-2" />
                      <div className="text-center">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="img-fluid"
                        />
                      </div>
                      <div className="p-2" />
                      <h5 className="card-title text-uppercase">
                        {card.title}
                      </h5>
                      <p className="card-text">{card.text}</p>
                      <div className="p-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="row">
              {servicesData2.map((card, index) => (
                <div className="col-12 mb-5" key={index}>
                  <div className="card cardBg bg-light border-0 h-100">
                    <div className="card-body bg-light">
                      <div className="p-2" />
                      <div className="text-center">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="img-fluid"
                        />
                      </div>
                      <div className="p-4" />
                      <h5
                        className="marcellus-regular text-uppercase"
                        style={{ fontSize: "28px" }}
                      >
                        {card.title}
                      </h5>
                      <div className="p-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
