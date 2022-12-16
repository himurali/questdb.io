/* eslint-disable */
import clsx from "clsx" 
import Highlight from "../components/Highlight"
import React, { useCallback, useEffect, useState } from "react"

import customFields from "../config/customFields"

import Button from "@theme/Button"
import Chevron from "@theme/Chevron"
import Layout from "../theme/Layout"
import useWindowWidth from "@theme/useWindowWidth"
import SvgImage from "../components/SvgImage" 
 
import feCss from "../css/index/feature.module.css"
import inCss from "../css/index/integration.module.css" 
import meCss from "../css/index/menu.module.css"
import shCss from "../css/index/showcase.module.css"
import usCss from "../css/index/usp.module.css"
import prCss from "../css/property.module.css"
import seCss from "../css/section.module.css"
import PgLogo from "../assets/img/pages/index/integrations/pg.svg"
import GrafanaLogo from "../assets/img/pages/index/integrations/grafana.svg"
import KafkaLogo from "../assets/img/pages/index/integrations/kafka.svg"
import PythonLogo from "../assets/img/pages/index/integrations/python.svg"
import PandasLogo from "../assets/img/pages/index/integrations/pandas.svg"
import InfluxdataLogo from "../assets/img/pages/index/integrations/influxdata.svg"
import TableauLogo from "../assets/img/pages/index/integrations/tableau.svg"
import PlotlyLogo from "../assets/img/pages/index/integrations/plotly.svg"
import MindsdbLogo from "../assets/img/pages/index/integrations/mindsdb.svg"
import CubeLogo from "../assets/img/pages/index/integrations/cube.svg"
// import DockerLogo from "../assets/img/pages/index/docker.svg"
import SearchTimeIcon from "../assets/img/pages/index/searchTime.svg"
import SliceTimeIcon from "../assets/img/pages/index/sliceTime.svg"
import NavigateTimeIcon from "../assets/img/pages/index/navigateTime.svg"
import MergeTimeIcon from "../assets/img/pages/index/mergeTime.svg"

