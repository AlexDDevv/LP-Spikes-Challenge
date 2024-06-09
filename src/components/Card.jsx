import React from 'react'
import Adventages from './Adventages'
import { motion } from 'framer-motion'

export default function Card({ delayValue, icon, title, price, priceYear, best, offer, yearPrice }) {
    return (
        <motion.div
            className='card'
            initial={{ opacity: 0, translateY: "-20px" }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: "-20px" }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: `${delayValue}` }}
        >
            <div className="card-wrapper">
                <div className="icon">
                    <img src={icon} alt="" />
                    {!best && (
                        <>
                            <div className="icon-ellipse first"></div>
                            <div className="icon-ellipse second"></div>
                        </>
                    )}
                </div>
                <div className="offer-price">
                    {best ? (
                        <div className="best-price">
                            <h2 className='offer-name'>{title}</h2>
                            <span>{best}</span>
                        </div>
                    ) : (
                        <h2 className='offer-name'>{title}</h2>
                    )}
                    <motion.div
                        className='price'
                        key={yearPrice}
                        initial={{ opacity: 0, translateY: "15px" }}
                        animate={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: "15px" }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                        <h3 className='price-title'>{yearPrice ? priceYear : price}</h3>
                        <span>{yearPrice ? '/year' : '/month'}</span>

                    </motion.div>
                </div>
                <div className="border-gradient"></div>
                <ul className='list-adventages'>
                    {offer.map((adventage, i) => (
                        <Adventages
                            key={i}
                            offer={adventage}
                        />
                    ))}
                </ul>
                <button className="btn-offer">Je m'abonne</button>
            </div >
        </motion.div >
    )
}
