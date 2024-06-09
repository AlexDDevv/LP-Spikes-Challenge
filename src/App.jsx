import React, { useState } from "react";
import data from "./data/data.json";
import Card from "./components/Card";
import BtnPaid from "./components/BtnPaid";
import { motion } from "framer-motion"
import "./style.css";

function App() {
    const [yearPrice, setYearPrice] = useState(false);
    const [selected, setselected] = useState('month');

    const togglePrice = (type) => {
        if (type === 'year' && !yearPrice) {
            setYearPrice(true);
            setselected('year');
        } else if (type === 'month' && yearPrice) {
            setYearPrice(false);
            setselected('month');
        }
    };

    return (
        <>
            <main className="container">
                <div className="text">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <button className="offer">Nos offres</button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: "-20px" }}
                        animate={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: "-20px" }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
                    >
                        <h1 className="title">Des prix en accord avec <span>notre vision</span></h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: "-20px" }}
                        animate={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: "-20px" }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
                    >
                        <div className="flex-btn">
                            {data.btnPaid.map(btn => (
                                <BtnPaid
                                    key={btn.id}
                                    onClick={() => togglePrice(btn.id)}
                                    content={btn.content}
                                    selected={btn.id === selected}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
                <div className="card-container">
                    {data.cards.map(card => (
                        <Card
                            key={card.id}
                            delayValue={card.delayValue}
                            icon={card.icon}
                            title={card.title}
                            price={card.price}
                            priceYear={card.priceYear}
                            best={card.best}
                            offer={card.offer}
                            yearPrice={yearPrice}
                        />
                    ))}
                </div>
            </main>
            <div className="ellipse top"></div>
            <div className="ellipse bot"></div>
        </>
    );
}

export default App;
