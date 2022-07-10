import React from "react"
import clsx from "clsx"

import seCss from "../css/section.module.css"
import prCss from "../css/about-us/press.module.css"

import Layout from "../theme/Layout"
import SvgImage from "../components/SvgImage"


import ProductMetrics from "../components/ProductMetrics"
import ExternalLink from "../assets/img/external-link.svg"

import pressReleases, { PressRelease } from "../assets/press"
type PressItemProps = {
  release: PressRelease
}

const Top = () => {
  return (
    <section className={seCss["section--inner"]}>
      <div className={seCss.section__header}>
        <h1
          className={clsx(
            seCss.section__title,
            seCss["section__title--accent"],
            "text--center",
          )}
        >
          Media Outreach{" "}
          <em className={seCss.section__title__em}>NNCF</em> in the news
        </h1>
        <ProductMetrics />
      </div>
    </section>
  )
}




const PressItem = ({ release }: PressItemProps) => (
  <a
    className={prCss.press_release}
    key={release.url}
    href={release.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h3 className={prCss.press_release__title}>{release.title}</h3>
    <div className={prCss.press_release__details}>
      <p className={prCss.press_release__details__author}>{release.author}</p>
      <SvgImage
        image={<ExternalLink />}
        title={`URL for ${String(release.title)}`}
      />
    </div>
  </a>
)

const Press = () => {
  return (
    <section
      className={clsx(seCss["section--inner"], seCss["section--column"])}
    >
      <h2 className={clsx(seCss.section__title, seCss["section__title--wide"])}>
        Press
      </h2>
      <div className={clsx(prCss.press, prCss["press--col3"])}>
        {pressReleases.map((item) => (

          <PressItem key={item.url} release={item} />
        ))}
      </div>
    </section>
  )
}

const AboutUsPage = () => {
  const title = "About us"
  const description = ""

  return (
    <Layout canonical="/about-us" description={description} title={title}>
      <Top />

      <Press />
    </Layout>
  )
}

export default AboutUsPage
