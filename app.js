let getAllBoxes = document.querySelectorAll('.box');
const getBody = document.querySelector('body');

getAllBoxes.forEach((box)=>
{
    // console.log(box);
    box.addEventListener('click', function(box){
        //1st way
        // switch (box.target) {
        //     case blue:
        //         getBody.style.backgroundColor = "#2980B9"
        //         break;
        //     case red:
        //         getBody.style.backgroundColor = "#E74C3C"
        //         break;
        //     case cyan:
        //         getBody.style.backgroundColor = "#1ABC9C"
        //         break;
        //     case yellow:
        //         getBody.style.backgroundColor = "#FFCC00"
        //         break;
        //     default:
        //         console.log("Invalid");
                
        //         break;
        // }

        //2nd way
        if(box.target.id === "blue")
        {
            getBody.style.backgroundColor = "#2980B9";
        }
        if(box.target.id === "red")
        {
            getBody.style.backgroundColor = "#E74C3C";
        }
        if(box.target.id === "cyan")
        {
            getBody.style.backgroundColor = "#1ABC9C";
        }
        if(box.target.id === "yellow")
        {
            getBody.style.backgroundColor = "#FFCC00";
        }
    })
});