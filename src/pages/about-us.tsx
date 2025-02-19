import React from "react"
import clsx from "clsx"

import paCss from "../css/community/page.module.css"
import seCss from "../css/section.module.css"
import teCss from "../css/about-us/team.module.css"
import ubCss from "../css/about-us/used-by.module.css" 
import prCss from "../css/about-us/press.module.css"
 

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
 

import Layout from "../theme/Layout"
import Button from "@theme/Button"
import SvgImage from "../components/SvgImage"

import { logos } from "../assets/logos"
import { CustomerLogo } from "src/assets/types"
import ProductMetrics from "../components/ProductMetrics"

import ExternalLink from "../assets/img/external-link.svg"

import pressReleases, { PressRelease } from "../assets/press" 

type PressItemProps = {
  release: PressRelease
} 



const usedByLogos: CustomerLogo[] = [
  {
    
    ...logos.airbus,
    name: "Active Mobility Enablement",
    width: 140,
    height: 56,
  },
  {
    ...logos.kepler,
    name: "Active Mobility For Urban Spaces",
    width: 140,
    height: 56,
  },
  {
    ...logos["copenhagen-atomics"],
    name: "Active Mobility Communication",

    width: 140,
    height: 56,
  },
  {
    ...logos.yahoo,
    name: "Bicycle Sports",
    width: 140,
    height: 56,
  },

  {
    ...logos.yahoo,
    name: "Bicycle Tourism",
    width: 140,
    height: 56,
  },
]

const Top = () => {
  return (
    <section className={seCss["section--inner"]}>
      <div className={seCss.section__header}>
        <h3
          className={clsx(
            seCss.section__title,
            seCss["section__title--accent"],
            "text--center",
          )}
        >
          Enabling  active mobility culture,  {" "}
          <em className={seCss.section__title__em}>design and innovation</em> excellence
        </h3>
        The NNCF Foundation works to ensure the active mobility (with focus on cycles) is .
        For more than 10+ years, we’ve worked across communities, organizations, and technologies to fuel a movement to realize the full potential of Active Mobility.
        NNCF invests in innovative ideas and campaigns for pushing the frontiers of active mobilityt. 
        NNCF’s research — from our Insights to our white papers — are important mile stones in active mobility research. 

        <h1>Our Vision</h1>
          <p className={clsx(seCss.section__subtitle)}>
            Transforming transportation systems with Active mobility Innovation, Science and Policy Intervention.
          </p>
        
        <ProductMetrics />
      </div>
    </section>
  )
}

const UsedBy = () => {
  return (
    <section className={clsx(seCss["section--odd"])}>
      <section
        className={clsx(seCss["section--inner"], seCss["section--column"])}
      >
        <div className={seCss.section__header}>
          <p className={clsx(seCss.section__subtitle)}>
            
            The NNCF works to ensure that benefits of active mobility reaches one and all.


          </p>
          <h1>Our Focus</h1>
        </div>
        <div className={ubCss.logos}>
          {usedByLogos.map((logo) => (
            <div key={logo.alt} className={ubCss.logo__item}>
            
              <h2>{logo.name}</h2>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
 

const Team = () => {
  return (
    <section className={clsx(seCss["section--odd"])}>
      <section
        className={clsx(seCss["section--inner"], seCss["section--column"])}
      >
        <h2
          className={clsx(seCss.section__title, seCss["section__title--wide"])}
        >
          The NNCF  team
        </h2>
        <div className={clsx(paCss.flex__section, teCss.team__people)}>
          <div className={clsx(paCss.half__section, teCss.team__people__text)}>
            <p>
              NNCF  is a non profit company started with the intention to promote active mobility innovation.
            </p>
            <p>
              Our team is having 15 years of experience in the field of active mobility.
            </p> 
          </div>
          
         
            <div className={teCss.team__article__details}>
              <div>
                <img
                  src="/img/pages/about-us/murali.png"
                  alt="Murali HR photo"                 
                />
              </div>
              <div className={teCss.team__article__text}>
                <p className={teCss.team__article__author}>Murali HR </p>
                <p className={teCss.team__article__position}>
                  CEO 
                </p>
              </div>
            </div> 

            <div className={teCss.team__article__details}>
              <div>
                <img
                  src="/img/pages/about-us/sri.png"
                  alt="Miguel Arregui photo"
                  width="100"
                  height="100"
                />
              </div>
              <div className={teCss.team__article__text}>
                <p className={teCss.team__article__author}>Sridhara Aghalaya</p>
                <p className={teCss.team__article__position}>
                  Product Design Head
                </p>
              </div>
            </div>

            <div className={teCss.team__article__details}>
              <div>
                <img
                  src="/img/pages/about-us/man.png"
                  alt="Miguel Arregui photo"
                  width="100"
                  height="100"
                />
              </div>
              <div className={teCss.team__article__text}>
                <p className={teCss.team__article__author}>Manoj</p>
                <p className={teCss.team__article__position}>
                 E- Bicycle  Designer
                </p>
              </div>
            </div>

            <div className={teCss.team__article__details}>
              <div>
                <img
                  src="/img/pages/about-us/nan.png"
                  alt="Miguel Arregui photo"
                  width="100"
                  height="100"
                />
              </div>
              <div className={teCss.team__article__text}>
                <p className={teCss.team__article__author}>Nanjunda Palacanda</p>
                <p className={teCss.team__article__position}>
                  Manufacturing Specialist
                </p>
              </div>
            </div>
        </div>
        <div className={teCss.team__work}>
          <div className={teCss.team__work__text}>
          Help fund, shape, and expand our  work toward a healthy planet  and active citizens.
          </div>
          <div className={teCss.team__work__cta}>
            <Button variant="primary" to="https://rzp.io/l/nammacyclesupport">
              Donate
            </Button>
          </div>
        </div>
      </section>
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
<div>    
  <Layout canonical="/about-us" description={description} title={title}>
    
      <Top />      
      <UsedBy />
      <Team />
      <Press />
  </Layout>
</div>

  )
}

export default AboutUsPage
