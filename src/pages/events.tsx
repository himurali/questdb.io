import clsx from "clsx"
import React, {   useRef } from "react"
 
import Layout from "../theme/Layout"

import caCss from "../css/events/card.module.css"
import joCss from "../css/events/job.module.css" 
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

   
]

const EventsPage = () => {
  const title = "Events at NNCF"
  const description =
    "  Events at NNCF."
  const scrollAnchorRef = useRef<HTMLDivElement | null>(null)
  

  return (
    <Layout canonical="/careers" description={description} title={title}>
      <section
        className={clsx(seCss["section--inner"], seCss["section--center"])}
      >
         

        

        <div className={caCss.scrollAnchor} ref={scrollAnchorRef} />

        <div className={caCss.card}>
          <div className={caCss.card__side}>
            <h2 className={caCss.card__title}>Current Events</h2>
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

         
      </section>
    </Layout>
  )
}

export default EventsPage
