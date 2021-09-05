let cd: any = 12; 
let cds = <number> cd; 

const obj = {
    name:  'Mary Daileen',
    said: (text) =>
        console.log('I am',text)
}

obj.said('Mary');
console.log(typeof(cds));

