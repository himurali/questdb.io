/* eslint-disable */
import React from "react"
import clsx from "clsx"

import Layout from "../theme/Layout"
import Subscribe from "../components/Subscribe"

import seCss from "../css/section.module.css"
import style from "../css/cloud/style.module.css"
import flCss from "../css/cloud/flashy.module.css"
import { ActionFooter } from "../components/ActionFooter"

import hlCss from "../css/cloud/highlights.module.css"
import prCss from "../css/property.module.css"
import Button from "@theme/Button"
import { ContactFormDialog } from "../components/ContactFormDialog"








const Top = () => {
  return (
    <section className={seCss["section--inner"]}>
      <div className={seCss.section__header}>
        <h1
          className={clsx(
            seCss.section__title,
            seCss["section__title--accent"],
          )}
        >
          Innovation
        </h1>

        <p
          className={clsx(
            seCss.section__subtitle,
            seCss["section__subtitle--jumbotron"],
            seCss["section__subtitle--accent"],
            "text--center",
          )}
        >
        To explore the potential of Active Mobility Vehicles in the Developing World context,
        the AM Innovation Ecosystem is being  created by us.We aim to activate an Unique innovation ecosystem for development,
demonstration and assessment of Active Mobility Vehicles. We are redesigning the (DFM) Design for Manufacturability Stack for Active Mobility vehicles - how these vehicles are designed and manufactured in Asia
        </p>

        <Subscribe
          placeholder="E-mail"
          className={style.subscribe}
          submitButtonText="Get access"
          provider="cloud"
        />

        <img
          alt="Screenshot of instance creation form and instance details pages in QuestDB Cloud"
          height={626}
          src="https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/c101df064e4db4f63e23e24befb0d82d/large.jpg"
          width={1026}
          className={style["header-image"]}
        />

        <div className={hlCss.highlights}>
          <div className={flCss.flashy}>
            <h3 className={flCss.flashy__title}>Open source design</h3>
            <ul className={style.card__list}>
              <li className={clsx(prCss.property, style.card__item)}>
              Knowledge Engineering
              </li>
              <li className={clsx(prCss.property, style.card__item)}>
              Acceleration
              </li>
              <li className={clsx(prCss.property, style.card__item)}>Future Forever</li>
            </ul>
            <Button
              variant="primary"
              href="/get-questdb"
              className={style.card__button}
              newTab={false}
            >
                                Join Design   Community

            </Button>
          </div>
          <div className={flCss.flashy}>
            <h3 className={flCss.flashy__title}>Ecosystem Process </h3>
            <ul className={style.card__list}>
              <li className={clsx(prCss.property, style.card__item)}>
              Cultivate Ecosystem              </li>
              <li className={clsx(prCss.property, style.card__item)}>
              Map the ecosystem              </li>
              <li className={clsx(prCss.property, style.card__item)}>
              Networks Of Collaboration              </li>
              <li className={clsx(prCss.property, style.card__item)}>
              AM Design              </li>
              <li className={clsx(prCss.property, style.card__item)}>
              & Mfg Content Hub / Lab 
              </li>
            </ul>
            <ContactFormDialog
              defaultInterest="cloud"
              trigger={
                <Button variant="primary" className={style.card__button}>
                  Join Mfg  Community
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}



const Footer = () => {
  return (
    <section className={seCss["section--inner"]}>
      <ActionFooter />
    </section>
  )
}

const CloudPage = () => {
  const title = "Cloud"
  const description = ""

  return (
    <Layout
      canonical="/cloud"
      description={description}
      title={title}
      image="/img/pages/cloud/screens-thumb.png"
    >
      <Top />

      <Footer />
    </Layout>
  )
}

export default CloudPage
