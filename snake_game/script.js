const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Game Variables
const gridSize = 20;
const rows = canvas.height / gridSize;
const columns = canvas.width / gridSize;
let snake = [{ x: 5, y: 5 }];
let direction = { x: 0, y: 0 };
let food = { x: 10, y: 10 };
let score = 0;

// Draw the game
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the snake
    ctx.fillStyle = "green";
    snake.forEach(segment => {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    });

    // Draw the food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);

    // Draw the score
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}`, 10, 20);
}

// Update the game
function update() {
    // Move the snake
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    // Check if the snake eats the food
    if (head.x === food.x && head.y === food.y) {
        score++;
        spawnFood();
    } else {
        snake.pop();
    }

    // Check collision with walls or itself
    if (
        head.x < 0 || head.x >= columns || head.y < 0 || head.y >= rows ||
        snake.some(segment => segment.x === head.x && segment.y === head.y)
    ) {
        alert(`Game Over! Your score: ${score}`);
        resetGame();
        return;
    }

    snake.unshift(head);
    draw();
}

// Spawn food at a random position
function spawnFood() {
    food = {
        x: Math.floor(Math.random() * columns),
        y: Math.floor(Math.random() * rows)
    };
}

// Reset the game
function resetGame() {
    snake = [{ x: 5, y: 5 }];
    direction = { x: 0, y: 0 };
    score = 0;
    spawnFood();
}

// Handle keyboard input
document.addEventListener("keydown", event => {
    switch (event.key) {
        case "ArrowUp":
            if (direction.y === 0) direction = { x: 0, y: -1 };
            break;
        case "ArrowDown":
            if (direction.y === 0) direction = { x: 0, y: 1 };
            break;
        case "ArrowLeft":
            if (direction.x === 0) direction = { x: -1, y: 0 };
            break;
        case "ArrowRight":
            if (direction.x === 0) direction = { x: 1, y: 0 };
            break;
    }
});

// Game loop
function gameLoop() {
    update();
    setTimeout(gameLoop, 100);
}

// Start the game
resetGame();
gameLoop();
