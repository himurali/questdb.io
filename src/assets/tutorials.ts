import type { Content, FrontMatter, Metadata } from "@theme/BlogPostPage"

export enum FeatureType {
  RESOURCE = "resource",
  COMPARISON = "comparison",
}

type FlatTutorial = FrontMatter &
  Readonly<{
    content: string
    date: string
    link: string
    featureType?: FeatureType
  }>

const tutorials: FlatTutorial[] = [
   
  {
    author: "Kovid Rathee",
    date: "2020-12-17",
    content:
      "Unraveling the Cycling City bundles the state-of-the-art knowledge that emerges from research and practice on the Dutch cycling system.",
    link:
      "https://www.coursera.org/learn/unraveling-the-cycling-city?action=enroll&aid=true",
    title: "Unraveling the Cycling City    ",
    featureType: FeatureType.COMPARISON,
    image: "https://i.imgur.com/hUar1rT.png",
  },
  {
    author: "Chris Bruntlett & Melissa Bruntlett ",
    date: "2022-02-25",
    featureType: FeatureType.COMPARISON,

    content:
      "In this video, Chris describes   : how to build the mid sized cycling city .",
    link: "https://www.youtube.com/watch?v=24bs68u62pA",
    image: "/img/tutorial/shared/og-youtube.png",
    title: "Building the Mid-sized Cycling City",
  },
  {
    author: "humankind  ",
    date: "2020-08-24",
    content:    "Designing the Cycling City The Masterclass",
    featureType: FeatureType.COMPARISON,

    link: "https://www.humankind.city/event-details/dtcc-masterclass",
    image: "https://static.wixstatic.com/media/e3fe68_37b0eef37a2847bfa41803b18b5908ff~mv2.png/v1/fill/w_979,h_552,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/e3fe68_37b0eef37a2847bfa41803b18b5908ff~mv2.png",
    title: "Designing the Cycling City The Masterclass",
  }, 
  {
    author: "Robert ",
    date: "2020-06-19",
    featureType: FeatureType.RESOURCE,

    content:
      "In this video, Robert recently made a road trip to visit the inspirational city of Utrecht where they do things a little differently. .",
    link: "https://www.youtube.com/watch?v=7sGy4kS9T2w",
    image: "https://i.imgur.com/1DSiTl2.jpg",
    title: "A 'Fully Charged' City Built Around Bicycles?",
  },
  {
    author: "Streetfilms  ",
    date: "2020-05-20",
    featureType: FeatureType.RESOURCE,
    content:
      "you live in a city that doesn't have good bike planning or infrastructure this film will equally inspire and depress you!",
    link:       "https://www.youtube.com/watch?v=Boi0XEm9-4E",
    image: "https://i.imgur.com/LEVTnps.jpg",
    title: "Utrecht: Planning for People & Bikes, Not for Cars ",
  },
]

export type Tutorial = Readonly<{
  content: Readonly<{
    frontMatter: Omit<FlatTutorial, "link" | "date"> & { description?: string }
    metadata: Omit<Metadata, "title" | "tags"> & { truncated?: string }
    toc?: Content["toc"]
  }>
  external: true
}>

const normalize = (data: FlatTutorial[]): Tutorial[] =>
  data.map(({ author, content, date, featureType, image, link, title }) => ({
    content: {
      frontMatter: {
        author,
        content,
        featureType,
        image,
        title,
      },
      metadata: {
        date,
        formattedDate: date.toString(), // TODO format date
        permalink: link,
        truncated: "true",
      },
    },
    external: true,
  }))

export default normalize(tutorials)
