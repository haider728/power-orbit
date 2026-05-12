
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

export default function Choose() {
  return (
    <>
        <section className="why-choose-one" id="choose">
            <div className="why-choose-one__shape-3 float-bob-y">
                <Image src="/assets/images/shapes/why-choose-one-shape-3.png" alt="Shape" width={1022} height={751} priority />
            </div>
            {/* <div className="why-choose-one__shape-4"></div> */}
            {/* <div className="why-choose-one__shape-5"></div> */}
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="why-choose-one__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    {/* <div className="section-title__tagline-shape-1"></div> */}
                                    {/* <span className="section-title__tagline">Why Choose Us</span> */}
                                    {/* <div className="section-title__tagline-shape-2"></div> */}
                                </div>
                                <AnimatedTitle>
                                    <h2 className="section-title__title title-animation">Operational Blind   <span>Spots Are </span><br /><span> Expensive</span> 
                                    </h2>
                                </AnimatedTitle>
                            </div>
                             {/* <h4 className="why-choose-one__paragraph-heading">Compliance is our baseline.
Operational clarity is our standard.</h4> */}
                            <p className="why-choose-one__text why-choose-one__text-intro">
                            The true cost of a 'basic' tracking system isn't the subscription fee, it's the fuel theft you didn't see, the SFDA fine you didn't avoid, and the safety risk you couldn't predict. Operational blind spots are the most expensive items on your balance sheet                             </p>
                            <ul className="why-choose-one__text why-choose-one__points-simple">
                                <li>The issue is not lack of data. </li>
                                <li>It is lack of actionable intelligence. </li>
                            </ul>
                            {/* <p className="why-choose-one__text why-choose-one__text-strong">
                                <strong>We remove compliance complexity so your team can scale faster with confidence, visibility, and full operational control.</strong>
                            </p> */}
                            {/* <ul className="why-choose-one__progress-list list-unstyled">
                                <li>
                                    <div className="why-choose-one__progress">
                                        <h4 className="why-choose-one__progress-title">SFDA Approved </h4>
                                       
                                    </div>
                                </li>
                                <li>
                                    <div className="why-choose-one__progress">
                                        <h4 className="why-choose-one__progress-title">TGA Compliant </h4>
                                        
                                    </div>
                                </li>
                            </ul> */}
                            <div className="why-choose-one__btn-and-client-info">
                                <div className="why-choose-one__btn-box">
                                    <Link href="https://avl-ksa.com/en/about-us/" className="thm-btn">About Us
                                    {/* <span
                                            className="icon-right-arrow"></span> */}
                                            </Link>
                                </div>
                                <div className="why-choose-one__client-box">
                                    {/* <div className="why-choose-one__client-img">
                                        <Image src="/assets/images/resources/why-choose-one-client-img.jpg" alt="Image" width={42} height={42} priority />
                                    </div> */}
                                    {/* <div className="why-choose-one__client-content">
                                        <h3>Thomas Alison</h3>
                                        <span>Founder & CEO</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="why-choose-one__right wow slideInRight" data-wow-duration="1.2s" data-wow-delay="0.4s">
                            <div className="why-choose-one__img why-choose-one__img-card">
                                <Image
                                    src="/images/choose.jpg"
                                    alt="Fleet operations dashboard and compliance monitoring"
                                    width={670}
                                    height={470}
                                    className="why-choose-one__img-relatable"
                                    priority
                                />
                            </div>
                            {/* <div className="why-choose-one__shape-1 img-bounce">
                                <Image src="/assets/images/shapes/why-choose-one-shape-1.png" alt="Image" width={80} height={80} priority />
                            </div> */}
                            {/* <div className="why-choose-one__shape-2 float-bob-x">
                                <Image src="/assets/images/shapes/why-choose-one-shape-2.png" alt="Image" width={142} height={46} priority />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
