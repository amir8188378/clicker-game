body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    margin: 0;
}

.container {
    text-align: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
}

.balance-display {
    font-size: 1.5em;
    margin-bottom: 20px;
}

.icon-container {
    margin-bottom: 20px;
    position: relative;
}

.coin-icon {
    width: 100px;
    height: 100px;
    cursor: pointer;
    transition: transform 0.1s;
}

.coin-icon:active {
    transform: scale(0.9);
}

.profit-display {
    font-size: 1.2em;
    margin-bottom: 20px;
}

.boosts-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}

.boost-button {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.close-modal {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.effect {
    position: absolute;
    width: 100px;
    height: 100px;
    background: rgba(255, 223, 0, 0.7);
    border-radius: 50%;
    pointer-events: none;
    animation: explode 1s forwards;
}

@keyframes explode {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(2);
        opacity: 0;
    }
}
