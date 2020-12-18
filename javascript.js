
function buttonChat(){
    let a = document.getElementById("chatHere").value;
    let b = document.getElementById("liveChat").innerText
    document.getElementById("liveChat").value += a + String.fromCharCode(13, 10);
    
}

function totalBalance(){
    let a = Number(document.getElementById("inputBalance").value);
    let total = Number(document.getElementById("duid").innerHTML);
    let totBalance = total + a;
    document.getElementById("duid").innerHTML = totBalance;
    document.getElementById("inputBalance").value = '';
}

function bet0(){
    let totBalance = Number(document.getElementById("duid").innerHTML);
    if(totBalance < 100){
        return alert('Not Sufficient Funds!')
    }
    let rand = Math.random()
    if(rand < 0.5){
        rand = 0;
    }else rand = 1;

    document.getElementById("soal").innerHTML = rand;

    if(rand === 0){
        
        totBalance += 200;
        document.getElementById("duid").innerHTML = totBalance;
        document.getElementById("log").innerHTML = 'Selamat!! Anda Mendapatkan $200'
    }else{
        
        totBalance -= 200;
        document.getElementById("duid").innerHTML = totBalance;
        document.getElementById("log").innerHTML = 'Terimakasih!! Anda Telah Beramal $200'
    }
}

function bet1(){
    let totBalance = Number(document.getElementById("duid").innerHTML);
    if(totBalance < 200){
        return alert('Not Sufficient Funds!')
    }
    let rand = Math.random()
    if(rand < 0.5){
        rand = 0;
    }else rand = 1;

    document.getElementById("soal").innerHTML = rand;

    if(rand === 1){
        
        totBalance += 200;
        document.getElementById("duid").innerHTML = totBalance;
        document.getElementById("log").innerHTML = 'Selamat!! Anda Mendapatkan $200'
    }else{
        
        totBalance -= 200;
        document.getElementById("duid").innerHTML = totBalance;
        document.getElementById("log").innerHTML = 'Terimakasih!! Anda Telah Beramal $200'
    }
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




