import {MovieType} from "../types/movieTypes"

export default function Movie({title, genre, rating}: MovieType) {
    return (
        <div>
            {title}
            {genre}
            {rating}
        </div>
    )
}
