

function A1()
{
    var obtained= document.getElementById("num1").value;
    var total =document.getElementById("den1").value;
    var percentage=((obtained/total)*100).toFixed(2);
        console.log(percentage);
    
    document.getElementById('act1').innerHTML = percentage;
}
function A2()
{
    var obtained= document.getElementById("num1").value;
    var total =document.getElementById("den1").value;
    var percentage =(obtained/total*100).toFixed(2);
    console.log(percentage);
    document.getElementById('act1').innerHTML = percentage;
}
function B1()
{
    var obtained= document.getElementById("num2").value;
    var total =document.getElementById("den2").value;
    var percentage=((obtained/total)*100).toFixed(2);
        console.log(percentage);
    
    document.getElementById('act2').innerHTML = percentage;
}
function B2()
{
    var obtained= document.getElementById("num2").value;
    var total =document.getElementById("den2").value;
    var percentage =(obtained/total*100).toFixed(2);
    console.log(percentage);
    document.getElementById('act2').innerHTML = percentage;
}
function C1()
{
    var obtained= document.getElementById("num3").value;
    var total =document.getElementById("den3").value;
    var percentage=((obtained/total)*100).toFixed(2);
        console.log(percentage);
    
    document.getElementById('act3').innerHTML = percentage;
}
function C2()
{
    var obtained= document.getElementById("num3").value;
    var total =document.getElementById("den3").value;
    var percentage =(obtained/total*100).toFixed(2);
    console.log(percentage);
    document.getElementById('act3').innerHTML = percentage;
}
function D1()
{
    var obtained= document.getElementById("num4").value;
    var total =document.getElementById("den4").value;
    var percentage=((obtained/total)*100).toFixed(2);
        console.log(percentage);
    
    document.getElementById('act4').innerHTML = percentage;
}
function D2()
{
    var obtained= document.getElementById("num4").value;
    var total =document.getElementById("den4").value;
    var percentage =(obtained/total*100).toFixed(2);
    console.log(percentage);
    document.getElementById('act4').innerHTML = percentage;
}
function meanCalculator()
{
    var a=document.getElementById('num1').value/document.getElementById('den1').value;
    var b=document.getElementById('num2').value/document.getElementById('den2').value;
    var c=document.getElementById('num3').value/document.getElementById('den3').value;
    var d=document.getElementById('num4').value/document.getElementById('den4').value;
   
   // These if conditions are if you are entering less than 4 subjects
    if(a&&b&&c&&d)
    {
        var mean= ((a+b+c+d)/4).toFixed(2);
    }
    else if(a&&b&&c)
    {
        var mean=((a+b+c)/3).toFixed(2);
    }
    else if(a&&b)
    {
        var mean=((a+b)/2).toFixed(2);
    }
    else{
        var mean = (a).toFixed(2);
    }
    document.getElementById('ans').innerHTML=mean;

}

function weightCal(){
    var a=document.getElementById('num1').value/document.getElementById('den1').value;
    var b=document.getElementById('num2').value/document.getElementById('den2').value;
    var c=document.getElementById('num3').value/document.getElementById('den3').value;
    var d=document.getElementById('num4').value/document.getElementById('den4').value;
    
    var w1=document.getElementById('weight1').value;
    var w2=document.getElementById('weight2').value;
    var w3=document.getElementById('weight3').value;
    var w4=document.getElementById('weight4').value;

    if(a&&b&&c&&d)
    {
        var weight= ((a*w1+b*w2+c*w3+d*w4)/(w1*1+w2*1+w3*1+w4*1)).toFixed(2);
    }
    else if(a&&b&&c)
    {
        var weight=((a*w1+b*w2+c*w3)/(w1*1+w2*1+w3*1)).toFixed(2);
    }
    else if(a&&b)
    {
        var weight=((a*w1+b*w2)/(w1*1+w2*1)).toFixed(2);
    }
    else{
        var weight = (a).toFixed(2);
    }
    document.getElementById('ans').innerHTML=weight;

}





