import { format } from "date-fns";
import { returnRandom } from "../../miscellaneous/getRandomNumber";
import { projectArray } from "../../miscellaneous/variables/projectArray";

const generateToday = ( ) =>{
    const container = document.createElement('div');
    container.classList.add('today-container')

    generateNavbar(container);
    displayTodayTasks(container);
    

    document.body.appendChild(container);


}

const generateNavbar = (parent) =>{

    let currentDate = new Date();
    let hour = currentDate.getHours();
    const div = document.createElement('div');
    div.classList.add('today-hero-container')
    const bigSpan = document.createElement('span');
    bigSpan.classList.add('today-span-hero');
    const bigSpanEnding = document.createElement('span');
    bigSpanEnding.textContent = '.'


    if(hour < 12){
        bigSpan.textContent = 'Good Morning, Michał';       
    }else if(hour >= 12 && hour < 18){
        bigSpan.textContent = 'Good Afternoon, Michał';
    }else if(hour >= 18){
        bigSpan.textContent = 'Good Evening, Michał'
    }

    const smallSpan = document.createElement('span');
    smallSpan.classList.add('today-span-hero-2');
    
    const quotes = ["Seize the day!", "Your actions matter.", "Dream big!", "Make it happen!", "Believe in yourself.", "Inspire others.", "Create your path.", "Shine bright!", "Stay resilient.", "Embrace each moment.", "Be unstoppable!", "Chase your dreams.", "Spread joy.", "Make it count.", "You've got this!", "Choose happiness.", "Stay determined.", "Pursue greatness.", "Find your passion.", "Live with purpose."]

    smallSpan.textContent = quotes[returnRandom()];

    
    bigSpan.appendChild(bigSpanEnding)

    div.appendChild(bigSpan);
    div.appendChild(smallSpan);

    parent.appendChild(div);
}

const displayTodayTasks = (parent) =>{
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('today-date-div');

    let currentDate = new Date();

    let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    let dayOfWeek = daysOfWeek[currentDate.getDay()];
    let monthName = months[currentDate.getMonth()];
    let day = currentDate.getDate();
    const leftDiv = document.createElement('div');
    leftDiv.classList.add('date-display-container');
    const spanContent = [dayOfWeek, day, monthName];
    const classlists = ['date-display-day', 'date-display-number','date-display-month'];

    for(let i = 0; i <spanContent.length; i++){
        const span = document.createElement('span');
        span.textContent = spanContent[i];
        span.classList.add(classlists[i]);

        leftDiv.appendChild(span);
    }



    dateDiv.appendChild(leftDiv);

    const rightDiv = document.createElement('div');

    const projectCounterDiv = document.createElement('div');
    const projectCounter = document.createElement('span');
    projectCounter.textContent = projectArray.length
    const projectCounterDesc = document.createElement('span');
    projectCounterDesc.textContent = "Active Projects: "

    console.log(projectArray.length)

    rightDiv.classList.add('today-active-projects')
    rightDiv.appendChild(projectCounterDesc);
    rightDiv.appendChild(projectCounter);

    dateDiv.appendChild(rightDiv)
    parent.appendChild(dateDiv)
}

export{generateToday}