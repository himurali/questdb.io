/* eslint-disable */
import React from "react"
import clsx from "clsx"

import Layout from "../theme/Layout" 

import seCss from "../css/section.module.css"
import style from "../css/cloud/style.module.css"
import flCss from "../css/cloud/flashy.module.css" 

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
          Support Us 
        </h1>

        <p
          className={clsx(
            seCss.section__subtitle,
            seCss["section__subtitle--jumbotron"],
            seCss["section__subtitle--accent"],
            "text--center",
          )}
        >
        We are proudly non-profit organization based out of India. 
        Thousands of people like you help us stand up  for a healthy planet for all. 
        We rely on donations to carry out our mission to keep the streets traffic free. Will you support us  today?
        </p>

        

        <img
          alt="Screenshot of instance creation form and instance details pages in QuestDB Cloud"
          height={626}
          src="https://i.imgur.com/yCen7Zq.jpg"
          width={1026}
          className={style["header-image"]}
        />

        <div className={hlCss.highlights}>
          <div className={flCss.flashy}>
            <h3 className={flCss.flashy__title}>Commit Funds </h3>
            <ul className={style.card__list}>
              <li className={clsx(prCss.property, style.card__item)}>
                Support Research in Active Mobility
              </li>
              <li className={clsx(prCss.property, style.card__item)}>
                Fund Campaigns
              </li>
              <li className={clsx(prCss.property, style.card__item)}>Sponsor our Events and Programs </li>
            </ul>
            <Button
              variant="primary"
              href="https://rzp.io/l/nammacyclesupport"
              className={style.card__button}
              newTab={false}
            >
              Donate
            </Button>
          </div>
          <div className={flCss.flashy}>
            <h3 className={flCss.flashy__title}>Become a Partner</h3>
            <ul className={style.card__list}>
              <li className={clsx(prCss.property, style.card__item)}>
                Sign up for Lead Ride in your organization
              </li>
              <li className={clsx(prCss.property, style.card__item)}>
                Knowledge Partner - Share insights on Active Mobility
              </li>
              <li className={clsx(prCss.property, style.card__item)}>
               Activation Partner - Join hands to activate our programs
              </li>
              <li className={clsx(prCss.property, style.card__item)}>
                Institional Partner - Share resources to enable active mobility
              </li>
              <li className={clsx(prCss.property, style.card__item)}>
                Patron - Become a patron for our programs
              </li>
            </ul>
            <ContactFormDialog
              defaultInterest="cloud"
              trigger={
                <Button variant="primary" className={style.card__button}>
                  Make me your partner
                </Button>
              }
            />
          </div>
        </div>
      </div>
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
 
    </Layout>
  )
}

export default CloudPage
