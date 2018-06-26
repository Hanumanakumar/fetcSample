

function loadJSON(url) {
  return new Promise((resolve, reject) => {
    return fetch(url).then(response => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject(new Error('error'));
      }
    })
  })
}

function logError(error){
  var error_msg=document.querySelector(".error");
  error_msg.style.display="block";
  error_msg="Looks like there was a problem:"+error;
}

loadJSON("data1.json").then(data => {
  // Here's a list of repos!
  console.log(data);
  products(data.products);
})
.catch(logError);

var mainDiv=document.getElementById("flexParent");

function products(proInfo){
for(var i=0; i<proInfo.length; i++){
	var childDiv=document.createElement("div");
	childDiv.classList.add("flexChild");
	var pro_name=document.createElement("h2");
	pro_name.textContent=proInfo[i].name;
	childDiv.appendChild(pro_name);

	var pro_img=document.createElement("img");
	pro_img.src=proInfo[i].image;

	childDiv.appendChild(pro_img);
	mainDiv.appendChild(childDiv);

	var pro_price=document.createElement("h3");
	pro_price.textContent=proInfo[i].price;

	childDiv.appendChild(pro_price);

	var button=document.createElement("button");
	childDiv.appendChild(button);

	button.textContent="Add to Cart";
}
}
