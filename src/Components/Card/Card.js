import React from 'react';
import { ArrowDown, ArrowUp, CardText, CashStack, PiggyBank, Bag } from 'react-bootstrap-icons';
import './Card.scss'
const Card = () => {
    let data = [
        {
            icon1: <CashStack color='green' size={40} />,
            name: "Earning",
            amount: "$198k",
            icon2: <ArrowUp color='green' size={12} />,
            value: '37% ',
            des: "this month"
        },
        {
            icon1: <CardText color='#d41aec' size={40} />,
            name: "Orders",
            amount: "$2.4K",
            icon2: <ArrowDown size={12} color='rgb(105, 5, 60)' />,
            value: '2% ',
            des: "this month"
        },
        {
            icon1: <PiggyBank color='rgb(96, 106, 238)' size={40} />,
            name: "Balance",
            amount: "$2.4k",
            icon2: <ArrowDown size={12} color='rgb(105, 5, 60)' />,
            value: '2% ',
            des: " this month"
        },
        {
            icon1: <Bag color='rgb(105, 5, 27) ' size={40} />,
            name: "Total Sales",
            amount: "$89k",
            icon2: <ArrowUp size={12} color='green' />,
            value: '11% ',
            des: " this month"
        }
    ];

    return (
        <div className='row  card-wrapper flex-lg-nowrap py-4 mt-1'>
            {data.map((item, index) => (
                <div key={index} className="m-1 d-flex col-lg-3 col-md-6 inside-wrapper rounded  justify-content-center align-items-center">

                    <div className='icon1-wrapper rounded-circle d-flex justify-content-center align-items-center'>{item.icon1}</div>
                    <div className='mx-3'>
                        <p className='text-muted m-0 mt-4'>{item.name}</p>
                        <h2 className='m-0'>{item.amount}</h2>
                        <div className='d-flex align-items-center'>
                            <p className='mt-0'>
                                <span className='m-0'><small className='m-0'>{item.icon2}</small></span> <small>{item.value}</small> <small>{item.des}</small>
                            </p>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
