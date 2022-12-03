/* eslint-disable */
import React from "react"
import Layout from "../theme/Layout"

import seCss from "../css/section.module.css"
import clsx from "clsx"

import ilCss from "../css/use-cases/illustration.module.css"
import ucCss from "../css/use-cases/use-case.module.css"

const Heading = () => (
  <section
    className={clsx(
      seCss["section--inner"],
      seCss["section--center"],
      ucCss.section,
    )}
  >
    <div className={seCss.section__header}>
      <h1
        className={clsx(seCss.section__title, seCss["section__title--accent"])}
      >
        Design Total Wellness with Bicycles
      </h1>
      <p
        className={clsx(
          seCss.section__subtitle,
          seCss["section__subtitle--jumbotron"],
          seCss["section__subtitle--accent"],
          "text--center",
        )}
      >
        BWell - Our program designed and developed helps discovering new ways to
        deliver health, happpiness and wellness by focussing on Active Mobility.
      </p>
    </div>
    <img
      alt="An illustration of QuestDB use cases"
      className={ilCss.illustration}
      height={584}
      src="https://i.imgur.com/M8I1zdM.png"
      width={1091}
    />

    <h1 className={clsx(seCss.section__title, seCss["section__title--accent"])}>
      THEORY OF WELLBEING
    </h1>
    <p
      className={clsx(
        seCss.section__subtitle,
        seCss["section__subtitle--jumbotron"],
        seCss["section__subtitle--accent"],
        "text--center",
      )}
    >
      Seligman (2011) hypothesized that PERMA (Positive Emotion, Engagement,
      Relationships, Meaning, and Accomplishment) are the elements of
      well-being. We are exploring the elements of well being and thriving in
      the cycling community of Urban Areas to develop a framework for Wellbeing
      with Bicycles as the Focus.
    </p>

    <p
      className={clsx(
        seCss.section__subtitle,

        "text--left",
      )}
    >
      BWell - Built on the PERMA framework - five key pillars for flourishing
      and thriving in urban areas is possible only when the cities have enabled
      active mobility in the basic architecture of urban design.
    </p>
  </section>
)

const title = "Use Cases"
const UseCasesPage = () => (
  <Layout canonical="/careers" description={title} title={title}>
    <Heading />
  </Layout>
)

export default UseCasesPage
