import clsx from "clsx";
import React from "react";
import Button from "@theme/Button";
import Layout from "../theme/Layout";
import caCss from "../css/customers/card.module.css";
import juCss from "../css/customers/jumbotron.module.css";
import seCss from "../css/section.module.css";
// temporary duplication across customer and enterprise page for quote module
const LeadRide = () => {
    const title = "Lead Ride ";
    const description = "Discover Leadride";

    return (
        <Layout canonical="/leadride" description={description} title={title}>
            <section className={clsx(seCss.section, seCss["section--odd"])}>
                <div className={juCss.jumbotron}>
                    <div className={juCss.jumbotron__left}>
                        <h1 className={seCss.section__title}>Lead Ride</h1>
                        <p className={clsx(
                            seCss.section__subtitle,
                            juCss.jumbotron__subtitle
                        )}
                        >
                            Building & Shaping the future, with active movement & active
                            mobility
                        </p>
                        <section className={clsx(seCss.section, seCss["section--inner"])}>
                            <div className="getStartedButtons_eYe1">
                                <Button className={caCss.card__cta} to="https://sprw.io/stt-bAHzYEC8vfVZHWkXcgE263">
                                    City SignUp
                                </Button>{" "}
                                <Button className={caCss.card__cta} to="/docs/lead-ride/city">
                                    City Program Flow
                                </Button>
                            </div>
                        </section>
                    </div>
                    <div className={juCss.jumbotron__illustration}>
                        <img alt="People co-working on a dashboard" height={274} src=" https://res.cloudinary.com/dsmfsfyci/image/upload/v1670171760/nncfwebdocu/Lead_Ride_Banner_ehm2f4.png" width={250} />
                    </div>
                </div>
            </section>
            <section className={clsx(seCss.section, seCss["section--inner"])}>
                <div className={caCss.card}>
                    <div className={caCss.card__illustration}>
                        <img alt="Aquis logo" src="https://img.jakpost.net/c/2020/07/19/2020_07_19_100502_1595132158._large.jpg" width={525} />
                    </div>
                    <p className={caCss.card__summary}>
                        <h2>Lead Ride For Cities</h2>
                        Lead ride city program acts as a bridge to connect the city
                        leadership, business leadership and the youth leadership in
                        transforming the city to healthy and happy cities by making them
                        cycle together.
                        <section className={clsx(seCss.section, seCss["section--inner"])}>
                            <div className="getStartedButtons_eYe1">
                                <Button className={caCss.card__cta} to="https://sprw.io/stt-bAHzYEC8vfVZHWkXcgE263">
                                    City SignUp
                                </Button>{" "}
                                <Button className={caCss.card__cta} to="/case-study/citypgmflow/">
                                    City Program Flow
                                </Button>
                            </div>
                        </section>
                    </p>
                </div>
            </section>
            <section className={clsx(seCss.section, seCss["section--inner"])}>
                <div className={caCss.card}>
                    <p className={caCss.card__summary}>
                        <h2>Lead Ride For Companies</h2>
                        Lead ride Companies program acts as a bridge to connect the city
                        leadership, business leadership and the youth leadership in
                        transforming the city to healthy and happy cities by making them
                        cycle together.
                        <div className="getStartedButtons_eYe1">
                            <Button className={caCss.card__cta} to="/docs/lead-ride/company">
                                Corporate Program
                            </Button>{" "}
                            <Button className={caCss.card__cta} to="https://sprw.io/stt-bAHzYEC8vfVZHWkXcgE263">
                                Corporate Sign Up
                            </Button>
                        </div>
                    </p>
                    <div className={caCss.card__illustration}>
                        <img alt="Yahoo logo" height={400} src="https://bikeleague.org/sites/default/files/styles/node_gallery_display/public/node_gallery/bike-pic.jpg" width={525} />
                    </div>
                </div>
            </section>
            <section className={clsx(seCss.section, seCss["section--inner"])}>
                <div className={caCss.card}>
                    <div className={caCss.card__illustration}>
                        <img alt="Logo for liveaction AI's network threat detection suite ThreatEye" height={360} src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/1e/36.jpg" width={640} />
                    </div>
                    <p className={caCss.card__summary}>
                        <h2>Lead Ride For Academics</h2>
                        Lead ride Academia program acts as a bridge to connect the city
                        leadership, business leadership and the youth leadership in
                        transforming the city to healthy and happy cities by making them
                        cycle together.
                        <div className="getStartedButtons_eYe1">
                            <Button className={caCss.card__cta} to="/docs/lead-ride/academia">
                                Academic Program
                            </Button>{" "}
                            <Button className={caCss.card__cta} to="https://sprw.io/stt-bAHzYEC8vfVZHWkXcgE263">
                                Academic Sign Up
                            </Button>
                        </div>
                    </p>
                </div>
            </section>
            <section className={clsx(seCss.section, seCss["section--inner"])}>
                <div className={caCss.card}>
                    <p className={caCss.card__summary}>
                        <h2>Lead Ride For Community</h2>
                        Lead ride communities program acts as a bridge to connect the city
                        leadership, business leadership and the youth leadership in
                        transforming the city to healthy and happy cities by making them
                        cycle together.
                        <div className="getStartedButtons_eYe1">
                            <Button className={caCss.card__cta} to="/docs/lead-ride/community">
                                Community Program
                            </Button>{" "}
                            <Button className={caCss.card__cta} to="https://sprw.io/stt-bAHzYEC8vfVZHWkXcgE263">
                                Community Sign Up
                            </Button>
                        </div>
                    </p>
                    <div className={caCss.card__illustration}>
                        <img alt="Comparison of AI and chess to investing" height={453} src="http://content.bikeroar.com/system/content/000/081/078/original/bike-communities-road-bikes-raised-in-the-air.jpg" width={600} />
                    </div>
                </div>

            </section>
        </Layout>
    );
};
export default LeadRide;
