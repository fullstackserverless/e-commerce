import React, { useState } from "react"
import { Rating } from "./"
import { Rate } from "./Rate"

export const ExampleRating = () => {
  const [starsArr, setStarsArr] = useState<number[]>([])
  return <>
    <Rating ratingList={starsArr} />
    <Rate onChange={(stars) => setStarsArr(pr => [...pr, stars])} />
  </>
}