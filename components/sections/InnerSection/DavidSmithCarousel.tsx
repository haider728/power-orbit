'use client'

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1400,
    autoplay: {
        delay: 3200,
        disableOnInteraction: false,
        waitForTransition: true,
        reverseDirection: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
};

const eagleSlides = [
    {
        title: "Eagle-IoT | The Fleet Intelligence Hub",
        role: "TGA-Approved Service Provider",
        summary:
            "In an environment where fuel costs, driver safety, and strict regulatory standards define your bottom line, Eagle-IoT provides the answer. As a TGA-Approved Service Provider, we move beyond basic GPS to offer a comprehensive, fully compliant command center for mobile assets.\n\nThe Challenge: Eliminating fuel leakage, preventing unauthorized vehicle use, and managing the high-stakes complexity of Wasl and TGA regulatory compliance.\n\nThe Solution: A unified platform delivering real-time visibility, advanced driver behavior analytics, and automated reporting. Our status as an approved provider ensures that your data is transmitted accurately and securely to the relevant Saudi authorities.\n\n",
          
            focusTitle: "Core Capabilities: ",
        focusText:
            "",
        image: "/assets/images/team/team-details-img-1.jpg",
        capabilities: [
            { icon: "icon-pin", title: "TGA & Wasl Integration", text: "Automated and secure authority data transmission." },
            { icon: "icon-phone-call", title: "Fuel & Cost Governance", text: "Real-time tracking to reduce waste and theft." },
        ],
    },
    {
        title: "SmartSense | Connected Asset Intelligence ",
        role: " Total Environmental Governance and SFDA Compliance. ",
        summary:
            "When your operational success depends on the precise condition of your assets; not just their location, SmartSense provides the eyes on the ground. This is the intelligence layer for fixed warehouses, cold storage facilities, and high-value environmental assets.\n\nThe Challenge: Maintaining 100% cold chain stability, preventing costly pharmaceutical spoilage, and manually logging data to meet strict Saudi Food and Drug Authority standards. \n\nThe Solution: An advanced sensor-driven ecosystem providing real-time monitoring of enviornment. SmartSense automates the data-logging process, providing the auditable digital trail required for SFDA compliance and pharmaceutical integrity. \n\n ",
        focusTitle: "Core Capabilities: ",
        focusText:
            "24/7 monitoring of fixed storage environments. ",
        image: "/assets/images/team/team-1-2.jpg",
        capabilities: [
            { icon: "icon-contact", title: "SFDA-Ready Reporting:", text: " Automated temperature logs and historical data for regulatory audits. " },
            { icon: "icon-clock", title: "Real-Time Alerts:", text: "Immediate notification via SMS/Email the moment temperature or humidity deviates from the safety threshold." },
        ],
    },
    {
        title: "Integrated Mobility Apps | The Last Mile of Intelligence ",
        role: "End-to-End Operational Continuity.",
        summary:
            "Data is only valuable if it reaches the people who can act on it. Our suite of mobile applications ensures that the intelligence generated in the office is executed in the field. We bridge the gap between the dispatcher and the driver.\n\n",
        focusTitle: "Specialized mobile interfaces ",
        focusText:
            "",
        image: "/assets/images/team/team-1-3.jpg",
        capabilities: [
            { icon: "icon-graduation-cap", title: "Eagle-IoT Fleet Management App  ", text: "" },
            // { icon: "mobile-icon", title: "Driver Dispatch App", text: "" },
            { icon: "icon-link", title: "Bus Transit Apps  ", text: "" },
            { icon: "icon-link", title: "Smart Sense App", text: "" },
        ],
    },
];

export default function DavidSmithCarousel() {
    return (
        <section className="team-details" id="solutions">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-11">
                        <div className="section-title text-center sec-title-animation animation-style1" style={{ marginBottom: 50 }}>
                            <div className="section-title__tagline-box">
                                <div className="section-title__tagline-shape-1"></div>
                                <span className="section-title__tagline">Solutions</span>
                                <div className="section-title__tagline-shape-2"></div>
                            </div>
                            <h2 className="section-title__title title-animation">
                            A Unified Portfolio for Specialized  <span>&amp; Control</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <Swiper {...swiperOptions} className="team-carousel-style">
                    {eagleSlides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="team-details__left">
                                        <div className="team-details__img-box">
                                            <div className="team-details__img">
                                                <Image src={slide.image} alt={slide.title} width={500} height={560} priority />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="team-details__right">
                                        <h3 className="team-details__title">{slide.title}</h3>
                                        <p className="team-details__sub-title">{slide.role}</p>
                                        <p className="team-details__text" style={{ whiteSpace: "pre-line" }}>{slide.summary}</p>
                                        <div className="team-details__social-box" style={{ display: "block", width: "100%" }}>
                                            <p style={{ marginBottom: 12 }}>{slide.focusTitle}</p>
                                            <p className="team-details__text" style={{ marginBottom: 18 }}>{slide.focusText}</p>
                                            <div className="team-details__points-box" style={{ margin: 0, gap: 20, flexWrap: "wrap" }}>
                                                {slide.capabilities.map((item) => (
                                                    <ul
                                                        className="team-details__points list-unstyled"
                                                        key={item.title}
                                                        style={{ flex: "0 0 calc(50% - 10px)", maxWidth: "calc(50% - 10px)" }}
                                                    >
                                                        <li>
                                                            <div className="icon">
                                                                <span className={item.icon}></span>
                                                            </div>
                                                            <div className="content">
                                                                <h5>{item.title}</h5>
                                                                <p>{item.text}</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="carousel-dot-style">
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </section>
    );
}
