let usuarios = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
let frutas = ["Banana", "Morango", "Maçã", "Uva", "Pêra", "Laranja"];
let rev = frutas.reverse()
let juntos = Object.keys(usuarios).forEach(function(item, i){
  console.log(rev[i] + '-' + usuarios[i]);})

