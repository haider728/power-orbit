"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import styles from "@/components/sections/home1/logo-carousel-section.module.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
  desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
  tablet: { breakpoint: { max: 992, min: 576 }, items: 2 },
  mobile: { breakpoint: { max: 576, min: 0 }, items: 1 },
};

const brands = [
  {
    src: "/assets/images/brand/brand--1.png",
    alt: "Saudi Food and Drug Authority (SFDA) official logo",
  },
  {
    src: "/assets/images/brand/brand--2.png",
    alt: "Wasl Al Shomoukh (WASL)",
  },
  {
    src: "/assets/images/brand/st.png",
    alt: "Communications, Space and Technology Commission (CST) logo, Saudi Arabia",
  },
  {
    src: "/assets/images/brand/brand-4.png",
    alt: "Transport General Authority (TGA) Saudi Arabia ",
  },
];

export default function LogoCarouselSection() {
  return (
    <section id="ecosystem" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-title text-center">
            {/* <span className="section-title__tagline">Our Trusted Network</span> */}
            <h2 className="section-title__title">
            Why <span>Choose Us.</span>
            </h2>
          </div>
          <p className={styles.description}>
          Power Orbit is built for regulated fleet operations in Saudi Arabia, combining compliance controls with real-time operational intelligence. </p>
                 </div>

        <div className={styles.carouselWrap}>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={2300}
            arrows={false}
            showDots={false}
            containerClass={styles.carouselContainer}
            itemClass={styles.carouselItem}
          >
            {brands.map((brand, i) => (
              <div key={brand.src + i} className={styles.logoCard}>
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={120}
                  height={40}
                  className={styles.logo}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className={styles.header}>
          
          <p className={styles.description}><b>
          We remove compliance complexity so your team can scale faster with confidence, visibility, and full operational control.</b></p>
  </div>
    </section>
  );
}
