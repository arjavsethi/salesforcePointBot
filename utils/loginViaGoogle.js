import { delay } from "./delay.js";
const loginViaGoogle = async(page)=>{
    await page.goto('https://accounts.google.com/o/oauth2/auth/identifier?response_type=code&client_id=560047858501-g0ndkqr781pjjj786altbknrqhmqc7kv.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Ftrailblazer.me%2Fservices%2Fauthcallback%2Fgoogle&scope=email%20openid%20profile&state=CAAAAYSLf5TgMDAwMDAwMDAwMDAwMDAwAAAA8JyJneQUZBEUX-ewDJIw_XEzDslJ0U1fvowKjWT1_1-owZOwFm1qH3SgBQ_DrAT61-8Pin1vCkiNeNMpIGl7k2Jru50bufB_kLymxay_Gd1DW33EkcjmZLNrSnWi33p4WWvoi38jKrJ4X81NLO5XEfyy1cAnAkYMOveV5PsDp8zhn9mbkbHlbfELAaf97Fl2rm569s53UUvABrujSTVNeca-1JnrybI5RyttM5Vc5FsS&service=lso&o2v=1&flowName=GeneralOAuthFlow');
    await page.type('[type="email"]', "naman07123@gmail.com");
    await page.click('#identifierNext');
                    await delay(1000);   
    // await page.type('[type="password"]', "Deeksha@123");
    await delay(10000);
    // await page.click('#passwordNext');
    
}
export default loginViaGoogle;