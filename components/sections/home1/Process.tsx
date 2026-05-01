import Image from "next/image";
import AnimatedTitle from "@/components/elements/AnimatedTitle";

export default function Process() {
  return (
    <section className="process-two" id="process">
      {/* Backgrounds */}
      {/* <div
        className="process-two__bg"
        style={{
          backgroundImage: "url(/assets/images/backgrounds/process-two-bg.jpg)",
        }}
      ></div> */}

      <div
        className="process-two__bg-shape float-bob-y"
        style={{
          backgroundImage: "url(/assets/images/shapes/process-two-bg-shape.png)",
        }}
      ></div>

      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape-1"></div>
            <span className="section-title__tagline">Why Power Orbit </span>
            <div className="section-title__tagline-shape-2"></div>
          </div>
          <AnimatedTitle>
          <h2 className="section-title__title title-animation">
          From Data Collection 
            <br />
            <span>to Decision Intelligence</span>
          </h2>
          </AnimatedTitle>
        </div>

        {/* Process Steps */}
        <ul className="row list-unstyled">
          {/* Step 1 */}
          <li className="col-xl-4 col-lg-4">
            <div className="process-two__single">
              <div className="process-two__count">01</div>
              <h3 className="process-two__title">Capability </h3>
              <p className="process-two__text">
               
Data Handling Visibility <br/>Compliance Insights 
 </p>
            </div>
          </li>

          {/* Step 2 */}
          <li className="col-xl-4 col-lg-4">
            <div className="process-two__single">
              <div className="process-two__shape-1 float-bob-x">
                <Image
                  src="/assets/images/shapes/process-two-shape-1.png"
                  alt="Shape 1"
                  width={217}
                  height={72}
                  priority
                />
              </div>
              <div className="process-two__shape-2 float-bob-x">
                <Image
                  src="/assets/images/shapes/process-two-shape-2.png"
                  alt="Shape 2"
                  width={216}
                  height={71}
                  priority
                />
              </div>
              <div className="process-two__count">02</div>
              <h3 className="process-two__title">Conventional Providers </h3>
              <p className="process-two__text">
                
Passive Limited Manual<br/> Historical
                </p>
            </div>
          </li>

          {/* Step 3 */}
          <li className="col-xl-4 col-lg-4">
            <div className="process-two__single">
              <div className="process-two__count">03</div>
              <h3 className="process-two__title">Power Orbit </h3>
              <p className="process-two__text">
               
Intelligent Real-Time<br />Automated Predictive 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
