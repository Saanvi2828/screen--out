class Form {
    constructor(){
        this.name=createInput("Name:")
        this.button=createButton("join")
        this.heading=createElement("h1","screen out")
        this.welcome=createElement("h5","HELLO!,HOPE YOU LIKE THE GAME")
        this.welcome.hide()
        this.restart=createButton("restart")
    }
    display(){
        this.heading.position(width/2,0);
        this.name.position(width/2,height/2)
        this.button.position(width/2,height/2+30)
        this.restart.position(10,10)
        this.button.mousePressed(()=>{
            this.name.hide()
            this.button.hide()
            player.name=this.name.value()
            playerCount=(playerCount+1)
            player.index=(playerCount)
            player.updateplayerCount(playerCount)
            player.update()
            this.welcome.position(10,20)
            this.welcome.show()
        })
        this.restart.mousePressed(()=>{
          database.ref("/").set({
              gameState:0,
              playerCount:0,
              turn:"player1"
          })
          location.reload()
        }

        )
    }
    
    }
