const myArray = ["apple", "banana", "orange", "grape"];

// Birinchi elementning uzunligini console.log va alertda chiqaring
const firstElementLength = myArray[0].length;
console.log("Birinchi elementning uzunligi:", firstElementLength);
alert("Birinchi elementning uzunligi: " + firstElementLength);

// Confirm chiqaring
const confirmResult = confirm("Ok tugmasini bosing!");

if (confirmResult) {
  // Ok bosilganda arraydan bitta elementni olib tashlash
  const removedElement = myArray.shift();
  console.log("Olib tashlangan element:", removedElement);
  console.log("Yangi array:", myArray);
} else {
  // Otmena bosilganda arrayning ichida 4ta element qolsin
  console.log("Arrayning ichida 4ta element:", myArray);
}
