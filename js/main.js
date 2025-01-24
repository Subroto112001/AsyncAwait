const FuntionOne = document.querySelector(".FuntionOne");
const FuntionTwo = document.querySelector(".FuntionTwo");
const FuntionThree = document.querySelector(".FuntionThree");



function myfunctionOne() {
    setTimeout(() => {
        console.log("Number One");
        FuntionOne.innerHTML = 'This Is Number One';
    }, 1000)
}
 function myfunctionTwo() {
    setTimeout(() => {
        console.log("Number Two");
         FuntionTwo.innerHTML = "This Is Number Two";
    }, 6000)
}
 function myfunctionThree() {
  setTimeout(() => {
      console.log("Number Three");
       FuntionThree.innerHTML = "This Is Number Three";
  }, 3000);
}

async function mainfunction() {
  await myfunctionOne();
  await myfunctionThree();
  await myfunctionTwo();

}

mainfunction()