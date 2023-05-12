//더 짜야할 목록
/*
1. score-프레임 마다 1 씩 더해주면 됨
2. 점프가 두번이상씩 될떄가 있음
3. 배경
4. 장애물 속도 (random 등..)
5. 날씨, 노래, 점매추
*/




var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var img2 = new Image();
img2.src = 'Dino-t-rax.png';
img2.addEventListener('load', function() {
    img2.width = 100; // 이미지의 너비를 100 픽셀로 설정
    img2.height = 50; // 이미지의 높이를 50 픽셀로 설정
});


//캐릭터의 정보
var dino = { // 공룡 그리기
    x : 10, // 공룡등장위치와 크기
    y : 200,
    width : 50,
    height : 50,
    draw() { 
        ctx.fillStyle = 'green'; 
        ctx.fillRect(this.x,this.y,this.width,this.height); 
        ctx.drawImage(img2,this.x,this.y);
    }
}

var img1 = new Image();
img1.src ='cactus.png';
img1.addEventListener('load', function() {
    img1.width = 100; // 이미지의 너비를 100 픽셀로 설정
    img1.height = 50; // 이미지의 높이를 50 픽셀로 설정
});


// 장애물들은 width, height 이런게 각각 다를 수도 있어서
// 비슷한 object가 많이 필요할꺼같음
// 이때 통상 class로 많이 만듬

//등장하는 장애물들의 object
class Cactus{
    constructor(){
        this.x = 500; // 어디에서 나타날껀지 좌표
        this.y = 200;
        this.width = 50; // 사이즈
        this.height = 50;
    }
    draw() { // object를 가지고 그림그림
        ctx.fillStyle = 'red'; 
        ctx.fillRect(this.x,this.y,this.width,this.height); 
        ctx.drawImage(img1, this.x,this.y);
    }
}

//var cactus = new Cactus();
//cactus.draw();

//게임은 항상 프레임으로 움직이기 떄문에 초를 새줘야함
var timer = 0;
var cactus여러개 = [];//장애물을 배열에 담음
var jumptimer = 0;
var animation;

//1초에 60번 코드 실행
//캐릭터 이동
function  프레임마다실행할거(){
    animation = requestAnimationFrame(프레임마다실행할거);
    timer++;

    ctx.clearRect(0,0,canvas.width,canvas.height);

    //1초마다 장애물이 나옴
    if(timer % 200 === 0){
        var cactus = new Cactus();// 장애물들을 1초에 60번 그려줌
        cactus여러개.push(cactus);// 120프레임마다 장애물을 생성 -> 생성된 것을 array에 다 집어 넣음
    }

    //array에 넣었던 장애물들을 반복문을 통해서 한번에 draw()
    cactus여러개.forEach((a,i,o)=>{
        //x좌표가 0미만이면 제거
        if(a.x<0){
            o.splice(i,1); // array에서 제거
        }
        a.x--; //한 프레임마다 x의 좌표가 -되니까 장애물들이 x좌표쪽으로 이동

        dump(dino, a); // 지속적으로 장애물과 dino가 충돌하는지 체크해주기 위해

        a.draw();
    })
    
    if(jumping == true){
        dino.y--; //스페이스바를 누르면 false->ture로 바뀌고 누를때마다 점프
        jumptimer++;// 프레임마다 1씩증가
    }
    if(jumping == false){
        if(dino.y > 200) // 다이노가 200픽셀 밑으로넘어가면그만
        dino.y++;
    }

    if(jumptimer > 100){ // 일정시간이상되면 중간에 끝남
        jumping = false;
        jumptimer =0;
    }

    dino.draw();
}

프레임마다실행할거();



//충돌 확인
//dino와 cactus가 둘이 충돌하는가?
function dump(dino,cactus) {
    var xminus = cactus.x -(dino.x+ dino.width); // 각 x축을 뺀 결과
    var yminus = cactus.y -(dino.y+ dino.height);// 각 y축을 뺀 결과
    if(xminus <0 && yminus <0){//충돌을 했을때
        ctx.clearRect(0,0,canvas.width,canvas.height);// 캔버스도 지우고
        cancelAnimationFrame(animation)// 애니메이션도 정지
    }
}



var jumping = false;  
document.addEventListener('keydown', function(e){
    if(e.code==='Space'){//스페이스바를누를떄 점프
        jumping = true;//점프중이면 true
    }
})




