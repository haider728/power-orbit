"use client";
import CountUp from "react-countup";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

const HIGHLIGHTS = [
  "We engineered the systems that made large-scale fleet digitization possible.",
  "Our evolution from DMS to Power Orbit reflects a shift from basic tracking to unified operational governance.",
  "We did not adapt to the industry — we helped define it.",
  "Today, we deliver the operational control required by the Kingdom's most demanding enterprises.",
] as const;

export default function About() {
  return (
    <>
      <section className="about-two" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="about-two__left">
                <div className="about-two__img-box">
                  <div className="about-two__img">
                    <Image
                      src="/assets/images/resources/about-two-img-1.jpg"
                      alt="Power Orbit operations"
                      width={495}
                      height={474}
                      priority
                    />
                  </div>
                  {/* <div className="about-two__img-2">
                    <Image
                      src="/assets/images/resources/about-two-img-2.jpg"
                      alt="Telematics innovation"
                      width={336}
                      height={344}
                      priority
                    />
                  </div> */}
                  <div className="about-two__shape-1" aria-hidden />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-two__right about-two-copy">
                <header className="section-title text-left sec-title-animation animation-style2 about-two-copy__header">
                  <div className="section-title__tagline-box">
                    {/* <div className="section-title__tagline-shape-1" />
                    <span className="section-title__tagline">About Us</span>
                    <div className="section-title__tagline-shape-2" /> */}
                  </div>
                  <AnimatedTitle>
                    <h2 className="section-title__title title-animation about-two-copy__title">
                      Two decades of <span>telematics innovation</span>
                    </h2>
                  </AnimatedTitle>
                </header>

                <div className="about-two-copy__body">
                  <p className="about-two-copy__lead">
                    Founded in 2006, Power Orbit has spent two decades navigating the
                    complexity of Saudi operations. We did not just witness the
                    Kingdom&apos;s digital transformation — we helped build the systems
                    behind it.
                  </p>

                  <ul className="about-two-copy__grid list-unstyled" role="list">
                    {HIGHLIGHTS.map((text) => (
                      <li key={text} className="about-two-copy__card">
                        <span className="about-two-copy__tick" aria-hidden>
                          <span className="icon-tick-inside-circle" />
                        </span>
                        <p>{text}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="about-two__experience-contact-and-btn about-two-copy__footer">
                  <div className="about-two__experience-box">
                    <div className="about-two__experience-count-box">
                      <h3 className="odometer">
                        <CountUp end={20} duration={2} />
                      </h3>
                      <span>+</span>
                    </div>
                    <p className="about-two__experience-text">
                      Years of
                      <br /> Experience
                    </p>
                  </div>
                  <div className="about-two__call-box">
                    <div className="about-two__call-icon">
                      <span className="icon-customer-service-headset" />
                    </div>
                    <div className="about-two__call-content">
                      <span>Call us for inquiry</span>
                      <p>
                        <Link href="tel:+966533085658">+966 53 308 5658</Link>
                      </p>
                    </div>
                  </div>
                  <div className="about-two__btn-box">
                    <Link
                      href="/Company-Profile-2026-Eng-Version.pdf"
                      className="thm-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Company Profile
                      <span className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
