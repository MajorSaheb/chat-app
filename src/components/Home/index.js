import React, { useState, useEffect } from 'react';
import './home.css';
import Header from '../Header'


const connection = new WebSocket('wss://echo.websocket.org');


function Home(props) {
    const websocketMessage = (message) => {
        connection.send(message);
        if(message !== ""){
            setHistory([...chatHistory,
                {
                    client: 'user',
                    value: message,
                }
            ]);
            setmessage('');
        }
    }
    useEffect(() => {
        connection.open = () => {
            connection.send('Ping');
        }
        connection.onmessage = (message) => {
            setHistory([...chatHistory, 
                {
                    client: 'bot',
                    value: message.data,
                }
            ]);
        };
    });
    const [message, setmessage] = useState('');
    const [chatHistory, setHistory] = useState([]);
    const handleMessageInput = e => setmessage(e.target.value);
    return (
        <div>
            <Header name={props.name}/>
            <div className="homePage">
                
                <div className="messageWindow">
                    <ul>
                        {chatHistory.map((chat, key) => (
                            <li key={key} className={chat.client === "user" ? "liClient" : "liBot"} >
                                <b>{chat.value}</b>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="inputWindow">
                    <input type='text' placeholder='Message' onChange={handleMessageInput} value={message} required />
                    <button onClick={()=>websocketMessage(message)}>Send -></button>
                </div>
            </div>
        </div>
    );
}

export default Home;