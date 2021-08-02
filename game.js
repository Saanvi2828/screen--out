class Game {
    constructor() {
        this.turn=null
    }

    getGameState() {
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value", function (data) {
            gameState = data.val()
        })
    }

    getTurn(){
        var turnRef= database.ref("turn")
        turnRef.on("value",function(data){
            this.turn=data.val()
        })
    }

    updateGameState(state) {
        database.ref("/").update({
            gameState: state
        })
    }

    updateTurn(turn) {
        database.ref("/").update({
            turn: turn
        })
    }

 async   start() {
        if (gameState === 0) {
            player = new Player()
            var playerCountRef = await database.ref("playerCount").once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getplayerCount()
            }

            form = new Form()
            form.display()
        }
        ground = new Ground(600, height, 1200, 20)

        box1 = new Box(600, 320, 70, 70);
        box2 = new Box(680, 320, 70, 70);
        box3 = new Box(770, 320, 70, 70);
        box4 = new Box(860, 320, 70, 70);
        box5 = new Box(925, 320, 70, 70);
        box6 = new Box(520, 320, 70, 70);
        box7 = new Box(925, 390, 70, 70);
        box8 = new Box(520, 390, 70, 70);
        log1 = new Box(750, 400, 300, 10);

        bird = new Bird(100, 100);
        sling = new Sling(bird.body, { x: 200, y: 100 });
    }
    playState() {
        time= firebase.database.ServerValue.TIMESTAMP
        console.log(time)
        database.ref("/").update({time:time})
        box1.display();
        box2.display();
        box3.display();
        box4.display();
        box5.display();
        box6.display();
        box7.display();
        box8.display();
        log1.display();

        ground.display();
        bird.display();
    }
}