const cityName=document.getElementById("cityName")
const city_name=document.getElementById("city_name")
const submitBtn=document.getElementById("submitBtn");
const temp_real_val=document.getElementById("temp_real_val");
const temp_status=document.getElementById("temp_status");

const getInfo=async(event)=>{
    event.preventDefault();
    let cityValu=cityName.value;
    console.log(cityValu)
    if(cityValu===""){
        city_name.innerText="plz write the name before the search "

    }else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityValu}&units=metric&appid=2677490d0b27176be740e451c1f5e7d4`
            const response = await fetch(url);
            
            const data= await response.json();
            const arryData=[data]
            city_name.innerText=`${arryData[0].name},${arryData[0].sys.country}`;
            temp_real_val.innerText=arryData[0].main.temp;

            

           const temStatus=arryData[0].weather[0].main;

           if(temStatus=="Clear"){
            temp_status.innerHTML=
            "<i class='fas fa-sun' style='color: #eccc68;'></i>"
        }else if(temStatus=="Clouds'"){
            temp_status.innerHTML=
            "<i class='fas fa-cloud' style='color: #dfe4ea;'></i>"
        }else if(temStatus=="Rainy"){
            temp_status.innerHTML=
            "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"
        }else{
            temp_status.innerHTML=
            "<i class='fas fa-sun' style='color: #eccc68;'></i>"
        }

            //console.log(data)
        }catch{
            // city_name.innerText="plz write city name properly..."
        }
        
    }

}


submitBtn.addEventListener('click', getInfo);