import clsx from "clsx"
import React, { useCallback, useState } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"

import Button from "@theme/Button"
import Chevron from "@theme/Chevron"
import Layout from "../theme/Layout"
import Subscribe from "../components/Subscribe"
import useResizeObserver from "@theme/useResizeObserver"

import clCss from "../css/enterprise/cloud.module.css"
import caCss from "../css/enterprise/card.module.css"
import ilCss from "../css/enterprise/illustration.module.css"
import peCss from "../css/enterprise/performance.module.css"
import quCss from "../css/enterprise/quote.module.css"
import prCss from "../css/property.module.css"
import seCss from "../css/section.module.css"
import style from "../css/enterprise/style.module.css"
import _quotes from "../assets/quotes"


const quotes = _quotes.map(({ author, company, logo, role, text }) => {
  const Quote = () => (
    <div key={company} className={quCss.quote}>
      <div className={quCss.quote__symbol} />

      <div className={quCss.quote__logo}>

      <h3>{logo.alt}</h3>
      
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

const Enterprise = () => {
  const title = "Urban Design"
  const description =
    "The fastest open source time-series database for organizations, on premise or on the cloud."

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
    <Layout canonical="/enterprise" description={description} title={title}>
      <section className={seCss["section--inner"]}>
        <div className={seCss.section__header}>
          <h1
            className={clsx(
              seCss.section__title,
              seCss["section__title--accent"],
            )}
          >
            Urban Design & Active Mobility
          </h1>

          <p
            className={clsx(
              seCss.section__subtitle,
              seCss["section__subtitle--accent"],
              "text--center",
            )}
          >
            Understanding the link between health, safety, community with Active Mobility for Urban Areas.
          </p>

          <Subscribe
            placeholder="Work Email"
            submitButtonText="Contact Us"
            provider="enterprise"
            className={style.subscribe}
          />

          <img
            alt="Artistic view of the console with sub-queries"
            className={ilCss.illustration}
            height={394}
            src="https://images.unsplash.com/photo-1541687664971-639c2f8b63f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            width={900}
          />

          <p
            className={clsx(
              seCss.section__subtitle,
              seCss["section__subtitle--accent"],
              "text--center",
            )}
          >
            Active Mobility enables quick wins for everyone - both the private sector and public sector.
          </p>
        </div>
      </section>

      <section className={seCss["section--flex-wrap"]}>
        <div className={caCss.card}>
          <div className={caCss.card__image}>
            <img
              alt="Chat icon"
              height={52}
              src="/img/pages/enterprise/chat.svg"
              width={62}
            />
          </div>
          <h2 className={caCss.card__title}>Bicycle Parking</h2>
          <ul className={caCss.card__list}>
            <li className={clsx(prCss.property, caCss.card__item)}>
               Enable bicycle parking facility at important locations 
            </li>
            <li className={clsx(prCss.property, caCss.card__item)}>
              Bicycle rack design
            </li>
          </ul>
        </div>

        <div className={caCss.card}>
          <div className={caCss.card__image}>
            <img
              alt="Lock icon"
              height={58}
              src="/img/pages/enterprise/lock.svg"
              width={42}
            />
          </div>
          <h2 className={caCss.card__title}>Integration with Public Transport</h2>
          <ul className={caCss.card__list}>
            <li className={clsx(prCss.property, caCss.card__item)}>
              Last mile connectivity
            </li>
            <li className={clsx(prCss.property, caCss.card__item)}>
              Cycle Path to metro/bus stand
            </li>
            <li className={clsx(prCss.property, caCss.card__item)}>
              Corporate Connect
            </li>
          </ul>
        </div>

        <div className={caCss.card}>
          <div className={caCss.card__image}>
            <img
              alt="Cog icon"
              height={48}
              src="/img/pages/enterprise/cog.svg"
              width={45}
            />
          </div>
          <h2 className={caCss.card__title}>Safety</h2>
          <ul className={caCss.card__list}>
            <li className={clsx(prCss.property, caCss.card__item)}>
              Safe Pedestrian Crossing
            </li>
            <li className={clsx(prCss.property, caCss.card__item)}>
              Signage for Vehicles
            </li>
            <li className={clsx(prCss.property, caCss.card__item)}>
              Slow Lane roads 
            </li>
          </ul>
        </div>

        <div className={caCss.card}>
          <div className={caCss.card__image}>
            <img
              alt="Rocket icon"
              height={56}
              src="/img/pages/enterprise/rocket.svg"
              width={56}
            />
          </div>
          <h2 className={caCss.card__title}>Dedicate Space</h2>
          <ul className={caCss.card__list}>
            <li className={clsx(prCss.property, caCss.card__item)}>
              Provision for cyclists
            </li>
            <li className={clsx(prCss.property, caCss.card__item)}>
              Networked routes for easy flow
            </li>
          </ul>
        </div>
      </section>

      <section className={seCss["section--inner"]}>
        <div className={peCss.performance__left}>
          <h2 className={peCss.performance__title}>Utrecht Bicycle city in netherlands</h2>
          <p className={peCss.performance__item}>
            <span className={peCss.performance__bullet} />
            Facilitating the last mile 
          </p>
          <p
            className={clsx(
              peCss.performance__item,
              peCss["performance__item--important"],
            )}
          >
            System change in public transport 
          </p>
          <p className={peCss.performance__item}>
            <span className={peCss.performance__bullet} />
            Give way to pedestrians and cyclists on Priority
          </p>
          <p
            className={clsx(
              peCss.performance__item,
              peCss["performance__item--important"],
            )}
          >
           Space-efficiency
          </p>
          <Button className={peCss.performance__cta} href="https://ecf.com/sites/ecf.com/files/Kik.M_Utrecht_A_bicycle_friendly_city.pdf">
            View case study
          </Button>
        </div>
        <div className={peCss.performance__right}>
          <img
            alt="Charts showing the performance improvments when using QuestDB"
            height={311}
            src="https://bicycledutch.files.wordpress.com/2016/04/utrecht2016-08.jpg"
            width={761}
          />
        </div>
      </section>

      <section
        className={clsx(seCss["section--inner"], seCss["section--column"])}
      >
        <h2 className={quCss.title}>Active Mobility for Cities - Design Principles</h2>

        <div className={quCss.carousel} ref={ref}>
          <TransitionGroup component={null}>
            <CSSTransition key={page} timeout={200} classNames="item">
              <div className={quCss.carousel__group}>
                {viewportQuotes.map((Quote) => (
                  <Quote key={quotes.indexOf(Quote)} />
                ))}
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>

        <div className={quCss.controls}>
          <div
            className={clsx(
              quCss["controls__chevron-wrapper"],
              quCss["controls__chevron-wrapper--left"],
              {
                [quCss["controls__chevron-wrapper--hidden"]]: page === 0,
              },
            )}
            onClick={decreaseIndex}
          >
            <Chevron className={quCss.controls__chevron} side="left" />
          </div>

          <div className={quCss.controls__middle}>
            {Array(viewportCount)
              .fill(0)
              .map((_, idx) => (
                <Bullet
                  index={idx}
                  key={idx}
                  onClick={setIndex}
                  page={page}
                  viewportSize={viewportSize}
                />
              ))}
          </div>

          <div
            className={clsx(
              quCss["controls__chevron-wrapper"],
              quCss["controls__chevron-wrapper--right"],
              {
                [quCss["controls__chevron-wrapper--hidden"]]:
                  page === viewportCount - 1,
              },
            )}
            onClick={increaseIndex}
          >
            <Chevron className={quCss.controls__chevron} side="right" />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Enterprise
