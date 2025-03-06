import React from "react";
import Navbar from "./components/Navbar";
import FlushAccordion from "./components/Accordion";
import GT3Form from "./components/GT3Form";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import 'bootstrap/dist/css/bootstrap.min.css';


import gt3Image1 from "./assets/Engine.jpg";
import gt3Image2 from "./assets/Interior.jpg";
import gt3Image3 from "./assets/Speed.jpg";

function ComponentAssignment() {
  return (
    <div className="app-container">
      <Navbar />
      <FlushAccordion />
      <GT3Form />

      <h1 style={{ marginLeft: "20px" }}>Porsche 911 GT3 Touring</h1>
      <Carousel />
      <div className="cards-container">
        <Card image={gt3Image1} title="Engine" description="The heart of the GT3 Touring is a naturally aspirated 4.0L flat-six engine, revving up to 9,000 RPM and producing 502 horsepower. Paired with a six-speed manual or PDK transmission, it delivers an exhilarating driving experience with razor-sharp throttle response and track-inspired performance." />
        <Card image={gt3Image2} title="Interior" description="The Touring package enhances the GT3's interior with premium leather upholstery, replacing Alcantara for a more refined feel. The driver-focused cockpit features carbon fiber accents, intuitive controls, and supportive sport seats, ensuring a perfect balance between luxury and performance." />
        <Card image={gt3Image3} title="Speedometer" description="The Porsche GT3 Touring’s analog-meets-digital instrument cluster keeps the driver connected to every detail. A centrally located tachometer dominates the display, while digital readouts provide real-time telemetry, speed, and performance metrics, ensuring precision at every turn." />
      </div>
    </div>
  );
}

export default ComponentAssignment;
