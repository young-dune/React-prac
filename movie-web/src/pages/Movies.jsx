import React from 'react'
import Movie from "../components/Movie"
import { dummy } from "../MovieDummy"

export default function Movies() {
    return (
        <div>
            <div className="movies-container">
                {dummy.results.map((d) => {
                    return (
                        <Movie
                            title={d.title}
                            poster_path={d.poster_path}
                            vote_average={d.vote_average}
                            overview={d.overview}
                        />
                    )
                })}
            </div>
        </div>
    )
}
