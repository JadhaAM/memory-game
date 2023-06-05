let cards = document.querySelectorAll(".card");

// console.log(cards);
// let disableCard = true;
// let cardone,cardTwo;

function flipcard(e) {
 //   console.log(e.target);

    let clickedcard = e.target;
    clickedcard = classList.add("flip");
//     if (clickedcard !== cardone && disableCard) {


//         if (!cardone) {
//             return cardone = clickedcard;
//         }
//         cardTwo = clickedcard;

//         let cardOneImg = cardone.querySelector("img").src,
//             cardTwoImg = cardone.querySelector("img").src;
//         matchCards(cardOneImg, cardTwoImg);
//     }
 }

// function matchCards(img1, img2) {
//     if (img1 === img2) {
//         matchedCard++;
//         if (matchedCard == 8) {
//             shuffleCard();
//         }
//         cardone.removeEventListener("click", flipcard);
//         cardTwo.removeEventListener("click", flipcard);
//         cardone = cardTwo = "";
//         return disableCard = false;
//     }
//     setTimeout(() => {

//         cardone.classList.add("shake");
//         cardTwo.classList.add("shake");
//     }, 400);

//     setTimeout(() => {

//         cardone.classList.remove("shake,flip");
//         cardTwo.classList.remove("shake,flip");
//         cardone = cardTwo = "";
//         return disableCard = false;
//     }, 1200);

// }
// function shuffleCard() {
//     matchedCard = 0;
//     cardone = cardTwo = "";

//     let arr=[1,2,3,4,5,6,1,2,3,4,5,6];
//     arr.sort(()=>Math.random()>0.5 ? 1:-1);
//     card.forEach(card => {
//         card.classList.remove("flip");
//         card.addEventListener("click", flipcard);
//     });
// }
cards.forEach(card => {

    // console.log(card);
    
    memoryCard.addEventListener("click", flipcard);
 });