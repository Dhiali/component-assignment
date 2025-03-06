import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import "../components/Accordion.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function FlushAccordion() {
    return (
    <Accordion defaultActiveKey="0" className="mt-5 p-3" flush >
        <Accordion.Item eventKey="0" className="item">
        <Accordion.Header className="accordion-header">The Porsche 911 GT3 Touring: A Purist's Dream</Accordion.Header>
        <Accordion.Body className="accordion-body">
            <p>The Porsche 911 (992) GT3 Touring is a refined version of the iconic sports car, designed for those seeking performance with understated elegance. Powered by a 4.0-litre naturally aspirated flat-six engine producing 503bhp, it offers thrilling power and a rev range up to 9,000rpm. Drivers can choose between a six-speed manual or seven-speed PDK automatic transmission. The GT3 Touring features advanced suspension and rear-wheel steering, providing exceptional handling and agility while maintaining road stability.</p>
            <p>Its design is more subtle than the standard GT3, with a sleek adaptive rear spoiler instead of a fixed wing. Inside, the cabin blends luxury and sportiness with high-quality materials and a driver-focused cockpit.</p>
            <p>The driving experience is dynamic, with precise steering and a naturally aspirated engine that rewards spirited driving. Despite its track-ready performance, the GT3 Touring offers surprising comfort, making it practical for everyday use.</p>
            <p>In conclusion, the Porsche 911 GT3 Touring delivers an exhilarating yet refined driving experience, combining the raw power of the GT3 with a more classic, understated design, making it an ideal choice for enthusiasts who value both performance and sophistication.</p>
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="item">
        <Accordion.Header className="accordion-header">About Us</Accordion.Header>
        <Accordion.Body className="accordion-body">
            <p>
            At Car Magazine, we are a team of passionate automotive enthusiasts dedicated to providing a pure driving experience for true car lovers. Our mission is to offer honest, in-depth reviews of the latest and greatest vehicles, focusing on performance, handling, and design that cater to the purist driver. We understand that for many, owning or driving a car is about much more than just getting from A to B, it’s about the thrill, the connection, and the craftsmanship. That's why we offer the unique opportunity to take each car on a test drive, giving you a chance to feel the experience for yourself before making any decisions. Whether you’re after the raw power of a performance car or the precision of a well-engineered masterpiece, we’ve got you covered. Join us on this journey and discover your next driving passion with the guidance of experts who appreciate the finer details of the road.
            </p>
        </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    );
}

export default FlushAccordion;