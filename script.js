//http://api.weatherapi.com/v1/current.json?key=220966bde5ed4f21901170752242905&q=Lucknow&aqi=no

const tempField = document.querySelector(".temp");
const areaNameField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".conditions p");
const conditionIcon = document.querySelector("#image");
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");


form.addEventListener("submit", searchforLocation )


let target = "Delhi";
const fetchResults =  async () => {
    let url = `http://api.weatherapi.com/v1/current.json?key=220966bde5ed4f21901170752242905&q=${target}&aqi=no`;

    const res = await fetch (url);
    const data =  await res.json();
    
    console.log(data);
    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;
    let imgcondition = data.current.condition.icon;
    console.log(imgcondition);
    updateData(temp,locationName,time,condition,imgcondition);
    
}

function updateData(temp, locationName, time, condition,imgcondition){

    let splitDate = time.split(" ")[0];// we have split the time so as to seperate the time and date 
    let splitTime = time.split(" ")[1];

    let CurrDay = getDayName(new Date(splitDate).getDay());
    tempField.innerText = temp;
    areaNameField.innerText = locationName;
    dateField.innerText = `${splitDate} ${CurrDay} ${splitTime}`;
    conditionField.innerText = condition;
    conditionIcon.src = imgcondition;
    console.log(conditionIcon);


}

function searchforLocation (evt){
    evt.preventDefault();

    target = searchField.value;
    fetchResults(target);
}

function getDayName(number){
    switch(number){
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
    }
}

