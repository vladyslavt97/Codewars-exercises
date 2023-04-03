//Thinkful - Logic Drills: Traffic light
function updateLight(current) {
  let lights = ["green", "yellow", "red"]
  for (let i = 0; i <= lights.length; i++){
    if(lights[i] === current){
      if(lights[i] === "red"){
        return "green"
      }
      return lights[i+1]
    }
  }
}