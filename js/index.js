/*for(let i=100; i>=0;i-=2){
  
    document.write(i+'<br>')
    
}*/

let productNames=[];
productNames.push('Tesla Model X');
productNames.push('Masda CX5');
productNames.push('Toyota Corolla');
productNames.push('Dode RAM');
document.write(productNames.length)
/*for(let i=0; i<productNames.length;i++){
    document.write(productNames[i]+'<br>')
}*/
/*productNames.forEach(printElement);
function printElement(element){
    document.write(element+'br')
    }*/
    
    productNames.forEach(function(element){
        document.write(element+'br')
    } );
    
    productNames.forEach(el => document.write(el+'br'));
    
    productPrice=[10,20,30,454,64,64,46]
    productPrice.sort((a,b)=>a-b);
    
    let doublePrice=productPrice.map(el=>el*2);
    let expenciveProducts=doublePrice.filter(el=>el>100);
    let sum=expenciveProducts.reduce((acc,el)=>acc+el);
