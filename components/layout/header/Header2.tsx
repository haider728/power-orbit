import Link from "next/link";
import Image from "next/image";
import OnepageMobileMenu_One from "../OnepageMobileMenu_One";
import OnepageMenu_One from "../OnepageMenu_One";

// ✅ Define props type
type Header2Props = {
  scroll: boolean;
  handleMobileMenu: () => void;
  handleSidebar: () => void;
};

export default function Header2({ scroll, handleMobileMenu, handleSidebar }: Header2Props) {
  return (
    <>
      {/* main header */}
      <header className={`main-header-two ${scroll ? "fixed-header" : ""}`}>
        <div className="main-menu-two__top">
            <div className="main-menu-two__top-inner">
                <p className="main-menu-two__top-text">Power Orbit formerly known as Digital Myth Solution</p>
                <ul className="list-unstyled main-menu-two__contact-list">
                    <li>
                        <div className="icon">
                            {/* <i className="icon-pin"></i>. */}
                        </div>
                        <div className="text">
                            {/* <p>King Khaled St, Al Tubayshi, Dammam, Saudi Arabia</p> */}
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="icon-search-mail"></i>
                        </div>
                        <div className="text">
                            <p><Link href="mailto:example@domain.com">info@eagle-iot.com</Link>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="icon-phone-call"></i>
                        </div>
                        <div className="text">
                            <p><Link href="tel:1212345678900">+966 53 308 5658</Link></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <nav className="main-menu main-menu-two">
            <div className="main-menu-two__wrapper">
                <div className="main-menu-two__wrapper-inner">
                    <div className="main-menu-two__left">
                        <div className="main-menu-two__logo">
                            <Link href="/"><Image src="/assets/images/resources/logo-1.png" alt="Image" width={186} height={36} priority /></Link>
                        </div>
                    </div>
                    <div className="main-menu-two__main-menu-box">
                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                        <OnepageMenu_One/>
                    </div>
                    <div className="main-menu-two__right">
                        <div className="main-menu-two__btn-box">
                            <Link href="/contact" className="thm-btn">Get in Touch<span
                                    className="icon-right-arrow"></span></Link>
                        </div>
                        <div className="main-menu-two__nav-sidebar-icon">
                            <Link className="navSidebar-button" href="#" onClick={handleSidebar}>
                                <span className="icon-dots-menu-one"></span>
                                {/* <span className="icon-dots-menu-two"></span> */}
                                {/* <span className="icon-dots-menu-three"></span> */}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        {/* sticky header */}
        <div className={`sticky-header main-menu main-menu-two ${scroll ? "animated slideInDown" : ""}`}>
          <div className="sticky-header__content">
            <div className="main-menu-two__wrapper">
                <div className="main-menu-two__wrapper-inner">
                    <div className="main-menu-two__left">
                        <div className="main-menu-two__logo">
                            <Link href="/"><Image src="/assets/images/resources/logo-1.png" alt="Image" width={186} height={36} priority /></Link>
                        </div>
                    </div>
                    <div className="main-menu-two__main-menu-box">
                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                        <OnepageMenu_One/>
                    </div>
                    <div className="main-menu-two__right">
                        <div className="main-menu-two__btn-box">
                            <Link href="/contact" className="thm-btn">Get in Touch<span
                                    className="icon-right-arrow"></span></Link>
                        </div>
                        <div className="main-menu-two__nav-sidebar-icon">
                            <Link className="navSidebar-button" href="#" onClick={handleSidebar}>
                                <span className="icon-dots-menu-one"></span>
                                {/* <span className="icon-dots-menu-two"></span> */}
                                {/* <span className="icon-dots-menu-three"></span> */}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* ✅ Fixed MobileMenu props */}
        <OnepageMobileMenu_One
          isSidebar={true}
          handleMobileMenu={handleMobileMenu}
        />
      </header>
    </>
  );
}
