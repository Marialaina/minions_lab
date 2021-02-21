const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]

//   minions.forEach(name => console.log("I'm here!"));

  const exceptKevin = minions.map(name => {
      if(name != "kevin"){
          return name.charAt(0).toUpperCase() + name.slice(1)
      } else {
          return "kevin"
      }
  })
// console.log(exceptKevin);


const kevinsFault = exceptKevin.filter(name => {
    if (name !== name.charAt(0).toUpperCase() + name.slice(1)){
    } else {return name}
 })
//  console.log(kevinsFault)

 const testingMinions = kevinsFault.every((name) => {
    return name === name.charAt(0).toUpperCase() + name.slice(1)
 })

 console.log(testingMinions)

