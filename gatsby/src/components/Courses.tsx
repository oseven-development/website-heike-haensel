import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Seo } from "../components"

const dateFormat = (input: string, leadingDay: boolean = true): string => {
  const date = new Date(input)
  const d = date.getDate()
  const m = date.getMonth()
  const y = date.getFullYear()

  return leadingDay ? `${d}.${m}.${y}` : `${m}.${y}`
}

const Course = ({ course, enddate, startdate, timeframe, weekday }) => (
  <div className="w-full md:w-1/2 md:px-4 py-2 ">
    <div className="shadow ">
      <div className="bg-tyrian-purple text-white flex flex-col justify-center py-2">
        <h3>Kurs: {course}</h3>
        <span>{weekday}</span>
      </div>
      <div className=" bg-white flex flex-col justify-center py-2">
        <p className="font-bold text-center">{`${dateFormat(
          startdate,
          false
        )} - ${dateFormat(enddate)}`}</p>
        <p className="text-center"> {timeframe}</p>
      </div>
    </div>
  </div>
)

export default () => {
  const {
    allContentfulCourses: { edges },
  } = useStaticQuery(graphql`
    query {
      allContentfulCourses {
        edges {
          node {
            enddate
            startdate
            timeframe
            weekday
            course
          }
        }
      }
    }
  `)

  const [sort, setSort] = React.useState([])
  React.useEffect(() => {
    setSort(
      edges
        .sort((a, b) => a.node.course - b.node.course)
        .map(
          ({ node: { course, enddate, startdate, timeframe, weekday } }) => ({
            course,
            enddate,
            startdate,
            timeframe,
            weekday,
          })
        )
    )
  }, [])

  return (
    <div className="flex flex-row flex-wrap bg-gray-200 md:-mx-4">
      {sort.map(({ course, enddate, startdate, timeframe, weekday }) => (
        <Course
          key={course}
          {...{ course, enddate, startdate, timeframe, weekday }}
        />
      ))}
    </div>
  )
}
