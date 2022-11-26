import { delay } from "./delay.js";
import data from "../data.json"  assert { type: "json" };
const clickOnAnswer = async (page, answer) => {
    for(let j = 0 ; j < data.data.length ; j++){
       const dataObj = data.data[j];
      await page.goto(dataObj.link);
      await delay(2000)
      console.log("Answers Clicked")
      for(let i =0 ; i< dataObj.answerArray.length; i++){
           try {
            await page.evaluate((dataObj,i) => {
                let answer = dataObj.answerArray[i];
                let answerElement = document.querySelector(`[id="${answer}"]`);
                answerElement.click();
            },dataObj,i);
            await delay(500);
           } catch (error) {
             console.log("Module Already completed")
           }
          
      }
     

    await delay(1000);
    try {
        await page.click("#challenge > div > div > section > form > div > div > button")
    } catch (error) {
        console.log("Module Already completed")
    }
  
    }
};
export default  clickOnAnswer;