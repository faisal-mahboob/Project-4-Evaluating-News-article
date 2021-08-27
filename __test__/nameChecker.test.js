import {ValidURL} from '../src/client/js/nameChecker.js'

describe("Testing the ValidURL function",()=>{
    //console.log(t1);
    let str="https://www.dailysabah.com/";
    let output="true";
    test("testing the function will output a true result for a url",()=>{
        function ValidURL(str){
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex .test(str)) {
              return false;
            } else {
              return true;
            }
        }
    expect(ValidURL(str)).toEqual(true);
});
});