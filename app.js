const ProductName = ['Product 1', 'Product 2', 'Product 3'];
const ProductImage = ['https://ekit.co.uk/GalleryEntries/ecommerce_solutions_and_services/MedRes_Product-presentation-2.jpg', 'https://ekit.co.uk/GalleryEntries/ecommerce_solutions_and_services/MedRes_Product-presentation-2.jpg', 'https://ekit.co.uk/GalleryEntries/ecommerce_solutions_and_services/MedRes_Product-presentation-2.jpg']
var prod_final =" ";
var prod = " ";
for(let i =0; i < ProductName.length; i++)
{
  
    console.log("Test");
    
    prod= "<li>" + ProductName[i] + "<img src="+ ProductImage[i] + ">" + "</img>" + "</li>"
    prod_final = prod_final + prod;
    
}

document.getElementById('header').innerHTML = prod_final;