var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var img2 = new Image();
img2.src = 'Dino-t-rax.png';
var img2Width = 200;
var img2Height = 200;

var dino = { // 공룡 그리기
    x : 10, // 공룡등장위치와 크기
    y : 200,
    width : 50,
    height : 50,
    draw() {  
        ctx.fillStyle = 'green'; 
        // ctx.fillRect(this.x,this.y,this.width,this.height); 
        ctx.drawImage(img2, this.x, this.y, img2Width, img2Height)
    }
}

var img1 = new Image();
img1.src ='cactus.png';
var img1Width = 50;
var img1Height = 50;

class Cactus{
    constructor(){
        this.x = 500; // 어디에서 나타날껀지 좌표
        this.y = 200;
        this.width = 50; 
        this.height = 50;
    }
    draw() { // object를 가지고 그림그림
        ctx.fillStyle = 'red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height); 
        ctx.drawImage(img1, this.x, this.y, img1Width, img1Height)
    }
}
var cactus = new Cactus();
cactus.draw()

//캐릭터 이동
var timer = 0;
var cactus여러개 = [];
var jumtTimer = 0;
var animation

function 프레임마다실행할거(){
    animation = requestAnimationFrame(프레임마다실행할거);
    timer++;

    ctx.clearRect(0,0,canvas.width, canvas.height);

    //1초마다 장애물이 나옴
    if(timer % 200 === 0){
        var cactus = new Cactus();// 장애물들을 1초에 60번 그려줌
        cactus여러개.push(cactus);// 120프레임마다 장애물을 생성 -> 생성된 것을 array에 다 집어 넣음
    }

    cactus여러개.forEach((a, i , o)=>{
        //x좌표가 0미만이면 제거
        if(a.x < 0){
            o.splice(i, 1)
        }
        a.x--;
        
        dump(dino, a);

        a.draw();
    });
    
    if (jumping == ture){
        dino.y--; // dino.y -=3 처럼 속도 조절 가능
        jumtTimer++;
    }
    if(jumping == false){
        if(dino.y < 200){
            dino.y++;
        }
    }
    if (jumpTimer > 100){
        jumping = false;
        jumpTimer = 0
    }

    dino.draw();
}

프레임마다실행할거();

//충돌확인
function dump(dino,cactus) {
    var xdiff = cactus.x -(dino.x + dino.width); // 각 x축을 뺀 결과
    var ydiff = cactus.y -(dino.y + dino.height);// 각 y축을 뺀 결과
    if(xdiff <0 && ydiff <0){//충돌을 했을때
        ctx.clearRect(0,0,canvas.width,canvas.height);// 캔버스도 지우고
        cancelAnimationFrame(animation)// 애니메이션도 정지
    }
}


var jumping = false;
document.addEventListener('keydown', function(e){
    if(e.code === 'Space'){
        jumping = true;
    }
});