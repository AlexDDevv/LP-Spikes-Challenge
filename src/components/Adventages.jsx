import React from 'react'
import check from "../../src/check.png"

export default function Adventages({ offer }) {
    return (
        <li className='li-adventages'>
            <img src={check} alt="" />
            {offer}
        </li>
    )
}
