import React, { Component } from 'react'
import './style.css'

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="eng">{props.eng} </div>
            </div>
            <div className="back">
                <div className="fre">{props.fre}</div>
            <div className="pron">{props.pron}</div>
            </div>
        </div>
    </div>
)

export default Card