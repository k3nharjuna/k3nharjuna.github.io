
function buttonChat(){
    let a = document.getElementById("chatHere").value;
    let b = document.getElementById("liveChat").innerText
    document.getElementById("liveChat").value += a + String.fromCharCode(13, 10);
    document.getElementById("chatHere").value = ''
    
}

function totalBalance(){
    let a = Number(document.getElementById("inputBalance").value);
    let total = Number(document.getElementById("duid").innerHTML);
    let totBalance = total + a;
    document.getElementById("duid").innerHTML = totBalance;
    document.getElementById("inputBalance").value = '';
}
let tickTime = 0;

let tick = null;
function randomNomer(){
    let a = 0;
    let rand = Math.random();
    let totBalance = Number(document.getElementById("duid").innerHTML);
    if(rand < 0.5){
        rand = 0;
    }else rand = 1;
   
    document.getElementById("soal").innerHTML = rand;
    tickTime++;
    ganti(rand);
    if(tickTime === 3){
        if(rand === 0){
        
            totBalance += 200;
            document.getElementById("duid").innerHTML = totBalance;
            document.getElementById("log").innerHTML = 'Selamat!! Anda Mendapatkan $200'
            tickTime = 0;
            document.getElementById("gif").style.visibility = 'hidden';
            document.getElementById("buttonBet0").disabled = false;
            document.getElementById("buttonBet1").disabled = false;
            document.getElementById("buttonBet0").style.opacity = 1;
            document.getElementById("buttonBet1").style.opacity = 1;
            
            clearInterval(tick)
            
        }else{
            
            totBalance -= 200;
            document.getElementById("duid").innerHTML = totBalance;
            document.getElementById("log").innerHTML = 'Terimakasih!! Anda Telah Beramal $200'
            tickTime = 0;
            document.getElementById("gif").style.visibility = 'hidden';
            document.getElementById("buttonBet0").disabled = false;
            document.getElementById("buttonBet1").disabled = false;
            document.getElementById("buttonBet0").style.opacity = 1;
            document.getElementById("buttonBet1").style.opacity = 1;
            
            clearInterval(tick)
            
        }
    }
}

function ganti(a){
   
    if(a === 0){
        return document.getElementById("soal").style.backgroundColor = 'tomato'
        
    } else if(a === 1){
        return document.getElementById("soal").style.backgroundColor = 'lightgreen'
    } 
    
}

function randomNomer1(){
    // let elem = document.querySelector('#soal');
    // elem.style.color = red;
    let rand = Math.random();
    let totBalance = Number(document.getElementById("duid").innerHTML);
    if(rand < 0.5){
        rand = 0;
    }else rand = 1;
    // return rand;
    // hasil = rand;
    document.getElementById("soal").innerHTML = rand;
    tickTime++;
    if(tickTime === 3){
        if(rand === 1){
        
            totBalance += 200;
            document.getElementById("duid").innerHTML = totBalance;
            document.getElementById("log").innerHTML = 'Selamat!! Anda Mendapatkan $200';
            tickTime = 0;
            document.getElementById("gif").style.visibility = 'hidden';
            document.getElementById("buttonBet1").disabled = false;
            document.getElementById("buttonBet0").disabled = false;
            document.getElementById("buttonBet0").style.opacity = 1;
            document.getElementById("buttonBet1").style.opacity = 1;
            // status = true;
            clearInterval(tick)
            
        }else{
            
            totBalance -= 200;
            document.getElementById("duid").innerHTML = totBalance;
            document.getElementById("log").innerHTML = 'Terimakasih!! Anda Telah Beramal $200';
            tickTime = 0;
            document.getElementById("gif").style.visibility = 'hidden';
            document.getElementById("buttonBet1").disabled = false;
            document.getElementById("buttonBet0").disabled = false;
            document.getElementById("buttonBet0").style.opacity = 1;
            document.getElementById("buttonBet1").style.opacity = 1;
            // status = true;
            clearInterval(tick)
            //clearInterval
        }
    }
}

function go(){
    
    tick = setInterval(randomNomer, 1000);
    document.getElementById("gif").style.visibility = 'visible';
}

function bet0(){
    let totBalance = Number(document.getElementById("duid").innerHTML);

    document.getElementById("buttonBet0").style.borderColor = 'blue';
    document.getElementById("buttonBet1").style.borderColor = 'black';
    if(totBalance < 200){
        return alert('Not Sufficient Funds!')
    }
    document.getElementById("buttonBet0").disabled = true;
    document.getElementById("buttonBet1").disabled = true;
    document.getElementById("buttonBet0").style.opacity = 0.6;
    document.getElementById("buttonBet1").style.opacity = 0.6;
    go();
        
}
    
function go1(){
    
    tick = setInterval(randomNomer1, 1000);
    document.getElementById("gif").style.visibility = 'visible';
}

function bet1(){
    let totBalance = Number(document.getElementById("duid").innerHTML);
    document.getElementById("buttonBet0").style.borderColor = 'black';
    document.getElementById("buttonBet1").style.borderColor = 'blue';
    if(totBalance < 200){
        return alert('Not Sufficient Funds!')
    }    
    document.getElementById("buttonBet1").disabled = true;
    document.getElementById("buttonBet0").disabled = true;
    document.getElementById("buttonBet0").style.opacity = 0.6;
    document.getElementById("buttonBet1").style.opacity = 0.6;
    go1();
}

function withdraw(){
    let balance = Number(document.getElementById("duid").innerHTML);
    if(balance <= 0){
        return alert ('0 Balance!');
    }else{
        document.getElementById("log").innerHTML = `$${balance} Telah dikirim ke Rekening Anda!`;
        document.getElementById("duid").innerHTML = 0;
    }
}




