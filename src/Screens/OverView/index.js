import React from "react";
import { Col, Row } from "react-bootstrap";
import { MdPersonOutline } from "react-icons/md";
import { PiFrameCornersLight } from "react-icons/pi";
import { RiExchangeDollarLine } from "react-icons/ri";
import BookingCalendar from "../../Components/Calender";
import Chart from "../../Components/Chart";
import SidebarSkeleton from "../../Components/SidebarSkeleton";
import StatCard from "../../Components/StatCard";
import classes from "./Overview.module.css";
function Overview() {
  return (
    <SidebarSkeleton>
      <Row>
        <Col xl={6}>
          <Row>
            <Col xl={12}>
              <div className={classes.welcomeDiv}>
                <p>Welcome</p>
              </div>
            </Col>
            <Col xl={4}>
              <StatCard
                type="first"
                icon={<MdPersonOutline color={"#9b4673"} />} // Much darker shade of #e589bb
              />
            </Col>
            <Col xl={4}>
              <StatCard
                type="second"
                icon={<PiFrameCornersLight color={"#3a7d5d"} />} // Much darker shade of #6cbfa0
              />
            </Col>
            <Col xl={4}>
              <StatCard
                type="third"
                icon={<RiExchangeDollarLine color={"#b5a564"} />} // Much darker shade of #e5db99
              />
            </Col>
          </Row>
        </Col>
        <Col xl={6}>
          <div className={classes.calender}>
            <BookingCalendar />
          </div>
        </Col>

        <Col xl={12}>
          <div className={classes.chartDiv}>
            <Chart />
          </div>
        </Col>
      </Row>
    </SidebarSkeleton>
  );
}

export default Overview;