//

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends React.Component  {
  render() {
      return (
          <Carousel>
             <div>
                  <img src="https://res.cloudinary.com/dsmfsfyci/image/upload/v1671182873/nncfwebdocu/leadride_ljbh2m.png" />
                 
                  <a className="legend"   href="/leadride" >
                  Join Lead Ride
                        </a> 
              </div>
               <div>
                  <img src="https://res.cloudinary.com/dsmfsfyci/image/upload/v1671182855/nncfwebdocu/shecycles_zpqgvr.png" />
                
                  <a className="legend"   href="/shecycles" >
                  Enable She Cycles
                        </a> 
              </div>

              <div>
                  <img src="https://res.cloudinary.com/dsmfsfyci/image/upload/v1671182413/nncfwebdocu/Lead_RideFInal_gcatdq.png" />
                                  
                        <a className="legend"   href="/bob" >
                          Innovate with us
                        </a> 
              </div>           
             
          </Carousel>
      );
  }
}; 
const FeatureTabs = () => {
  const [opened, setOpened] = useState<"digital" | "realtime" | "integration">(
    "digital",
  )
  const handleClickIs = useCallback(() => {
    setOpened("digital")
  }, [])
  const handleClickGoodFor = useCallback(() => {
    setOpened("realtime")
  }, [])
  const handleClickIsNot = useCallback(() => {
    setOpened("integration")
  }, [])

  return (
    <section className={clsx(seCss.section, seCss["section--odd"])}>
      <div className={clsx(seCss["section--inner"], seCss["section--center"])}>
        <h2
          className={clsx(
            seCss.section__title,
            seCss["section__title--wide"],
            "text--center",
          )}
        >
        WORK WITH US

        </h2>

        <div
          className={clsx(
            seCss.section__footer,
            seCss["section__footer--feature-tabs"],
          )}
        >
          <div className={meCss.menu__list}>
            <Button
              className={meCss.menu__button}
              onClick={handleClickIs}
              size="small"
              variant={opened === "digital" ? "primary" : "tertiary"}
            >
              Individual
            </Button>
            <Button
              className={meCss.menu__button}
              onClick={handleClickGoodFor}
              size="small"
              variant={opened === "realtime" ? "primary" : "tertiary"}
            >
              Government
            </Button>
            <Button
              className={meCss.menu__button}
              onClick={handleClickIsNot}
              size="small"
              variant={opened === "integration" ? "primary" : "tertiary"}
            >
              Private Sector
            </Button>
          </div>

          <div className={meCss.menu__content}>
            <div
              className={clsx(meCss.menu__panel, {
                [meCss["menu__panel--active"]]: opened === "digital",
              })}
            >
              <p className={prCss.property}>Do research with us </p>
              <p className={prCss.property}>Volunteer for events</p>
              <p className={prCss.property}>Talk about us in your community</p>
              <p className={prCss.property}>
                Host us for a talk in your community
              </p>
              <p className={prCss.property}>Donate and support us</p>

              <Button
                className={meCss.menu__cta}
                to="https://github.com/questdb/questdb#try-questdb"
              >
                Join us  &gt;
              </Button>
            </div>

            <div
              className={clsx(meCss.menu__panel, {
                [meCss["menu__panel--active"]]: opened === "realtime",
              })}
            >
              <p className={prCss.property}>Active Mobility Workshops</p>
              <p className={prCss.property}>Active Mobility Planning</p>
              <p className={prCss.property}>Active Mobility System Design </p>
              <p className={prCss.property}>Active Mobility Roadmap - Enabling Cycling for the state</p>
              <p className={prCss.property}>Active Mobility Tourism - Cycle City </p>

              <Button
                className={meCss.menu__cta}
                to="https://github.com/questdb/questdb#try-questdb"
              >
                Talk to us today &gt;
              </Button>

            </div>

            <div
              className={clsx(meCss.menu__panel, {
                [meCss["menu__panel--active"]]: opened === "integration",
              })}
            >
              <p className={prCss.property}>Support a Program </p>
              <p className={prCss.property}>Organize Group Bicycle Ride </p>
              <p className={prCss.property}>Organize Wellness Sessions for Employees</p>
              <p className={prCss.property}>Involve in R&D for Acctive Mobility Innovation </p>
              <p className={prCss.property}>Enable Active Mobility in Your Campus or Around Your Campus</p>

              <Button
                className={meCss.menu__cta}
                to="https://github.com/questdb/questdb#try-questdb"
              >
                Lets move  &gt;
              </Button>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

const integrations: Array<{
  label: string
  image: React.ElementType
  title: string
}> = [
  { image: TableauLogo, title: "BBMP logo", label: "BBMP" },
  { image: GrafanaLogo, title: "Karnataka Tourism logo", label: "Karnataka Tourism" },
  { image: KafkaLogo, title: "DULT logo", label: "DULT" },
  { image: PythonLogo, title: "Sports Dept logo", label: "Sports Dept" },
  { image: PandasLogo, title: "Accenture logo", label: "Accenture" },
  { image: InfluxdataLogo, title: "CISCO logo", label: "CISCO" },
  { image: PgLogo, title: "Decathlon logo", label: "Decathlon" },
  { image: MindsdbLogo, title: "India Post logo", label: "India Post" },
  { image: CubeLogo, title: "VMWARE logo", label: "VMWARE" },
  { image: PlotlyLogo, title: "Discovery Village logo", label: "Discovery Village" },


]

const Integration = () => (
  <section
    className={clsx(
      seCss.section,
      seCss["section--inner"],
      seCss["section--center"],
    )}
  >
    <h2
      className={clsx(
        seCss.section__title,
        seCss["section__title--wide"],
        "text--center",
      )}
    >
      We have worked with the following
    </h2>

    <div className={inCss.integration}>
      {integrations.map(({ label, image, title }, index: number) => {
        const Image = image
        return (
          <div key={index} className={inCss.integration__item}>
            <SvgImage image={<Image />} title={title} />
            {label}
          </div>
        )
      })}
    </div>
  </section>
)

const Usp = () => (


  <section className={clsx(seCss.section, seCss["section--odd"])}>
<br/><br/>

  <h1
    className={clsx(
      seCss.section__title,
      seCss["section__title--wide"],
      "text--center",
    )}

  >               {"\n"}  Our Programs

  </h1>

<p   className={clsx(

    "text--center",
  )}>  We are a section 8 non profit company working in the space of Sustainability and Innovation We have pioneered many movements in the space of Active Mobility and Sustainability.
</p>

    <div className={seCss["section--inner"]}>

      <div className={usCss.usp}>

        <div className={usCss.usp__inner}>
          <img
            alt="Speedometer"
            className={usCss.usp__illustration}
            height={113}
            src="https://images.unsplash.com/photo-1496147539180-13929f8aa03a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            width={176}
          />

          <h2 className={usCss.usp__title}>Bharath Open Bike </h2>

          <p className={usCss.usp__description}>Innovation Vehicles for
Commons </p>
          <p className={usCss.usp__description}>Design for Manufacturing</p>
          <p className={usCss.usp__description}>Active Mobility Ecosystem</p>
          <p className={usCss.usp__description}>Transition to Active Mobility Vehicles</p>
        
          <Button
              variant="primary"
              href="/bob"
              className={meCss.menu__button}
              newTab={false}
            >
                                Bharath Open Bike

            </Button>

        </div>
      </div>

      <div className={clsx(usCss.usp, usCss["usp--wide"])}>
        <div className={usCss.usp__inner}>
          <img
            alt="A code editor with a chart that shows the result of the query"
            className={usCss.usp__illustration}
            height={113}
            src="https://images.unsplash.com/photo-1585822797375-2a38044b8499?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            width={176}
          />

          <h2 className={usCss.usp__title}>She Cycles - Active Mobility For Women </h2>

          <p className={usCss.usp__description}>
          Empower all women and girls. 

          </p>
          <p className={usCss.usp__description}>
          Ensure inclusive and equitable mobility design
          </p>
          <p className={usCss.usp__description}>Enable  ability of women  to move about freely and safely.</p>
          <p className={usCss.usp__description}>Shaping Women’s Access to Opportunities</p>
          <p className={usCss.usp__description}> Highlighting women’s perspectives .</p>
          <p className={usCss.usp__description}> Involve women in  decision-making table.</p>

          <p> </p>

          <Button
              variant="primary"
              href="/shecycles"
              className={meCss.menu__button}
              newTab={false}
            >
                                She Cycles

            </Button>

        </div>


      </div>

      <div className={usCss.usp}>
        <div className={usCss.usp__inner}>
          <img
            alt="A code editor containing a SQL statement"
            className={usCss.usp__illustration}
            height={113}
            src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            width={176}
          />

          <h2 className={usCss.usp__title}>Lead   Ride  </h2>

          <p className={usCss.usp__description}>
          Convene connect active mobility minds
          </p>
          <p className={usCss.usp__description}>Collaborate -  Join hands to bring in knowledge and action in mobility space </p>
          <p className={usCss.usp__description}>
          Champion -   give voice to active mobility
          </p>
          <p className={usCss.usp__description}>Celebrate - celebrate by cycling together</p>
        
          <p> </p>

    

          <Button
              variant="primary"
              href="/leadride"
              className={meCss.menu__button}
              newTab={false}
            >
                                Lead Now

            </Button>
        </div>
      </div>

    </div>
  </section>
)

const Cards = () => (
  <section className={clsx(seCss.section, seCss["section--odd"])}>
    <div className={clsx(seCss["section--inner"], seCss["section--center"])}>
      <h3
        className={clsx(
          seCss.section__title,
          feCss["section__title--wide"],
          "text--center",
        )}
      >
        Our Purpose
      </h3>

      <div
        className={clsx(
          seCss.section__footer,
          seCss["section__footer--feature-cards"],
        )}
      >
        <div className={feCss.feature}>
          <h3 className={feCss.feature__header}>
          Be an awesome partner for the public, private sector and communities to enable active mobility missions.
          </h3>
          <p className={feCss.feature__content}>
          We aim to bring  a transformational experience in Active Mobility  ; With a decade of experience we understand the challenges and opportunities that lie ahead for active mobility in developing countries.

          </p>
        </div>

        <div className={feCss.feature}>
          <h3 className={feCss.feature__header}>Revolutionize the Bicycle industry by Innovation
</h3>
          <p className={feCss.feature__content}>
          We are working with the best of the design and manufacturing leaders to enable democratization of manufacturing of Active Mobility Vehicles. We are designing the stack for building the best of the products in India through Open Innovation and Collaboration.
          </p>
        </div>

        <div className={feCss.feature}>
          <h3 className={feCss.feature__header}>Amplify positive social change
</h3>
          <p className={feCss.feature__content}>
            We use public mobilization and storytelling to help the leading organizations, activists, businesses, and philanthropies in Active Mobility initiatives that can shift policies and change public narratives when it matters most.
          </p>
        </div>

        <div className={feCss.feature}>
          <h3 className={feCss.feature__header}>Advocate for an equitable Active Mobility future
</h3>
          <p className={feCss.feature__content}>
          NNCF works toward a future where the needs of vulnerable populations with limited mobility (low-income, the underprivileged, minorities, the disability community, seniors, and youth) are central in transportation planning.
.
          </p>
        </div>

        <div className={feCss.feature}>
          <h3 className={feCss.feature__header}>Foster a vibrant community of passionate cyclists
</h3>
          <p className={feCss.feature__content}>
            Committed to   advocacy and community-led approaches for creating sustainable change.
          </p>
        </div>

        <div className={feCss.feature}>
          <h3 className={feCss.feature__header}>
Achieve enduring Active Mobility success and sustained growth          </h3>
          <p className={feCss.feature__content}>
            We want to be a “Bicycle ” force for that creates sustainable future.
          </p>
        </div>
      </div>
    </div>
  </section>
)


const S = [3, 1, 6, 10]
const M = [3, 0, 4, 8]
const L = [4, 0, 4, 8]

const getTopByIndex = (m: number[], index: 1 | 2 | 3 | 4): number => {
  const scale = {
    1: 25 * (m[0] ?? 0),
    2: -25 * (m[1] ?? 0),
    3: -25 * (m[2] ?? 0),
    4: -25 * (m[3] ?? 0),
  }

  return scale[index] ?? 0
}

const searchQuery = `DDDDDDDDDDDD`

const sliceQuery = `CCCCCCCCCC`

const navigateQuery = `BBBBBBB`

const mergeQuery = `AAAAAAAAA`

type Index = 1 | 2 | 3 | 4

const QueryScroller = () => {
  const [top, setTop] = useState(S)
  const [index, setIndex] = useState<Index>(2)
  const windowWidth = useWindowWidth()
  const handleClick1 = useCallback(() => {
    setIndex(1)
  }, [])
  const handleClick2 = useCallback(() => {
    setIndex(2)
  }, [])
  const handleClick3 = useCallback(() => {
    setIndex(3)
  }, [])
  const handleClick4 = useCallback(() => {
    setIndex(4)
  }, [])
  const handleUpClick = useCallback(() => {
    setIndex(Math.max(index - 1, 1) as Index)
  }, [index])
  const handleDownClick = useCallback(() => {
    setIndex(Math.min(index + 1, 4) as Index)
  }, [index])

  useEffect(() => {
    if (windowWidth != null && windowWidth < 622) {
      setTop(S)
      return
    }

    if (windowWidth != null && windowWidth < 800) {
      setTop(M)
      return
    }

    setTop(L)
  }, [windowWidth])

  return (
    <section
      className={clsx(
        seCss.section,
        seCss["section--inner"],
        seCss["section--center"],
        seCss["section--showcase"],
      )}
    >
      <h2
        className={clsx(
          seCss.section__title,
          seCss["section__title--wide"],
          "text--center",
        )}
      >
        How we deliver value and create impact ?
      </h2>

      <p
        className={clsx(
          seCss.section__subtitle,
          seCss["section__subtitle--narrow"],
          "text--center",
        )}
      >
        We are a purpose driven organization that is having a process and also focus on the impact.
      </p>

      <div className={shCss.showcase}>
        <div className={shCss.showcase__inner}>
          <div
            className={clsx(shCss.showcase__chevron)}
            onClick={handleUpClick}
            style={{ visibility: index === 1 ? "hidden" : "visible" }}
          >
            <Chevron />
          </div>
          <div className={clsx(shCss.showcase__left)}>
            <div
              className={clsx(
                shCss.showcase__offset,
                shCss[`showcase__${index}`],
              )}
              style={{ top: getTopByIndex(top, index) }}
            >
              <Highlight code={searchQuery} />
              <Highlight code={`-- Search time\n${searchQuery}`} />
              <Highlight code={sliceQuery} />
              <Highlight code={`-- Slice time\n${sliceQuery}`} />
              <Highlight code={navigateQuery} />
              <Highlight code={`-- Navigate time\n${navigateQuery}`} />
              <Highlight code={mergeQuery} />
              <Highlight code={`-- Merge time\n${mergeQuery}`} />
            </div>
          </div>
          <div
            className={clsx(
              shCss.showcase__chevron,
              shCss["showcase__chevron--bottom"],
            )}
            onClick={handleDownClick}
            style={{ visibility: index === 4 ? "hidden" : "visible" }}
          >
            <Chevron />
          </div>
          <div className={shCss.showcase__right}>
            <div
              className={clsx(shCss.showcase__button, {
                [shCss["showcase__button--active"]]: index === 1,
              })}
              onClick={handleClick1}
            >
              <h3 className={shCss.showcase__header}>
                <SvgImage
                  image={<SearchTimeIcon className={shCss.showcase__icon} />}
                  title="Magnifying glass icon"
                />
                Empathy & System Thinking
              </h3>
              <p className={shCss.showcase__description}>
                AAAAAAAAAAAA
              </p>
            </div>

            <div
              className={clsx(shCss.showcase__button, {
                [shCss["showcase__button--active"]]: index === 2,
              })}
              onClick={handleClick2}
            >
              <h3 className={shCss.showcase__header}>
                <SvgImage
                  image={<SliceTimeIcon className={shCss.showcase__icon} />}
                  title="Knife icon"
                />
                Define Goals &
              </h3>
              <p className={shCss.showcase__description}>
              AAAAAAAAAAAA              </p>
            </div>

            <div
              className={clsx(shCss.showcase__button, {
                [shCss["showcase__button--active"]]: index === 3,
              })}
              onClick={handleClick3}
            >
              <h3 className={shCss.showcase__header}>
                <SvgImage
                  image={<NavigateTimeIcon className={shCss.showcase__icon} />}
                  title="Indication arrow icon"
                />
                Strategy & Action Plan
              </h3>
              <p className={shCss.showcase__description}>
              BBBBBBBBBBBB
              </p>
            </div>
            <div
              className={clsx(shCss.showcase__button, {
                [shCss["showcase__button--active"]]: index === 4,
              })}
              onClick={handleClick4}
            >
              <h3 className={shCss.showcase__header}>
                <SvgImage
                  image={<MergeTimeIcon className={shCss.showcase__icon} />}
                  title="Two overlapping squares"
                />
                Execute & Impact
              </h3>
              <p className={shCss.showcase__description}>
               CCCCCCCCCC
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Home = () => (
  <Layout
    canonical=""
    description={customFields.description}
    title="NNCF | Change the Future of Mobility"
    replaceTitle
  >
   <DemoCarousel /> 
   

    <Usp />
    <Integration />
    <FeatureTabs />
    <QueryScroller />
    <Cards />
  </Layout>
)

export default Home
