const subscribeButton = document.getElementById("subcribe");
const passordOut = document.getElementById('passordOut');
const errorMessage = document.getElementById('errorMessage');
const noValid = document.getElementById('noValid')
const loadingRemote = document.getElementById('loadingRemote')
const sectionContainer = document.getElementById('sectionContainer')
const greenContainer = document.getElementById('greenContainer')
const alamessage = "To ensure seamless collaboration and remote access, I kindly request an upgrade to my subscription code. Without the upgraded code, remote work may be impacted."
function hidediv(){
    sectionContainer.style.display = 'none';
    errorMessage.style.display = 'none';
    loadingRemote.style.display = 'none'
}

function showGreenContainer(){
    greenContainer.style.display = 'block';
}subscribeButton.addEventListener("click", function(){
  if (passordOut.value === ''){
    errorMessage.innerHTML = "Please fill in the password";
    errorMessage.classList.remove('success');
    errorMessage.classList.add('error');
  } else if (passordOut.value === 'HWR56776WWPQQRTT122') {
    setTimeout(() =>{
        errorMessage.innerHTML = "Login Successfully..";
    }, 5000);
    
    errorMessage.style.color = "#19876F"
    errorMessage.classList.remove('error');
    errorMessage.classList.add('success...');
    noValid.textContent = 'Valid Subscription code'
    noValid.style.color = "#19876F"
    setTimeout(() =>{
        loadingRemote.textContent = 'Processing Remote Link......'
        loadingRemote.style.color = '#19876F'
        if(noValid.style.color = '#19876F'){
            setTimeout(()=>{
                hidediv()
                showGreenContainer()
            }, 2000);
        }
        setTimeout(() => {
          window.location.href = "index.html";
        }, 8000);
        
        // Redirect to payment.html after 4 seconds
        setTimeout(() => {
          window.location.href = "logiin.html";
        }, 5000);
    }, 5000);
    
    // Redirect to main.html after 2 seconds
    
  } 
});


function require() {
  alert("Access to your info is currently restricted. If you have made the payment, please ignore this message. If you have not made the payment yet, please proceed with the payment process. Upon successful payment, access will be granted to your information.");
}


function reviewData(){
  const  loaderContainer = document.getElementById('loaderContainer');
  setTimeout(() => {
    loaderContainer.style.display = 'block';
  }, 1000);

  setTimeout(() => {
    window.location.href = "warning.html";
  }, 12000);

}

function datasend() {
  const  loaderContainer = document.getElementById('loaderContainer');
  setTimeout(() => {
    loaderContainer.style.display = 'block';
  }, 1000);

  setTimeout(() => {
    window.location.href = "payment.html";
  }, 10000);


}