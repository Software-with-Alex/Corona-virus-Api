
const form = document.getElementById('form-1');
const userInputData = document.querySelector('#country'); 
const resultsContainer = document.querySelector('.covid-results-container');
form.addEventListener('submit', Covid19Call)

async function Covid19Call (e){
    e.preventDefault()
    let userSearch = userInputData.value;
    let response = await fetch(`https://api.covid19api.com/total/dayone/country/${userSearch}`);
    let data = await response.json();
    
    console.log(data[0].Confirmed)
                
    let totalDeaths = document.querySelector('.total-deaths');
    let totalConfirmedCases = document.querySelector('.total-confirmed');

    totalConfirmedCases.innerHTML = `<p>The total amount of confirmed cases in ${userSearch} is:  
   ${data[0].Confirmed} </p>` ;
    totalDeaths.innerHTML = `<p>The total amount of deaths in ${userSearch} is:
     ${data[0].Deaths} </p>` ;
    
     
    
    
    


}


