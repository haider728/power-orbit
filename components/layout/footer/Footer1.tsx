import Link from "next/link"
import Image from "next/image";
export default function Footer1() {
    return (
        <>
        
            <footer className="site-footer-two">
                <div className="site-footer-two__shape-1"></div>
                <div className="site-footer-two__shape-2"></div>
                <div className="site-footer-two__shape-3"></div>
                <div className="site-footer-two__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="site-footer-two__about">
                                    <div className="site-footer-two__logo">
                                        <Link href="/"><Image src="/assets/images/resources/footer-logo.gif" alt="Power Orbit" width={169} height={36} priority unoptimized /></Link>
                                    </div>
                                    <ul className="list-unstyled site-footer-two__contact-list">
                                        <li>
                                            <div className="site-footer-two__contact-icon">
                                                <span className="icon-contact"></span>
                                            </div>
                                            <div className="site-footer-two__contact-content">
                                                <h5 className="site-footer-two__contact-title">Contact Info</h5>
                                                <p className="site-footer-two__contact-info">
                                                    <Link href="mailto:info@eagle-iot.com"
                                                        className="site-footer-two__contact-mail">info@eagle-iot.com</Link>
                                                    <Link href="tel:+966533085658" className="site-footer-two__contact-phone">+966 53 308 5658</Link>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="site-footer-two__contact-icon">
                                                <span className="icon-pin"></span>
                                            </div>
                                            <div className="site-footer-two__contact-content">
                                                <h5 className="site-footer-two__contact-title">Location</h5>
                                                <p className="site-footer-two__contact-info">
                                                9523 King Khaled St, Al Tubayshi, EDGA2389, 2389, <br /> Dammam 32233, Saudi Arabia 
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp d-none d-md-block" data-wow-delay="200ms">
                                <div className="footer-widget-two__quick-links">
                                    <h4 className="footer-widget-two__title">Pages</h4>
                                    <ul className="footer-widget-two__quick-links-list list-unstyled">
                                        <li><Link href="/"><span className="icon-right-arrow-2"></span>Home</Link></li>
                                        <li><Link href="/about"><span className="icon-right-arrow-2"></span>About Us</Link></li>
                                        {/* <li><Link href="/pricing"><span className="icon-right-arrow-2"></span>Pricing</Link></li>
                                        // <li><Link href="/portfolio"><span className="icon-right-arrow-2"></span>Portfolio</Link>
                                        // </li> */}
                                        <li><Link href="/blog"><span className="icon-right-arrow-2"></span>Blogs</Link></li>
                                        {/* <li><Link href="/contact"><span className="icon-right-arrow-2"></span>Careers</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp d-none d-md-block" data-wow-delay="300ms">
                                <div className="footer-widget-two__support">
                                    <h4 className="footer-widget-two__title">Support</h4>
                                    <ul className="footer-widget-two__quick-links-list list-unstyled">
                                        <li><Link href=""><span className="icon-right-arrow-2"></span>Terms &
                                                Condition</Link></li>
                                        <li><Link href=""><span className="icon-right-arrow-2"></span>FAQs</Link></li>
                                        <li><Link href=""><span className="icon-right-arrow-2"></span>Contact Us</Link>
                                        </li>
                                        <li><Link href=""><span className="icon-right-arrow-2"></span>404 Page</Link></li>
                                        <li><Link href=""><span className="icon-right-arrow-2"></span>Live Chat</Link>
                                        </li>
                                        <li><Link href=""><span className="icon-right-arrow-2"></span>Our Services</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp d-none d-md-block" data-wow-delay="400ms">
                                <div className="footer-widget-two__services">
                                    <h4 className="footer-widget-two__title">Our Services</h4>
                                    <ul className="footer-widget-two__quick-links-list list-unstyled">
                                        <li><Link href=""><span className="icon-right-arrow-2"></span>Fleet Managment</Link>
                                        </li>
                                        <li><Link href=""><span className="icon-right-arrow-2"></span>Asset Management
                                            </Link>
                                        </li>
                                        <li><Link href=""><span className="icon-right-arrow-2"></span>Cold Chain Management</Link></li>
                                        {/* <li><Link href=""><span className="icon-right-arrow-2"></span>Smart Environment Management</Link>                                        </li> */}
                                        <li><Link href=""><span className="icon-right-arrow-2"></span>Video Telematics</Link>
                                        </li>
                                        {/* <li><Link href=""><span className="icon-right-arrow-2"></span>Personal
                                                Branding</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer-two__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer-two__bottom-inner">
                                    <div className="site-footer-two__copyright">
                                        <p className="site-footer-two__copyright-text">
                                            ⓒ Copyright {new Date().getFullYear()} <Link href="/">Power Orbit</Link> All rights reserved
                                        </p>
                                    </div>
                                    <div className="site-footer-two__social-box">
                                        <h4 className="site-footer-two__social-title">Follow Us:</h4>
                                        <div className="site-footer-two__social-box-inner">
                                            <Link href="https://www.facebook.com/EagleIoT/"><span className="icon-facebook"></span></Link>
                                            {/* <Link href="/#"><span className="icon-instagram"></span></Link> */}

                                            <Link href="https://www.linkedin.com/company/eagle-iot"><span className="icon-linkedin"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
