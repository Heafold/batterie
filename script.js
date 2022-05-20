var keyQ= document.getElementById('Q');
var keyS = document.getElementById('S');
var keyD = document.getElementById('D');
var keyF = document.getElementById('F');
var keyG = document.getElementById('G');
var keyH = document.getElementById('H');
var keyJ = document.getElementById('J');
var keyK = document.getElementById('K');
var keyL = document.getElementById('L');
var qsound = document.getElementById('qsound');
var ssound = document.getElementById('ssound');
var dsound = document.getElementById('dsound');
var fsound = document.getElementById('fsound');
var gsound = document.getElementById('gsound');
var hsound = document.getElementById('hsound');
var jsound = document.getElementById('jsound');
var ksound = document.getElementById('ksound');
var lsound = document.getElementById('lsound');

window.addEventListener('keydown', function(event){
    console.log(event.key);
    if (event.key === 'q'){
        qsound.play();
        this.setTimeout(function(){
        keyQ.classList.add('playing');
            this.setTimeout(function(){
                keyQ.classList.remove('playing');
            }, 300)
        },400)
        
    }

    if (event.key === 's'){
        ssound.play();
        this.setTimeout(function(){
        keyS.classList.add('playing');
            this.setTimeout(function(){
                keyS.classList.remove('playing');
            }, 300)
        },400)
        
    }

    if (event.key === 'd'){
        dsound.play();
        this.setTimeout(function(){
        keyD.classList.add('playing');
            this.setTimeout(function(){
                keyD.classList.remove('playing');
            }, 300)
        },400)
        
    }

    if (event.key === 'f'){
        fsound.play();
        this.setTimeout(function(){
        keyF.classList.add('playing');
            this.setTimeout(function(){
                keyF.classList.remove('playing');
            }, 300)
        },400)
        
    }

    if (event.key === 'g'){
        gsound.play();
        this.setTimeout(function(){
        keyG.classList.add('playing');
            this.setTimeout(function(){
                keyG.classList.remove('playing');
            }, 300)
        },400)
        
    }

    if (event.key === 'h'){
        hsound.play();
        this.setTimeout(function(){
        keyH.classList.add('playing');
            this.setTimeout(function(){
                keyH.classList.remove('playing');
            }, 300)
        },400)
        
    }

    if (event.key === 'j'){
        jsound.play();
        this.setTimeout(function(){
        keyJ.classList.add('playing');
            this.setTimeout(function(){
                keyJ.classList.remove('playing');
            }, 300)
        },400)
        
    }

    if (event.key === 'k'){
        ksound.play();
        this.setTimeout(function(){
        keyK.classList.add('playing');
            this.setTimeout(function(){
                keyK.classList.remove('playing');
            }, 300)
        },400)
        
    }

    if (event.key === 'l'){
        lsound.play();
        this.setTimeout(function(){
        keyL.classList.add('playing');
            this.setTimeout(function(){
                keyL.classList.remove('playing');
            }, 300)
        },400)
        
    }

})