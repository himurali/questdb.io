/* eslint-disable */
import React from "react"
import clsx from "clsx"

import Layout from "../theme/Layout" 
import seCss from "../css/section.module.css"
import style from "../css/cloud/style.module.css"
import flCss from "../css/cloud/flashy.module.css"
import { ActionFooter } from "../components/ActionFooter"

import hlCss from "../css/cloud/highlights.module.css"
import prCss from "../css/property.module.css"
import Button from "@theme/Button" 








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
          Bharath Open Bike   
        </h1>

        <p
          className={clsx(
            seCss.section__subtitle,
            seCss["section__subtitle--jumbotron"],
            seCss["section__subtitle--accent"],
            "text--center",
          )}
        >
        We propose to develop an idea “Bharath Open Bike” as a combination of Architecture & Design Framework and Manufacturing Stack to transform the cycle industry from centralized to decentralized, autocratic to democratic, homogeneous to heterogeneous products.
To explore the potential of Active Mobility Vehicles in the Developing World context.
          </p>

          <Button
              variant="primary"
              href="/docs/bob/vision"
              className={style.card__button}
              newTab={false}
            >
                                More about Bharath Open Bike

            </Button>

        <img
          alt="Screenshot of instance creation form and instance details pages in QuestDB Cloud"
          height={326}
          src="https://i.imgur.com/64iASNs.png"
          width={526}
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
              href="/docs/bob/opensource"
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

            <Button
              variant="primary"
              href="/docs/bob/manufacturing"
              className={style.card__button}
              newTab={false}
            >
                                Join Mfg  Community

            </Button>
            
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
