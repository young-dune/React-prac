import Movie from "./components/Movie"
import { dummy } from "./MovieDummy"

export default function App() {
  return (
    <div>
      <div className="Wrapper">
        {
          dummy.results.map((e) => {
            return (
              <Movie
                title={e.title}
                poster_path={e.poster_path}
                vote_average={e.vote_average}
              />
            )
          })
        }
      </div>
    </div>
  )
}
