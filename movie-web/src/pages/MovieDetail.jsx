import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { IMG_BASE_URL } from '../components/Movie';

export default function MovieDetail() {
    const { title } = useParams();
    const { state } = useLocation();

    return (
        <div className='page-container'>
            <div style={{ display: "flex" }}>
                <img
                    style={{ width: "300px", height: "450px" }}
                    src={IMG_BASE_URL + state.poster_path}
                    alt="영화포스터" />
                <div>
                    <div style={{ fontSize: "40px", margin: "20px", }}>{title}</div>
                    <p style={{ fontSize: "16px", margin: "10px", lineHeight: "1.8", textIndent: "10px" }}>
                        {state.overview}
                    </p>
                </div>
            </div>
        </div>
    )
}
