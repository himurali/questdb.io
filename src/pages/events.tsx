import clsx from "clsx"
import React, {   useRef } from "react"
 
import Layout from "../theme/Layout"

import caCss from "../css/events/card.module.css"
import joCss from "../css/events/job.module.css"
import liCss from "../css/events/list.module.css"
import seCss from "../css/section.module.css"

type Opening = {
  href: string
  title: string
  location: string
}

const currentOpenings: Opening[] = [
  {
    href: "/events/lead-blr-ride/",
    title: "Lead Blr   Ride",
    location: "Vidhana Soudha",
  },

  {
    href: "/events/manipal-ride/",
    title: "Wellness Ride",
    location: "Blr",
  },

  {
    href: "/events/puneeth-ride/",
    title: "Puneeth Memorial Ride",
    location: "Blr",
  },
  {
    href: "/events/tree-festival/",
    title: "Tree Festival",
    location: "Nandi Hills",
  },

  {
    href: "/events/senior-backend-engineer-python/",
    title: "Sankey Ride",
    location: "Cubbon Park",
  },

  

  {
    href: "/events/technical-content-writer/",
    title: "Technical Content Writers",
    location: "Remote",
  },

  {
    href: "/events/solution-engineer/",
    title: "Solution Engineer",
    location: "Remote",
  },
  {
    href: "/events/ux-designer/",
    title: "UX Designer",
    location: "Remote",
  },
]

const EventsPage = () => {
  const title = "Careers at QuestDB"
  const description =
    "Join us at QuestDB to build breakthrough technology that will power the infrastructure of tomorrow."
  const scrollAnchorRef = useRef<HTMLDivElement | null>(null)
  

  return (
    <Layout canonical="/careers" description={description} title={title}>
      <section
        className={clsx(seCss["section--inner"], seCss["section--center"])}
      >
        <div className={caCss.card}>
          <div className={caCss.card__side}>
            <h1 className={caCss["card__title--important"]}>Careers</h1>
            <p className={caCss.card__content}>
              We help developers handle explosive amounts of data while getting
              them started in just a few minutes with the fastest and most
              accessible time series database.
            </p>
            
          </div>
          <div
            className={clsx(
              caCss.card__side,
              caCss["card__side--illustration"],
            )}
          >
            <img
              alt="Illustration of team collaboration"
              height={201}
              src="/img/pages/careers/teamCollaboration.svg"
              width={305}
            />
          </div>
        </div>

        

        <div className={caCss.scrollAnchor} ref={scrollAnchorRef} />

        <div className={caCss.card}>
          <div className={caCss.card__side}>
            <h2 className={caCss.card__title}>Current openings</h2>
          </div>

          <div className={clsx(caCss.card__side, caCss["card__side--center"])}>
            {currentOpenings.map(({ href, title, location }) => (
              <a key={href} className={joCss.job} href={href}>
                <h3 className={joCss.job__title}>{title}</h3>
                <p className={joCss.job__location}>{location}</p>
                <span className={joCss.job__cta}>
                  Details&nbsp;
                  <img
                    alt="Right arrow"
                    height={20}
                    src="/img/pages/careers/arrowRight.svg"
                    width={20}
                  />
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className={clsx(caCss.card, caCss["card--reverse"])}>
          <div
            className={clsx(
              caCss.card__side,
              caCss["card__side--illustration"],
              caCss["card__side--baseline"],
            )}
          >
            <img
              alt="Illustration of a developer with efficient"
              height={230}
              src="/img/pages/careers/timeseriesApplication.svg"
              width={305}
            />
          </div>
          <div className={caCss.card__side}>
            <h2 className={caCss.card__title}>What we offer</h2>
            <ul className={liCss.list}>
              <li className={liCss.list__item}>
                Generous equity options package
              </li>
              <li className={liCss.list__item}>Flexible working hours</li>
              <li className={liCss.list__item}>100% remote</li>
              <li className={liCss.list__item}>
                Freedom of choice for your technical equipment
              </li>
              <li className={liCss.list__item}>
                Wonderful, highly qualified colleagues
              </li>
              <li className={liCss.list__item}>
                Truly international: more than 10 different nationalities
              </li>
              <li className={liCss.list__item}>
                A transparent, collaborative & inclusive culture
              </li>
              <li className={liCss.list__item}>
                Exciting opportunities for career progression as we grow
              </li>
              <li className={liCss.list__item}>
                Little to zero controls combined with autonomous work where you
                set your own pace in a collaborative environment
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default EventsPage
