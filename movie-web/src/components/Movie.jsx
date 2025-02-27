import React from 'react'

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
// 숨겨진 이미지 코드 https://developers.themoviedb.org/3/getting-started/images TMDB 공식 문서 확인

export default function Movie({ title, poster_path, vote_average }) {
    return (
        <div className='movie-wrapper'>
            <img src={IMG_BASE_URL + poster_path} alt='영화포스터' />
            <div className="movie-info">
                <h4>{title}</h4>
                <span>{vote_average}</span>
            </div>
        </div>
    )
}
