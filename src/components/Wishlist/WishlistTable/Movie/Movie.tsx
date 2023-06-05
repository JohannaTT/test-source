import React, { useEffect, useState } from "react";
import "./Movie.scss";

interface IMovie{
  title: string
  cover: string
}

const Movie = ({ title, cover }:IMovie) => {
  const [ image, setImage ] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const image = await import(`../../../../assets/${cover}`)
      setImage(image.default)
    }
    fetchImage()
  },[ cover ])

  return (
    <div className="Movie">
      <div className="MovieCard">
        <small className="newTag">New</small>
        <img src={image} alt="Movie cover" />
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Movie;