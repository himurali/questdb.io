import clsx from "clsx"

import React, { useCallback,  useState } from "react"
import Button from "@theme/Button"
import Layout from "../../theme/Layout"

import caCss from "../../css/case-study/card.module.css"
import juCss from "../../css/case-study/jumbotron.module.css"
import ouCss from "../../css/case-study/outcome.module.css"
import seCss from "../../css/section.module.css"
import chCss from "../../css/case-study/chart.module.css"
 
import meCss from "../../css/index/menu.module.css" 
import prCss from "../../css/property.module.css" 

const SignUpFeatureTabs = () => {
  const [opened, setOpened] = useState<
    "Connect" | "Convene" | "Create" | "Celebrate"
  >("Connect");
  const handleClickIs = useCallback(() => {
    setOpened("Connect");
  }, []);
  const handleClickGoodFor = useCallback(() => {
    setOpened("Convene");
  }, []);
  const handleClickIsNot = useCallback(() => {
    setOpened("Create");
  }, []);
  const handleClickCelebrate = useCallback(() => {
    setOpened("Celebrate");
  }, []);
  return (
    <section className={clsx(seCss.section, seCss["section--odd"])}>
      <div className={clsx(seCss["section--inner"], seCss["section--center"])}>
        <h2
          className={clsx(
            seCss.section__title,
            seCss["section__title--wide"],
            "text--center"
          )}
        >
          SIGN UP FOR LEAD RIDE
        </h2>
        <div
          className={clsx(
            seCss.section__footer,
            seCss["section__footer--feature-tabs"]
          )}
        >
          <div className={meCss.menu__list}>
            <Button
              className={meCss.menu__button}
              onClick={handleClickIs}
              size="small"
              variant={opened === "Connect" ? "primary" : "tertiary"}
            >
              Connect
            </Button>
            <Button
              className={meCss.menu__button}
              onClick={handleClickGoodFor}
              size="small"
              variant={opened === "Convene" ? "primary" : "tertiary"}
            >
              Convene
            </Button>
            <Button
              className={meCss.menu__button}
              onClick={handleClickIsNot}
              size="small"
              variant={opened === "Create" ? "primary" : "tertiary"}
            >
              Create
            </Button>
            <Button
              className={meCss.menu__button}
              onClick={handleClickCelebrate}
              size="small"
              variant={opened === "Celebrate" ? "primary" : "tertiary"}
            >
              Celebrate
            </Button>
          </div>
          <div className={meCss.menu__content}>
            <div
              className={clsx(meCss.menu__panel, {
                [meCss["menu__panel--active"]]: opened === "Connect",
              })}
            >
              <p className={prCss.property}>Do research with us </p>
              <p className={prCss.property}>Volunteer for events</p>
              <p className={prCss.property}>Talk about us in your community</p>
              <p className={prCss.property}>Host us for a talk in your community</p>
              <p className={prCss.property}>Donate and support us</p>
              <Button
                className={meCss.menu__cta}
                to="https://github.com/questdb/questdb#try-questdb"
              >
                Join us &gt;
              </Button>
            </div>
            <div
              className={clsx(meCss.menu__panel, {
                [meCss["menu__panel--active"]]: opened === "Convene",
              })}
            >
              <p className={prCss.property}>Active Mobility Workshops</p>
              <p className={prCss.property}>Active Mobility Planning</p>
              <p className={prCss.property}>Active Mobility System Design </p>
              <p className={prCss.property}>
                Active Mobility Roadmap - Enabling Cycling for the state
              </p>
              <p className={prCss.property}>Active Mobility Tourism - Cycle City </p>
              <Button
                className={meCss.menu__cta}
                to="https://github.com/questdb/questdb#try-questdb"
              >
                Talk to us today &gt;
              </Button>
            </div>
            <div
              className={clsx(meCss.menu__panel, {
                [meCss["menu__panel--active"]]: opened === "Create",
              })}
            >
              <p className={prCss.property}>Support a Program </p>
              <p className={prCss.property}>Organize Group Bicycle Ride </p>
              <p className={prCss.property}>
                Organize Wellness Sessions for Employees
              </p>
              <p className={prCss.property}>
                Involve in R&D for Acctive Mobility Innovation{" "}
              </p>
              <p className={prCss.property}>
                Enable Active Mobility in Your Campus or Around Your Campus
              </p>
              <Button
                className={meCss.menu__cta}
                to="https://github.com/questdb/questdb#try-questdb"
              >
                Lets move &gt;
              </Button>
            </div>
            <div
              className={clsx(meCss.menu__panel, {
                [meCss["menu__panel--active"]]: opened === "Celebrate",
              })}
            >
              <p className={prCss.property}>Support a Program </p>
              <p className={prCss.property}>Organize World Cycle Day Bicycle Ride </p>
              <p className={prCss.property}>
                Organize Wellness Sessions for Employees
              </p>
              <p className={prCss.property}>
                Involve in R&D for Acctive Mobility Innovation{" "}
              </p>
              <p className={prCss.property}>
                Enable Active Mobility in Your Campus or Around Your Campus
              </p>
              <Button
                className={meCss.menu__cta}
                to="https://github.com/questdb/questdb#try-questdb"
              >
                Lets move &gt;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Tqs = () => {
  const title = "Lead Ride Program Flow"
  const description =
    " What should organizations do to enable active mobility ?."

  return (
    <Layout
      canonical="/case-study/tqs-integration/"
      description={description}
      title={title}
    >
      <section
        className={clsx(
          seCss.section,
          seCss["section--center"],
          juCss.jumbotron,
        )}
      >
        <div className={juCss.jumbotron__summary}>
          <div className={juCss.jumbotron__header}>
            <Button
              href="https://www.tqsintegration.com/?utm_source=questdb"
              variant="plain"
            >
              <img
                alt="TQS Integration leader in manufacturing data solutions"
                className={juCss.jumbotron__logo}
                height={45}
                src="https://i.imgur.com/fkeB3Bg.png"
                width={100}
              />
            </Button>
            <span className={juCss.jumbotron__name}>Case study</span>
          </div>
          <h1 className={seCss.section__title}>
            Getting Started with Lead Ride - Cities
          </h1>
          <p
            className={clsx(
              seCss.section__subtitle,
              juCss.jumbotron__description,
            )}
          >
            <a
              href="https://www.tqsintegration.com/?utm_source=questdb"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lead Ride for Cities
            </a>{" "}
            uses QuestDB in industrial telemetry solutions for clients in the
            Life Science, Pharmaceutical, Energy, and Renewables industries. TQS
            Integration uses QuestDB when they require a time series database
            that’s simple and efficient for data collection, contextualization,
            visualization, analytics, and managed services for the world’s
            leading companies.
          </p>
        </div>

        <div className={juCss.jumbotron__banner}>
          <img
            alt="Logo for TQS Integration"
            height={170}
            src="/img/pages/case-study/tqs-integration/header.jpg"
            width={1000}
          />
        </div>
      </section>
      <SignUpFeatureTabs/>
      <section className={clsx(seCss.section, seCss["section--odd"])}>
        <div className={clsx(seCss["section--inner"], ouCss.outcome__wrapper)}>
          <p className={ouCss.outcome}>
            <img
              alt="Dollar icon"
              className={ouCss.outcome__icon}
              src="/img/pages/case-study/icons/dollar.svg"
            />
            Massively reduced expenditure of effort in Infrastructure Projects
          </p>
          <p className={ouCss.outcome}>
            <img
              alt="Workflow icon"
              className={ouCss.outcome__icon}
              src="/img/pages/case-study/icons/workflow.svg"
            />
            Integrations with Companies and also Mobility Startups and Public Transport Network.
          </p>
          <p className={ouCss.outcome}>
            <img
              alt="Leaf icon"
              className={ouCss.outcome__icon}
              src="/img/pages/case-study/icons/leaf.svg"
            />
            Simplicity in design and living
          </p>
          <p className={ouCss.outcome}>
            <img
              alt="Gauge icon"
              className={ouCss.outcome__icon}
              src="/img/pages/case-study/icons/gauge.svg"
            />
            Productivity of the employees and the public sector
          </p>
          <p className={ouCss.outcome}>
            <img
              alt="Voice icon"
              className={ouCss.outcome__icon}
              src="/img/pages/case-study/icons/voice.svg"
            />
            Participatory Urban Planning
          </p>
          <p className={ouCss.outcome}>
            <img
              alt="Time icon"
              className={ouCss.outcome__icon}
              src="/img/pages/case-study/icons/time.svg"
            />
            Timely Completion of Infrastructure Projects
          </p>
        </div>
      </section>

      <section className={clsx(seCss.section, caCss.card)}>
        <p className={caCss.card__title}>
          TQS Integration builds reference architecture for software
          applications dealing with industrial telemetry that produce and
          process hundreds of thousands of events per second. QuestDB is used
          when they require a time series database for data visualization,
          real-time analytics, anomaly detection, and predictive maintenance.
        </p>

        <p className={caCss.card__subtitle}>
          In this case study, Senior Data Scientist, Holger Amort, describes how
          and why QuestDB is relied upon within high-performance reference
          architecture built at TQS Integration.
        </p>
      </section>
      

      <section className={seCss.section}>
        <div
          className={clsx(
            "markdown",
            seCss["section--inner"],
            seCss["section--column"],
          )}
        >
          <h3>
            Why TQS Integration use QuestDB for cloud-native industrial
            solutions
          </h3>
          <p className="font-size--large">
            At TQS Integration, we specialize in software solutions for
            industrial processes in in Life Science, Pharmaceutical, Energy and
            Renewables industries. We’re dealing with vast amounts of industrial
            telemetry data via sensor and controller instrumentation,
            manufacturing execution systems, automation, ERP integration, and
            biopharmaceutical manufacturers. Our solutions enable manufacturers
            to leverage their process data through advanced software
            architecture and analytics.
          </p>
          <img
            alt="A screenshot of TQS Integration software for tracking industrial processes"
            className={chCss.chart}
            height={433}
            src="/img/pages/case-study/tqs-integration/tqs-software-overview.png"
            width={1000}
          />
          <p className="font-size--large">
            Typically, we’re taking manufacturing data and combining it with
            other data sets of an organization to contextualize information.
            Having an overview of process and business information allows our
            users to make smarter decisions about their manufacturing processes,
            gain insights on predictive maintenance, anomaly detection, and much
            more.
          </p>

          <h3>Time series in pharmaceutical processes and Industry 4.0</h3>
           

           
          
           

          <h3>Storing high-frequency industrial telemetry in QuestDB</h3>
           
           

          <div
            className={clsx(
              "markdown",
              seCss["section--inner"],
              seCss["section--column"],
            )}
          >
            <p className={caCss.card__title}>
              <span className={caCss.card__quote}>&ldquo;</span>
              TQS Integration uses QuestDB in data architecture solutions for
              clients in the Life Science, Pharmaceutical, Energy, and
              Renewables industries. We use QuestDB when we require a time
              series database that’s simple and efficient for data collection,
              contextualization, visualization, and analytics.
              <span className={caCss.card__quote}>&rdquo;</span>
            </p>
            <p className={caCss.card__title}>
              <b>Holger Amort, Senior Data Scientist at TQS Integration</b>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Tqs
