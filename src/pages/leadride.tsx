import clsx from "clsx"
import React, { useCallback, useState } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"

import Button from "@theme/Button"
import Chevron from "@theme/Chevron"
import Layout from "../theme/Layout"
import useResizeObserver from "@theme/useResizeObserver"

import caCss from "../css/customers/card.module.css"
import juCss from "../css/customers/jumbotron.module.css"
import quCss from "../css/customers/quote.module.css"
import seCss from "../css/section.module.css"
import _quotes from "../assets/quotes"

// temporary duplication across customer and enterprise page for quote module

const quotes = _quotes.map(({ author, company, logo, role, text }) => {
  const Quote = () => (
    <div key={company} className={quCss.quote}>
      <div className={quCss.quote__symbol} />

      <div className={quCss.quote__logo}>
        <img
          alt={logo.alt}
          className="responsive-image"
          height={logo.height}
          src={logo.src}
          width={logo.width}
          style={{ top: logo.offset ?? 0 }}
        />
      </div>

      <p className={quCss.quote__content}>{text}</p>

      <p className={quCss.quote__author}>
        <span className={quCss.quote__chevron}>&gt;</span>
        {author}
        <br />
        {role}
        ,&nbsp;
        {company}
      </p>
    </div>
  )

  return Quote
})

type BulletProps = {
  index: number
  onClick: (index: number) => void
  page: number
  viewportSize: number
}

const Bullet = ({ index, onClick, page, viewportSize }: BulletProps) => {
  const handleClick = useCallback(() => {
    onClick(index * viewportSize)
  }, [index, onClick, viewportSize])

  return (
    <span
      className={clsx(quCss.controls__pin, {
        [quCss["controls__pin--selected"]]: page === index,
      })}
      onClick={handleClick}
    />
  )
}

const QUOTE_WIDTH = 350

const LeadRide = () => {
  const title = "Customers"
  const description =
    "Discover how QuestDB is powering the core infrastructure of companies dealing with time-series data"

  const { ref, width } = useResizeObserver<HTMLDivElement>()
  // An "item" is a quote
  // Index in the array of quotes of the item that is "focused"
  const [index, setIndex] = useState(0)
  // How many items we can show on the screen
  const viewportSize = Math.max(1, Math.floor((width ?? 0) / QUOTE_WIDTH))
  // How many items will actually be displayed (can be smaller than viewportSize)
  const viewportCount =
    viewportSize === 0 ? 0 : Math.ceil(quotes.length / viewportSize)
  // Page number
  const page = Math.floor(index / viewportSize)
  // The quotes to show
  const viewportQuotes = quotes.slice(
    page * viewportSize,
    (page + 1) * viewportSize,
  )
  const increaseIndex = useCallback(() => {
    setIndex((index) => Math.min(index + viewportSize, quotes.length - 1))
  }, [viewportSize])
  const decreaseIndex = useCallback(() => {
    setIndex((index) => Math.max(index - viewportSize, 0))
  }, [viewportSize])
  return (
    <Layout canonical="/customers" description={description} title={title}>
      <section className={clsx(seCss.section, seCss["section--odd"])}>
        <div className={juCss.jumbotron}>
          <div className={juCss.jumbotron__left}>
            <h1 className={seCss.section__title}>Lead Ride</h1>
            <p
              className={clsx(
                seCss.section__subtitle,
                juCss.jumbotron__subtitle,
              )}
            >
           Building & Shaping the future, with active movement & active mobility
            </p>
          </div>
          <div className={juCss.jumbotron__illustration}>
            <img
              alt="People co-working on a dashboard"
              height={274}
              src=" https://res.cloudinary.com/dsmfsfyci/image/upload/v1670171760/nncfwebdocu/Lead_Ride_Banner_ehm2f4.png"
              width={250}
            />
          </div>
        </div>
      </section>
      

      <section className={clsx(seCss.section, seCss["section--inner"])}>
        <div className={caCss.card}>
          <div className={caCss.card__illustration}>
            <img
              alt="Aquis logo"
              src="https://img.jakpost.net/c/2020/07/19/2020_07_19_100502_1595132158._large.jpg"
              width={525}
            />
          </div>
          <p className={caCss.card__summary}>
             <h2>Lead Ride For Cities</h2>
              
"Lead ride city" program acts as a bridge to connect the city leadership, business leadership and the youth leadership in transforming the city to healthy and happy cities by making them cycle together.
      <Button className={caCss.card__cta} to="/case-study/aquis/">
              Program Details
            </Button>
             <em className={caCss.card__author}>
               <strong>Sign up Here </strong>
            </em>
            <Button className={caCss.card__cta} to="/case-study/aquis/">
              Sign Up  For Cities
            </Button>
          </p>
        </div>
      </section>

      <section className={clsx(seCss.section, seCss["section--inner"])}>
        <div className={caCss.card}>
          <p className={caCss.card__summary}>
           
          "Lead ride Companies" program acts as a bridge to connect the city leadership, business leadership and the youth leadership in transforming the city to healthy and happy cities by making them cycle together.
            <em className={caCss.card__author}>
              - <strong>Jon Bratseth</strong>, VP Architect, Yahoo
            </em>
            <Button className={caCss.card__cta} to="/case-study/yahoo/">
            Lead Ride For Companies
            </Button>
          </p>

          <div className={caCss.card__illustration}>
            <img
              alt="Yahoo logo"
              height={400}
              
              src="https://bikeleague.org/sites/default/files/styles/node_gallery_display/public/node_gallery/bike-pic.jpg"
          
              width={525}
            />
          </div>
        </div>
      </section>
      <section className={clsx(seCss.section, seCss["section--inner"])}>
        <div className={caCss.card}>
          <div className={caCss.card__illustration}>
            <img
              alt="Logo for liveaction AI's network threat detection suite ThreatEye"
              height={360}
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/1e/36.jpg"
                 width={640}
            />
          </div>

          <p className={caCss.card__summary}>
            
          "Lead ride Academia" program acts as a bridge to connect the city leadership, business leadership and the youth leadership in transforming the city to healthy and happy cities by making them cycle together.

            <em className={caCss.card__author}>
              - <strong>Randy Caldejon</strong>, VP, ThreatEye Product
              Development, LiveAction
            </em>
            <Button className={caCss.card__cta} to="/case-study/liveaction/">
            Lead Ride For Academia
            </Button>
          </p>
        </div>
      </section>
      
      
      <section className={clsx(seCss.section, seCss["section--inner"])}>
        <div className={caCss.card}>
          <p className={caCss.card__summary}>
          
          "Lead ride commnities" program acts as a bridge to connect the city leadership, business leadership and the youth leadership in transforming the city to healthy and happy cities by making them cycle together.

            <Button className={caCss.card__cta} to="/case-study/toggle/">
              Lead Ride For Communities
            </Button>

            <em className={caCss.card__author}>
              - <strong>Armenak Mayalian</strong>, CTO, Toggle
            </em>
            <Button className={caCss.card__cta} to="/case-study/toggle/">
              Lead Ride For Communities
            </Button>
         
          </p>
          <div className={caCss.card__illustration}>
            <img
              alt="Comparison of AI and chess to investing"
              height={453}
              src="http://content.bikeroar.com/system/content/000/081/078/original/bike-communities-road-bikes-raised-in-the-air.jpg"
              width={600}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default LeadRide
