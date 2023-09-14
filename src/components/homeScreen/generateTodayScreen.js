import { format } from "date-fns";
import { returnRandom } from "../../miscellaneous/getRandomNumber";
import { projectArray } from "../../miscellaneous/variables/projectArray";
import { generateButtonListener, generateButtonListenerNotOnLoad } from "../../listeners/today";

const generateToday = ( ) =>{
    const container = document.createElement('div');
    container.classList.add('today-container')
    

    document.body.appendChild(container);


}

const renderToday = () =>{

    const container = document.querySelector('.today-container');
    generateNavbar(container);
    displayTodayTasks(container);
    generateButton();
    generateButtonListener();
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
    
    const quotes =     ["Believe in yourself, for your potential is limitless.",
    "Every small step you take brings you closer to your dreams.",
    "Your determination is the key to unlocking your greatest achievements.",
    "The only way to do great work is to love what you do.",
    "Embrace challenges, for they are the stepping stones to success.",
    "Don't wait for the perfect moment; take the moment and make it perfect.",
    "You are the author of your own story; make it a bestseller.",
    "Set your goals high and don't stop until you get there.",
    "The road to success is paved with hard work and persistence.",
    "No one ever achieved greatness by staying in their comfort zone.",
    "The only limits that exist are the ones you place on yourself.",
    "Your past does not define your future; your actions do.",
    "Failure is not falling down but refusing to get up.",
    "Success is the sum of small efforts repeated day in and day out.",
    "Stay focused on your goals; distractions are just detours.",
    "In every adversity lies the seed of an equal or greater opportunity.",
    "Your attitude determines your direction; choose positivity.",
    "Don't be afraid to chase your dreams; they know the way." ]

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

    let daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    let months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    
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
    projectCounterDesc.textContent = "ACTIVE PROJECTS: "

    rightDiv.classList.add('today-active-projects')
    rightDiv.appendChild(projectCounterDesc);
    rightDiv.appendChild(projectCounter);

    dateDiv.appendChild(rightDiv)
    parent.appendChild(dateDiv)
}

const generateButton = () =>{
    const div = document.createElement('div');
    div.classList.add('today-next-button');

    document.body.appendChild(div);
}




const clearMainScreen = () =>{
    const todayContainer = document.querySelector('.today-container');
    const todayButton = document.querySelector('.today-next-button');

    while(todayContainer.firstChild){
        todayContainer.removeChild(todayContainer.firstChild);
    }

    todayButton.remove();
}

export{generateToday, clearMainScreen, renderToday}