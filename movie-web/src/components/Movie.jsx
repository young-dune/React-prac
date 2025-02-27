import React from 'react'
import { useNavigate } from 'react-router-dom';

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
// 숨겨진 이미지 코드 https://developers.themoviedb.org/3/getting-started/images TMDB 공식 문서 확인

export default function Movie(props) {
    const navigate = useNavigate();
    const onClickMovie = () => {
        navigate(`/movie/${props.title}`, {
            state: props
        })
    }
    return (
        <div className='movie-container' onClick={onClickMovie}>
            <img src={IMG_BASE_URL + props.poster_path} alt='영화포스터' />
            <div className="movie-info">
                <h4>{props.title}</h4>
                <span>{props.vote_average}</span>
                <p style={{display:"none"}}>{props.overview}</p>
            </div>
        </div>
    )
}
