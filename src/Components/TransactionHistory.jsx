import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios'

const TransactionHistory = () => {
    const [transactions, setTransactions] = useState([]);


    useEffect(() => {
        getTransactionDetails();
    }, [])

    const getTransactionDetails = async () => {
        const response = await axios.get("http://localhost:4000/transactions");
        // console.log("response:", response);
        setTransactions(response.data)
    }

    return (
        <>
            <NavBar />
            <div className="transaction-history">
                <h2 className="section-title">Transaction History</h2>
                {transactions.map((transaction) => (
                    <div key={transaction.id} className="transaction-card">
                        <div className="transaction-info">
                            <div>
                                <span className="label">Movie Name:</span>
                                <span>{transaction.movieName}</span>
                            </div>
                            <div>
                                <span className="label">Seats:</span>
                                <span>{transaction.seats}</span>
                            </div>
                            <div>
                                <span className="label">Show Time:</span>
                                <span>{transaction.time}</span>
                            </div>
                            <div>
                                <span className="label">Date:</span>
                                <span>{transaction.date}</span>
                            </div>
                        </div>
                        <div className="booking-id">
                            <span className="label">Booking ID:</span>
                            <span>{transaction.bookingId}</span>
                        </div>
                    </div>
                ))}
            </div>
            <footer className="footer">
                <p className="text-center">&copy; Sai Nikhil Reddy Karennagari. All rights reserved.</p>
            </footer>
        </>
    );
};

export default TransactionHistory;
