import React from 'react'
import "./Footer.css"

export const Footer = () =>{
    return(
        <footer className='footer'>
            <div className='container__alura'>
            <span className='alura__geek'>AlurGeek</span>
            <figure>
                <img src="./images/hello-kitty.png" alt="" />
            </figure>
            </div>
            <h4 className='alura__geek'>
            DESARROLLADO POR MONICA ANGULO
            </h4>

        </footer>
    )
}