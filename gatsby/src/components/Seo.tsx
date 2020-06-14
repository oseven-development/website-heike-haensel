/** @format */

import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

interface Props {
  title: string
  description: string
  keywords: string
}

const Seo: React.FC<Props> = ({ title, description, keywords }) => {
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQueryy {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <Helmet
      title={` ${title} | ${site.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: description || site.siteMetadata.description,
        },
        { name: "keywords", content: keywords || site.siteMetadata.keywords },
      ]}
    >
      <html lang="de" />
    </Helmet>
  )
}
export default Seo
