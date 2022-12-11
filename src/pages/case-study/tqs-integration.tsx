import clsx from "clsx"
import React, { useCallback, useEffect, useState } from "react"

import Button from "@theme/Button" 

import Layout from "../../theme/Layout"
import caCss from "../../css/case-study/card.module.css"
import juCss from "../../css/case-study/jumbotron.module.css"
import ouCss from "../../css/case-study/outcome.module.css"
import seCss from "../../css/section.module.css"
import chCss from "../../css/case-study/chart.module.css"
import prCss from "../../css/property.module.css"
import style from "../../css/cloud/style.module.css"
import meCss from "../../css/index/menu.module.css"

const SignUpFeatureTabs = () => {
  const [opened, setOpened] = useState<"Connect" | "Convene" | "Create" | "Celebrate">(
    "Connect",
  )
  const handleClickIs = useCallback(() => {
    setOpened("Connect")
  }, [])
  const handleClickGoodFor = useCallback(() => {
    setOpened("Convene")
  }, [])
  const handleClickIsNot = useCallback(() => {
    setOpened("Create")
  }, [])
  const handleClickCelebrate = useCallback(() => {
    setOpened("Celebrate")
  }, [])

  return (
    <section className={clsx(seCss.section, seCss["section--odd"])}>
      <div className={clsx(seCss["section--inner"], seCss["section--center"])}>
        <h2
          className={clsx(
            seCss.section__title,
            seCss["section__title--wide"],
            "text--center",
          )}
        >
        SIGN UP FOR LEAD RIDE

        </h2>

        <div
          className={clsx(
            seCss.section__footer,
            seCss["section__footer--feature-tabs"],
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
              <p className={prCss.property}>
                Host us for a talk in your community
              </p>
              <p className={prCss.property}>Donate and support us</p>

              <Button
                className={meCss.menu__cta}
                to="https://github.com/questdb/questdb#try-questdb"
              >
                Join us  &gt;
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
              <p className={prCss.property}>Active Mobility Roadmap - Enabling Cycling for the state</p>
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
              <p className={prCss.property}>Organize Wellness Sessions for Employees</p>
              <p className={prCss.property}>Involve in R&D for Acctive Mobility Innovation </p>
              <p className={prCss.property}>Enable Active Mobility in Your Campus or Around Your Campus</p>

              <Button
                className={meCss.menu__cta}
                to="https://github.com/questdb/questdb#try-questdb"
              >
                Lets move  &gt;
              </Button>
            </div>
            <div
              className={clsx(meCss.menu__panel, {
                [meCss["menu__panel--active"]]: opened === "Celebrate",
              })}
            >
              <p className={prCss.property}>Support a Program </p>
              <p className={prCss.property}>Organize World Cycle Day Bicycle Ride </p>
              <p className={prCss.property}>Organize Wellness Sessions for Employees</p>
              <p className={prCss.property}>Involve in R&D for Acctive Mobility Innovation </p>
              <p className={prCss.property}>Enable Active Mobility in Your Campus or Around Your Campus</p>

              <Button
                className={meCss.menu__cta}
                to="https://github.com/questdb/questdb#try-questdb"
              >
                Lets move  &gt;
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
const Tqs = () => {
  const title = "TQS uses QuestDB for industrial telemetry data"
  const description =
    "QuestDB is used as a time series database to store sensor data in the cloud infrastructure of modern pharmaceutical production processing facilities."

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
              TQS Integration
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
            height={200}
            src="https://i.imgur.com/fkeB3Bg.png"
            width={1000}
          />
        </div>
      </section>
      <SignUpFeatureTabs></SignUpFeatureTabs>
      <section className={clsx(seCss.section, seCss["section--odd"])}>
        <div className={clsx(seCss["section--inner"], ouCss.outcome__wrapper)}>
          <p className={ouCss.outcome}>
            <img
              alt="Dollar icon"
              className={ouCss.outcome__icon}
              src="/img/pages/case-study/icons/dollar.svg"
            />
            Massively reduced database deployment and maintenance costs
          </p>
          <p className={ouCss.outcome}>
            <img
              alt="Workflow icon"
              className={ouCss.outcome__icon}
              src="/img/pages/case-study/icons/workflow.svg"
            />
            Integrations with developer tools to easily insert and query data
          </p>
          <p className={ouCss.outcome}>
            <img
              alt="Leaf icon"
              className={ouCss.outcome__icon}
              src="/img/pages/case-study/icons/leaf.svg"
            />
            Simple to develop cloud-native solutions
          </p>
          <p className={ouCss.outcome}>
            <img
              alt="Gauge icon"
              className={ouCss.outcome__icon}
              src="/img/pages/case-study/icons/gauge.svg"
            />
            Reliably ingest hundreds of thousands of events per second
          </p>
          <p className={ouCss.outcome}>
            <img
              alt="Voice icon"
              className={ouCss.outcome__icon}
              src="/img/pages/case-study/icons/voice.svg"
            />
            Easy to deploy and low-effort to maintain
          </p>
          <p className={ouCss.outcome}>
            <img
              alt="Time icon"
              className={ouCss.outcome__icon}
              src="/img/pages/case-study/icons/time.svg"
            />
            High-performance to monitor tens of thousands of metrics
          </p>
        </div>
      </section>

      <section className={clsx(seCss.section, caCss.card)}>
   

        <p className={caCss.card__subtitle}>
        <h1> Handshake</h1> 
        NNCF initiates the conversation with the city leadership and the key stakeholders to make the city as a Lead Ride City.<br></br>
        A Lead Ride City performs the following key roles :
<ul className={style.card__list}>  
              <li className={clsx(prCss.property, style.card__item)}>
              Agrees to organize the Lead Ride on World Cycle Day

              </li>
              <li className={clsx(prCss.property, style.card__item)}>
              Connects and Convenes the Active Mobility Ecosystem players
              </li>
              <li className={clsx(prCss.property, style.card__item)}>Commits funding for the Lead Ride </li>
              <li className={clsx(prCss.property, style.card__item)}>The outreach and branding campaign is supported </li>
              <li className={clsx(prCss.property, style.card__item)}>Agrees to hold the Lead Ride Round Table along with NNCF leadership 3 times in a year. </li>
              <li className={clsx(prCss.property, style.card__item)}> Appoints Lead Ride champions in the city to lead the effort of Active Mobility Transformation.</li>
            </ul>


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
          
         
       
          <section className={clsx(seCss.section, caCss.card)}>
   

   <p className={caCss.card__subtitle}>
 
   <h1>  Step 1 : Ecosystem Mapping</h1>  <h4>For cyclists by cyclists: Ecosystem enhancement through community engagement.</h4>
    We describe all the entities, flows and relationships that characterize the surrounding Active Mobility Ecosystem.
         

   <img
            alt="A screenshot of TQS Integration software for tracking industrial processes"
            className={chCss.chart}
            height={433}
            src="https://i.imgur.com/19wQcuK.png"
            width={1000}
          />
<ul className={style.card__list}>  
         <li className={clsx(prCss.property, style.card__item)}>
         Agrees to organize the Lead Ride on World Cycle Day

         </li>
         <li className={clsx(prCss.property, style.card__item)}>
         Connects and Convenes the Active Mobility Ecosystem players
         </li>
         <li className={clsx(prCss.property, style.card__item)}>Commits funding for the Lead Ride </li>
         <li className={clsx(prCss.property, style.card__item)}>The outreach and branding campaign is supported </li>
         <li className={clsx(prCss.property, style.card__item)}>Agrees to hold the Lead Ride Round Table along with NNCF leadership 3 times in a year. </li>
         <li className={clsx(prCss.property, style.card__item)}> Appoints Lead Ride champions in the city to lead the effort of Active Mobility Transformation.</li>
       </ul>


   </p>
 </section>
        
  
 
         
 
        </div>
      </section>
    </Layout>
  )
}

export default Tqs
