import React from "react";
import MaleIcon from "./SvgIcons/MaleIcon";
import FemaleIcon from "./SvgIcons/FemaleIcon";
import NumberofEmployee from "./SvgIcons/NumberofEmployee";
import PieChartEmp from "./PieChartEmp";
import BarChartEmp from "./BarChartEmp";
import StackedBarChartEmp from "./StackedBarChartEmp";
import VerticalStackedBarChart from "./VerticalStackedBarChart";
import VerticalStackedBarChartWithGradient from "./VerticalStackedBarChartWithGradient";

const TreedecDashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div class="card" style={{}}>
            <span className="poppins-medium text-center pt-2">Total Emp.</span>
            <div class="card-body mb-1">
              <div
                className=" d-flex flex-row align-items-center justify-content-end"
                style={{ gap: 20 }}
              >
                <h1 className="poppins-bold mb-0">151</h1>
                <NumberofEmployee />
              </div>
              {/* <BarChartEmp/> */}
              <div className="m-3" />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div class="card" style={{}}>
            <span className="poppins-medium text-center pt-2">Gender</span>
            <div class="card-body d-flex flex-row align-items-center justify-content-center">
              <div
                className=" d-flex flex-column align-items-center justify-content-center"
                style={{ width: "50%", gap: 5 }}
              >
                <MaleIcon />
                <div className="d-flex flex-column  align-items-center justify-content-center">
                  <span className="poppins-medium">Male</span>
                  <span className="poppins-bold">115</span>
                  <span className="poppins-medium">76.17%</span>
                </div>
              </div>
              <div
                className=" d-flex flex-column align-items-center justify-content-center"
                style={{ width: "50%", gap: 5 }}
              >
                <FemaleIcon />
                <div className="d-flex flex-column  align-items-center justify-content-center">
                  <span className="poppins-medium">Female</span>
                  <span className="poppins-bold">36</span>
                  <span className="poppins-medium">23.84%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div class="card" style={{}}>
            <span className="poppins-medium text-center pt-2">
              Ethnic Group
            </span>
            <div class="card-body d-flex flex-row align-items-center justify-content-center">
              <div
                className=" d-flex flex-column align-items-center justify-content-center"
                style={{ width: "25%", gap: 5 }}
              >
                <MaleIcon />
                <div className="d-flex flex-column  align-items-center justify-content-center">
                  <span className="poppins-medium">American</span>
                  <span className="poppins-bold">115</span>
                  <span className="poppins-medium">76.17%</span>
                </div>
              </div>
              <div
                className=" d-flex flex-column align-items-center justify-content-center"
                style={{ width: "24%", gap: 5 }}
              >
                <FemaleIcon />
                <div className="d-flex flex-column  align-items-center justify-content-center">
                  <span className="poppins-medium">Afarican</span>
                  <span className="poppins-bold">36</span>
                  <span className="poppins-medium">23.84%</span>
                </div>
              </div>
              <div
                className=" d-flex flex-column align-items-center justify-content-center"
                style={{ width: "25%", gap: 5 }}
              >
                <MaleIcon />
                <div className="d-flex flex-column  align-items-center justify-content-center">
                  <span className="poppins-medium">Europian</span>
                  <span className="poppins-bold">115</span>
                  <span className="poppins-medium">76.17%</span>
                </div>
              </div>
              <div
                className=" d-flex flex-column align-items-center justify-content-center"
                style={{ width: "24%", gap: 5 }}
              >
                <FemaleIcon />
                <div className="d-flex flex-column  align-items-center justify-content-center">
                  <span className="poppins-medium">Asian</span>
                  <span className="poppins-bold">36</span>
                  <span className="poppins-medium">23.84%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <div class="card" style={{}}>
            <span className="poppins-medium text-center pt-2">Total Days Absents</span>
            <div class="card-body mb-1">
              <div
                className=" d-flex flex-row align-items-center justify-content-end"
                style={{ gap: 20 }}
              >
                <h1 className="poppins-bold mb-0">151</h1>
                <NumberofEmployee />
              </div>
              {/* <BarChartEmp/> */}
              <div className="m-3" />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div class="card" style={{}}>
            <span className="poppins-medium text-center pt-2">Pre-Approved Absents</span>
            <div class="card-body mb-1">
              <div
                className=" d-flex flex-row align-items-center justify-content-end"
                style={{ gap: 20 }}
              >
                <h1 className="poppins-bold mb-0">151</h1>
                <NumberofEmployee />
              </div>
              {/* <BarChartEmp/> */}
              <div className="m-3" />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div class="card" style={{}}>
            <span className="poppins-medium text-center pt-2">Unschedule Days</span>
            <div class="card-body mb-1">
              <div
                className=" d-flex flex-row align-items-center justify-content-end"
                style={{ gap: 20 }}
              >
                <h1 className="poppins-bold mb-0">151</h1>
                <NumberofEmployee />
              </div>
              {/* <BarChartEmp/> */}
              <div className="m-3" />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div class="card" style={{}}>
            <span className="poppins-medium text-center pt-2">Unschedule Days</span>
            <div class="card-body mb-1">
              <div
                className=" d-flex flex-row align-items-center justify-content-end"
                style={{ gap: 20 }}
              >
                <h1 className="poppins-bold mb-0">151</h1>
                <NumberofEmployee />
              </div>
              {/* <BarChartEmp/> */}
              <div className="m-3" />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div class="card" style={{}}>
            <span className="poppins-medium text-center pt-2">Over Time</span>
            <div class="card-body mb-1">
              <div
                className=" d-flex flex-row align-items-center justify-content-end"
                style={{ gap: 20 }}>
                <h1 className="poppins-bold mb-0">151</h1>
                <NumberofEmployee />
              </div>
              {/* <BarChartEmp/> */}
              <div className="m-3" />
            </div>
          </div>
        </div>
        </div>
      <div className="row">
        <div className="col-5">
          <PieChartEmp />
        </div>
      </div>
      {/*  <BarChartEmp/>
      <StackedBarChartEmp/>
      <VerticalStackedBarChart/> */}
      <div className="row mt-5">
        <div className="col-2">
          <VerticalStackedBarChartWithGradient />
        </div>
        <div className="col-2">
          <VerticalStackedBarChartWithGradient />
        </div>
        <div className="col-2">
          <VerticalStackedBarChartWithGradient />
        </div>
        <div className="col-2">
          <VerticalStackedBarChartWithGradient />
        </div>
        <div className="col-2">
          <VerticalStackedBarChartWithGradient />
        </div>
        <div className="col-2">
          <VerticalStackedBarChartWithGradient />
        </div>
      </div>
    </div>
  );
};

export default TreedecDashboard;
