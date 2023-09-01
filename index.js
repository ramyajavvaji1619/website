function Maheshbabu()
    {
        document.getElementById("image").src="https://stat5.bollywoodhungama.in/wp-content/uploads/2023/06/Mahesh-Babu-2.jpg"
        document.getElementById("but1").style.backgroundColor ="red";
        document.getElementById("but2").style.backgroundColor ="green";
        document.getElementById("but3").style.backgroundColor="green";
        document.getElementById("but4").style.backgroundColor ="green";
        document.getElementById("but5").style.backgroundColor ="green";
        
        
    }
    function NTR()
    {
        document.getElementById("image").src="https://english.cdn.zeenews.com/sites/default/files/2021/11/21/989453-jr-ntr.png"
        document.getElementById("but1").style.backgroundColor ="green";
        document.getElementById("but2").style.backgroundColor ="red";
        document.getElementById("but3").style.backgroundColor ="green";
        document.getElementById("but4").style.backgroundColor ="green";
        document.getElementById("but5").style.backgroundColor ="green";
        
        
    }
    function Ram()
    {
        document.getElementById("image").src="https://w0.peakpx.com/wallpaper/16/1007/HD-wallpaper-ram-pothineni-deadlyking04-south-actor-thumbnail.jpg"
        document.getElementById("but1").style.backgroundColor ="green";
        document.getElementById("but2").style.backgroundColor ="green";
        document.getElementById("but3").style.backgroundColor ="red";
        document.getElementById("but4").style.backgroundColor ="green";
        document.getElementById("but5").style.backgroundColor ="green";
        
        
    }
    function Hrithikroshan()
    {
        document.getElementById("image").src="https://w0.peakpx.com/wallpaper/151/816/HD-wallpaper-hrithik-roshan-actor-bollywood-handsome-hunk.jpg"
        document.getElementById("but1").style.backgroundColor ="green";
        document.getElementById("but2").style.backgroundColor ="green";
        document.getElementById("but3").style.backgroundColor ="green";
        document.getElementById("but4").style.backgroundColor ="red";
        document.getElementById("but5").style.backgroundColor ="green";
        
        
    }
    function Surya()
    {
        document.getElementById("image").src="https://w0.peakpx.com/wallpaper/324/412/HD-wallpaper-surya-handsome-king.jpg"
        document.getElementById("but1").style.backgroundColor ="green";
        document.getElementById("but2").style.backgroundColor ="green";
        document.getElementById("but3").style.backgroundColor="green";
        document.getElementById("but4").style.backgroundColor ="green";
        document.getElementById("but5").style.backgroundColor ="red";
        
        
    }

    function kohli()
    {
        document.getElementById("pic").src="https://4.bp.blogspot.com/-YZvsdozhc4k/V_zDXcH69TI/AAAAAAAALsA/pgfiG6yPPAY8fAybcOTQzIymyxs1JfF6gCLcB/s1600/13320142_1717711475157532_628169168_n.jpg";
        document.getElementById("btn1").style.backgroundColor="red";
        document.getElementById("btn2").style.backgroundColor="green";
        document.getElementById("btn3").style.backgroundColor="green";
        document.getElementById("btn4").style.backgroundColor="green";

    }
    function Rahul()
    {
        document.getElementById("pic").src="https://imagesvibe.com/wp-content/uploads/2022/12/KL-Rahul-Images7.jpg";
        document.getElementById("btn1").style.backgroundColor="green";
        document.getElementById("btn2").style.backgroundColor="red";
        document.getElementById("btn3").style.backgroundColor="green";
        document.getElementById("btn4").style.backgroundColor="green";

    }
    function Bumrah()
    {
        document.getElementById("pic").src="https://cdn.mygodimages.com/mygodimg/preview/jasprit-bumrah-balling-hd-wallpaper-photos-pic-11624985068v8v0fmxa1b.jpg";
        document.getElementById("btn1").style.backgroundColor="green";
        document.getElementById("btn2").style.backgroundColor="green";
        document.getElementById("btn3").style.backgroundColor="red";
        document.getElementById("btn4").style.backgroundColor="green";

    }
    function Dhoni()
    {
        document.getElementById("pic").src="https://assets.telegraphindia.com/telegraph/2023/Mar/1679785555_9835ab92bbc391f8dc816dac388c710c.gif";
        document.getElementById("btn1").style.backgroundColor="green";
        document.getElementById("btn2").style.backgroundColor="green";
        document.getElementById("btn3").style.backgroundColor="green";
        document.getElementById("btn4").style.backgroundColor="red";

    }
    function fun()
    {
        document.getElementById("demo").innerHTML="Ramya Chowdary";
        document.getElementById("demo").style.color="firebrick";
        document.getElementById("demo").style.backgroundColor="pink";
        document.getElementById("demo").style.fontWeight="bold";
        document.getElementById("button").style.backgroundColor="green";
        
    }

    function Onincrement()
    {   
        let a = document.getElementById("countervalue").textContent;
        let b = parseInt(a) +20;
     if(b>0)
     {
        document.getElementById("countervalue").style.color="red";
     }

else if(b<0)
{
    document.getElementById("countervalue").style.color="green";
}

else
{
    document.getElementById("countervalue").style.color="blue";
}

        document.getElementById("countervalue").textContent = b;

    }

    function Onreset()
    {
        let countervalue = 0;
        document.getElementById("countervalue").textContent= countervalue;
        document.getElementById("countervalue").style.color="blue"

    }

    function Ondecrement()
    {
       let a = document.getElementById("countervalue").textContent;
       let b = parseInt(a) -25;
       
       if(b> 0)
       {
          document.getElementById("countervalue").style.color="red";
       }

       else if(b < 0)
       {
         document.getElementById("countervalue").style.color="green";
       }

       else 
       {
         document.getElementById("countervalue").style.color="blue";
       }

       document.getElementById("countervalue").textContent= b;

    }


    document.getElementById("demo1").innerHTML = Math.floor(Math.random() * 10000);


    function switchOff() {
        document.getElementById("bulbImage").src =
        "https://www.vhv.rs/dpng/d/459-4593815_pic-bulboff-on-off-gif-hd-png-download.png";
        document.getElementById("catImage").src =
        "https://jsitor.com/api/v2/snapshot/Nq-FrXp3GjMN";
        document.getElementById("switchStatus").textContent = "Switched Off";
        document.getElementById("onSwitch").style.backgroundColor = "green";
        document.getElementById("offSwitch").style.backgroundColor = "red";
        }
        function switchOn() {
        document.getElementById("bulbImage").src =
        "https://e7.pngegg.com/pngimages/922/441/png-clipart-creative-bulb-lightbulb-energy-saving-lamps-thumbnail.png";
        document.getElementById("catImage").src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3556sdTNHLX4ARr3-rDBLic3o0fRSt0l2ig&usqp=CAU"
        // "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/catimg.png";
        document.getElementById("switchStatus").textContent = "Switched On";
        document.getElementById("offSwitch").style.backgroundColor = "red";
        document.getElementById("onSwitch").style.backgroundColor = "green";
        }


        let g = 900;
        let h = "85";
        let i = true;
        let j = 
          console.log(typeof(g)); 
          console.log(typeof(h)); 
          console.log(typeof(i)); 
          console.log(typeof(j)); 


          let a = '20';
          let c = "5";
console.log(typeof(a)); 
let b = parseInt(a);
console.log(typeof(b)); 
console.log(typeof(c));
let d = parseInt(c);
console.log(typeof(d));



// let randomNumber = Math.random();
// console.log(randomNumber);
// console.log(randomNumber*1000);
// console.log(Math.ceil(randomNumber*1000));


let inputElement = document.getElementById("inputElement");
let signInTextElement = document.getElementById("signInText");

function signIn() 
{
let inputValue = inputElement.value;
let verifyText = "Hi " + inputValue + ", verifying your account...";
signInTextElement.textContent = verifyText;
}



 