// class의 상속
class Clock{
    constructor({template}){
        this.template=template;
    }

    render(){
        let date = new Date();
        let year = date.getFullYear();
        if(year < 10) year = '0'+year;
        let month = date.getMonth() + 1; // 달의 경우 1을 더해줘야 함
        if(month < 10) month = '0' + month;
        let day = date.getDay();
        if(day<10) day = '0' + day;
        // let output = this.template.replace('y', year).replace('m', month).replace('d', day); // 각각 y/m/d일 경우 뒤의 변수들로 대체
        console.log(output);
        let hour = date.getHours();
        if(hour<10) hour = '0' + hour;
        let mins = date.getMinutes();
        if(mins<10) mins = '0' + mins;
        let second = date.getSeconds();
        if(second<10) second = '0' + second;
        let output = this.template.replace('y', year).replace('m', month).replace('d', day).replace('h', hour).replace('m', mins).replace('s', second);
    }

    start(){
        this.render();
        this.timer = setInterval(()=>this.render(), 1000);
        // js의 메서드 interval
        // 어떤 코드를 일정한 시간 가격을 두고 반복해서 실행
        // 첫 번째 인자는 실행할 코드(호출할 함수)를 받고, 두번째 인자로 반복 주기를 밀리초(ms) 단위로 설정
        // 가볍게 실시간처럼 보여야 하는 경우(화면 전환이 없어도) 사용하면 좋음
    }

    stop(){
        clearInterval(this.timer);
        // interval을 멈출 때 사용
        // 멈출 setInterval을 가지고와 넣어줘야 함
    }
}

let clock = new Clock({template:'y-m-d h:m:s'}); // key-value의 쌍으로 가지고 나온 것
clock.start();
setTimeout(()=>clock.stop(), 10000);
// 코드를 바로 실행하지 않고 일정 시간 기다린 후 실행해야 하는 경우 사용
// 첫 번째 인자로 실행할 코드(호출할 함수)를 받고, 두 번째 인자로 지연 시간을 밀리초(ms) 단위로 받음