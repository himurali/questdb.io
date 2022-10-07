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

        <Subscribe
          placeholder="E-mail"
          className={style.subscribe}
          submitButtonText="Register for newsletter "
          provider="cloud"
        />

        <img
          alt="Screenshot of instance creation form and instance details pages in QuestDB Cloud"
          height={626}
          src="/img/pages/cloud/screens.png"
          width={1026}
          className={style["header-image"]}
        />

        <div className={hlCss.highlights}>
          <div className={flCss.flashy}>
            <h3 className={flCss.flashy__title}>Donate</h3>
            <ul className={style.card__list}>
              <li className={clsx(prCss.property, style.card__item)}>
                Community Events
              </li>
              <li className={clsx(prCss.property, style.card__item)}>
                Knowledge Sessions
              </li>
              <li className={clsx(prCss.property, style.card__item)}>Transforming Neighborhoods</li>
            </ul>
            <Button
              variant="primary"
              href="/get-questdb"
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
                Database-as-a-service
              </li>
              <li className={clsx(prCss.property, style.card__item)}>
                Database monitoring
              </li>
              <li className={clsx(prCss.property, style.card__item)}>
                Built-in authentication
              </li>
              <li className={clsx(prCss.property, style.card__item)}>
                Additional database features
              </li>
              <li className={clsx(prCss.property, style.card__item)}>
                Multiple regions
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
