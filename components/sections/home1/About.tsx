"use client";
import CountUp from "react-countup";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

export default function About() {
  return (
    <>
        <section className="about-two" id="about">
            {/* <div className="about-two__shape-2">
                
            </div> */}
            {/* <div className="about-two__shape-3">
                <Image src="/assets/images/shapes/about-two-shape-3.png" alt="Shape" width={560} height={583} priority />
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-two__left">
                            <div className="about-two__img-box">
                                <div className="about-two__img">
                                    <Image src="/assets/images/resources/about-two-img-1.jpg" alt="Image" width={495} height={474} priority />
                                </div>
                                <div className="about-two__img-2">
                                    <Image src="/assets/images/resources/about-two-img-2.jpg" alt="Image" width={336} height={344} priority />
                                </div>
                                <div className="about-two__shape-1"></div>
                            </div>
                            {/* <div className="about-two__client-box">
                                <ul className="about-two__client-img-list list-unstyled">
                                    <li>
                                        <div className="about-two__client-img">
                                            <Image src="/assets/images/resources/about-two-client-img-1-1.jpg" alt="Image" width={36} height={35} priority />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="about-two__client-img">
                                            <Image src="/assets/images/resources/about-two-client-img-1-2.jpg" alt="Image" width={36} height={35} priority />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="about-two__client-img">
                                            <Image src="/assets/images/resources/about-two-client-img-1-3.jpg" alt="Image" width={36} height={35} priority />
                                        </div>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="icon-plus"></span></Link>
                                    </li>
                                </ul>
                                <p className="about-two__client-text"><span className="odometer"><CountUp end={120} duration={2} /></span><span>K</span> Satisfied Client</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-two__right">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape-1"></div>
                                    <span className="section-title__tagline">About Us</span>
                                    <div className="section-title__tagline-shape-2"></div>
                                </div>
                                 {/* <AnimatedTitle>
                                <h2 className="">Unlock Your Business
                                    <span>Potential</span><br /><span>with Our best Cutting-Edge</span> IT<br /> Solutions
                                    to grow
                                </h2>
                                </AnimatedTitle>
                            */}
                           <AnimatedTitle>
                                <h2 className="section-title__title title-animation">Two Decades
                                    <span> of</span><br /><span>Telematics Innovation</span>
                                </h2>
                                </AnimatedTitle>
                            </div>
                            <p className="about-two__text">
                                Founded in 2006, Power Orbit has spent two decades navigating the complexity of Saudi operations. We did not just witness the Kingdom&apos;s digital transformation - we helped build the systems behind it.
                            </p>
                            <div className="about-two__points-box">
                                <ul className="about-two__points-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <p>We engineered the systems that made large-scale fleet digitization possible.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <p>Our evolution from DMS to Power Orbit reflects a shift from basic tracking to unified operational governance.</p>
                                    </li>
                                </ul>
                                <ul className="about-two__points-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <p>We did not adapt to the industry - we helped define it.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick-inside-circle"></span>
                                        </div>
                                        <p>Today, we deliver the operational control required by the Kingdom&apos;s most demanding enterprises.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-two__experience-contact-and-btn">
                                <div className="about-two__experience-box">
                                    <div className="about-two__experience-count-box">
                                        <h3 className="odometer">
                                            <CountUp end={20} duration={2} />
                                        </h3>
                                        <span>+</span>
                                    </div>
                                    <p className="about-two__experience-text">Years of
                                        <br /> Experience</p>
                                </div>
                                <div className="about-two__call-box">
                                    <div className="about-two__call-icon">
                                        <span className="icon-customer-service-headset"></span>
                                    </div>
                                    <div className="about-two__call-content">
                                        <span>call us for inquiry</span>
                                        <p><Link href="tel:00123456767">+00 (123) 456767</Link></p>
                                    </div>
                                </div>
                                <div className="about-two__btn-box">
                                    <Link href="/about" className="thm-btn">Learn More<span
                                            className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
