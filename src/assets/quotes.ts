type Quote = {
  website: string
  logo: {
    alt: string
    src: string
    height: number
    width: number
    offset?: number
  }
  text: string
  author: string
  role: string
  company: string
}

const quotes: Quote[] = [
  {
    website: "https://www.airbus.com/",
    logo: {
      alt: "participatory urban planning,",
      src: "/img/pages/customers/cards/airbus.svg",
      height: 56,
      width: 140,
    },
    text:
      "The planners include   opportunity to engage in city-sanctioned tactical urbanism and the whole community or neighbourhood in the planning process. This grassroots approach increases the legitimacy of new urban developments – who could better judge plans and contribute additional ideas to urban planning.",
    author: "Creating the Participatory City",
    role: " ",
    company: "Cities have the capability of providing something for everybody, only because, and only when, they are created by everybody",
  },
  {
    website: "https://www.yahoo.com/",
    logo: {
      alt: "Design Standards For Cities",
      src: "/img/pages/customers/cards/yahoo.svg",
      height: 56,
      width: 140,
    },
    text:
      "Publish Design Standards - Marking a people-first focus for street and public space design.  Cater for all the functions of a street. Create quality places",
    author: "Design Standard Development",
    role: " ",
    company: "Forging Visions - Developing Strategies",
  },
  {
    website: "https://www.keplercheuvreux.com/en/",
    logo: {
      alt: "Comfortable-Appealing",
      src: "/img/pages/customers/cards/kepler.svg",
      height: 56,
      width: 140,
    },
    text:
      " Making Streets safe and comfortable and an aesthetic place ",
    author: "Appealing places",
    role: " ",
    company: "Comfortable / Aesthetic streets",
  },
  {
    website: "https://aquis.eu/",
    logo: {
      alt: "Slow Speed Traffic",
      src: "/img/pages/customers/cards/aquis.svg",
      height: 30,
      width: 100,
      offset: 5,
    },
    text:
      " Reducing the speed within the city enhances the safety of the walkers and also the most vulnerable ",
    author: "Redesign Junctions",
    role: "",
    company: "Upper speed limit for the city",
  },
  {
    website: "https://syndica.io",
    logo: {
      alt: "Maintain Flow",
      src: "/img/pages/customers/cards/syndica.svg",
      height: 30,
      width: 113,
    },
    text:
      "  Maintaining  the flow for walking and cycling is crucial to make cycling infrastructure success. This requires multiple perspectives, radical empathy and engaged neighborhood",
    author: "Ahmed Abbasi",
    role: "Co-Founder/CEO",
    company: "Syndica",
  },
  {
    website: "https://www.copenhagenatomics.com/",
    logo: {
      alt: "Disincentivize Driving",
      src: "/img/pages/customers/logos/ca.svg",
      height: 30,
      width: 113,
    },
    text:
      " we drive too much, and frequently at unsafe speeds   . Need strategies to promote   disincentives to driving ",
    author: "Lasse Tarp",
    role: "Software Group manager",
    company: "Copenhagen Atomics",
  },
  {
    website: "https://www.liveaction.com/",
    logo: {
      alt: "Reward Cycling Behavior",
      src: "/img/pages/customers/logos/liveaction.svg",
      height: 56,
      width: 140,
    },
    text:
      " Voluntary travel behavioural change (VTBC) schemes that use incentives such as rewards, feedback, subsi- dies and public transport discounts.",
    author: "Identify Good Behavior",
    role: " ",
    company: "Reward Good behavior",
  },
  {
    website: "https://www.tqsintegration.com",
    logo: {
      alt: "Provide Dedicated Spaces",
      src: "/img/pages/customers/cards/tqs-integration.svg",
      height: 56,
      width: 140,
    },
    text:
      "   Dedicated bicycle infrastructure in a city will encourage more people to cycle.",
    author: "cycle lanes do not work",
    role: " ",
    company: "",
  },
  {
    website: "https://www.samtec.com/",
    logo: {
      alt: "Visibility of Cyclist/Walkers",
      src: "/img/pages/customers/cards/samtec.svg",
      height: 56,
      width: 140,
    },
    text:
      "Ensure safety of cyclists at critical junctions by providing visibility for cyclists.",
    author: " ",
    role: " ",
    company: " ",
  },
  {
    website: "https://toggle.ai/",
    logo: {
      alt: "Last Mile Connectivity",
      src: "/img/pages/customers/cards/toggle.svg",
      height: 56,
      width: 140,
    },
    text:
      "Last mile connectivity by cycle/ micro mobility to be priority .",
    author: "reduce private vehicle usage to public transport services, increase efficiency of public transport",
    role: " ",
    company: " ",
  },
  {
    website: "https://www.publicissapient.com/",
    logo: {
      alt: "Parking for Safety",
      src: "/img/pages/customers/cards/sapient.svg",
      height: 28,
      width: 140,
    },
    text:
      "  Parking Policy for all buildings to be made mandatory in all the municipal laws.",
    author: "",
    role: " ",
    company: "",
  },
  {
    website: "https://www.turktelekom.com.tr/en",
    logo: {
      alt: "Adequate Greenery",
      src: "/img/pages/customers/logos/turk_telekom.svg",
      height: 56,
      width: 140,
    },
    text:
      "  Cycling needs greenery on the road. Provide green cover for the cyclist. ",
    author: "safe green corridor",
    role: " ",
    company: " more shade and cool environment",
  },
]

export default quotes
