// // function addingEventListener() {
// //     const input = document.getElementById('input');
// // input.addEventListener('click', function(event) {
// //   alert('I was clicked!');
// // });
// // }















// const input = document.querySelector('#input')

// function addingEventListener() {
//   input.addEventListener('click', function(e) {
//     console.log('I caught you on camera')
// })
// }


































function addingEventListener() {



const targetedInput = document.querySelector('#input')

targetedInput.addEventListener('click', function(e) {
  console.log(e.target)
})

}