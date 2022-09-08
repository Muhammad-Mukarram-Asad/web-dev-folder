function dropdown()
{
    var right_arrow = document.getElementById('rightArrow');
    right_arrow.style.color = "brown";
    right_arrow.style.fontSize = "35px";
    right_arrow.style.marginTop = "-8px";

    var sec_2 = document.getElementById('section2');
    sec_2.style.display = "none";

    var heading2 = document.getElementById('h2');
   heading2.style.display = "none";

    var ul = document.getElementById('right_arrow_ul');
    ul.style.display = "block";
}

function original()
{
    var ul = document.getElementById('right_arrow_ul');
    ul.style.display = "none";
    var right_arrow = document.getElementById('rightArrow');
    right_arrow.style.color = "white";
    var heading2 = document.getElementById('h2');
    heading2.style.display = "block";


    var sec_2 = document.getElementById('section2');
    sec_2.style.display = "flex";
}

function myFunction() {
    var x = document.getElementById("section1");
    if (x.className === "sec1") {
      x.className += " responsive";
    } else {
      x.className = "sec1";
    }
  }


// if(sec1.style.width < '500px')
// {
//     var heading2 = document.getElementById('h2');
//     var btn = document.getElementById('btn1');
//     var hamburgur_menu = document.getElementById('menu_icon');

//     heading2.style.display = "none";
//     btn,style.display = "none";
//     hamburgur_menu.style.display = "block";
//     hamburgur_menu.style.marginLeft = "50%";

// }