import React from "react";
import PanelContent from "../../components/theme/panelContent";
import { Link } from "react-router-dom";
import Card from "../../components/card";

const Home = () => {
  return (
    <PanelContent headerContent title="Dashboard">
      <div className="row">
        <div className="col-lg-3 col-6">
          <div className="small-box text-bg-primary">
            <div className="inner">
              <h3>150</h3>
              <p>New Orders</p>
            </div>
            <div className="small-box-icon">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <Link
              href="/"
              className="small-box-footer link-light link-underline-opacity-0 link-underline-opacity-50-hover"
            >
              More info <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box text-bg-success">
            <div className="inner">
              <h3>
                53<sup style={{ fontSize: "20px" }}>%</sup>
              </h3>
              <p>Bounce Rate</p>
            </div>
            <div className="small-box-icon">
              <i className="fa-solid fa-signal"></i>
            </div>
            <Link
              href="/"
              className="small-box-footer link-light link-underline-opacity-0 link-underline-opacity-50-hover"
            >
              More info <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box text-bg-warning">
            <div className="inner">
              <h3>44</h3>
              <p>User Registrations</p>
            </div>
            <div className="small-box-icon">
              <i className="fa-solid fa-user"></i>
            </div>
            <Link
              href="/"
              className="small-box-footer link-light link-underline-opacity-0 link-underline-opacity-50-hover"
            >
              More info <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-6">
          <div className="small-box text-bg-danger">
            <div className="inner">
              <h3>65</h3>
              <p>Unique Visitors</p>
            </div>
            <div className="small-box-icon">
              <i className="fa-solid fa-chart-pie"></i>
            </div>
            <Link
              href="/"
              className="small-box-footer link-light link-underline-opacity-0 link-underline-opacity-50-hover"
            >
              More info <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-lg-6">
          <Card title="Card 1">ISI</Card>
        </div>
        <div className="col-lg-6 col-lg-6">
          <Card title="Card 2" />
        </div>
      </div>
    </PanelContent>
  );
};

export default Home;
