let balance = 0;
let profitPerSecond = 0;
let perClickValue = 1;
let boostPrices = {
    "per-click-1": 25,
    "per-click-5": 100,
    "per-click-10": 225,
    "per-second-10": 200,
    "per-second-25": 500,
    "per-second-100": 2200,
};

document.getElementById("coin-icon").addEventListener("click", function() {
    balance += perClickValue;
    updateBalance();
    createEffect();
});

document.getElementById("boosts-button").addEventListener("click", function() {
    document.getElementById("boosts-modal").style.display = "flex";
});

document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("boosts-modal").style.display = "none";
});

document.querySelectorAll(".boost-button").forEach(button => {
    button.addEventListener("click", function() {
        let boostType = this.id;
        let price = boostPrices[boostType];
        if (balance >= price) {
            balance -= price;
            boostPrices[boostType] = Math.floor(price * 1.15);
            applyBoost(boostType);
            updateBalance();
            updateBoosts();
        } else {
            alert("Not enough balance!");
        }
    });
});

function applyBoost(boostType) {
    switch (boostType) {
        case "per-click-1":
            perClickValue += 1;
            break;
        case "per-click-5":
            perClickValue += 5;
            break;
        case "per-click-10":
            perClickValue += 10;
            break;
        case "per-second-10":
            profitPerSecond += 10;
            break;
        case "per-second-25":
            profitPerSecond += 25;
            break;
        case "per-second-100":
            profitPerSecond += 100;
            break;
    }
}

function updateBalance() {
    document.getElementById("balance").innerText = balance.toFixed(2);
    if (balance >= 10000 && !document.getElementById("explosion-effect")) {
        createExplosionEffect();
    }
}

function updateBoosts() {
    document.querySelectorAll(".boost-button").forEach(button => {
        let boostType = button.id;
        button.innerText = button.innerText.split(" (")[0] + " ($" + boostPrices[boostType] + ")";
    });
}

function createEffect() {
    let effect = document.createElement("div");
    effect.className = "effect";
    effect.style.top = `${event.clientY - 50}px`;
    effect.style.left = `${event.clientX - 50}px`;
    document.getElementById("effects-container").appendChild(effect);
    setTimeout(() => effect.remove(), 1000);
}

function createExplosionEffect() {
    let explosion = document.createElement("div");
    explosion.id = "explosion-effect";
    explosion.className = "effect";
    explosion.style.background = "rgba(255, 0, 0, 0.7)";
    explosion.style.width = "200px";
    explosion.style.height = "200px";
    explosion.style.top = "50%";
    explosion.style.left = "50%";
    explosion.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(explosion);
    setTimeout(() => explosion.remove(), 2000);
}

function updateProfitPerSecond() {
    document.getElementById("profit-per-second").innerText = profitPerSecond.toFixed(2);
}

// Auto income generation every second
setInterval(() => {
    balance += profitPerSecond;
    updateBalance();
}, 1000);
