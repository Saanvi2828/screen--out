class Player {
    constructor(){
       this.score=0;
       this.name="";
       this.index=null;
    }
    
    getplayerCount(){
     var playerCountRef=database.ref("playerCount")
     playerCountRef.on("value",function(data){
         playerCount=data.val()
     })

    }
    updateplayerCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

    update(){
        var playerRef="players/hero"+this.index
        database.ref(playerRef).update({
            score:this.score,
            name:this.name
        })
    }
}