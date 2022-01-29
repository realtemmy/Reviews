const reviews = [
    {
        name:"Oguntimehin Temiloluwa",
        job:"Artificial Intelligence Programmer",
    },
    {
        name:"Oguntimehin Adeola",
        job:"Business Analyst(HR)",

    },
    {
        name:"Oguntimehin Ifeoluwa",
        job:"Building Engineer",
    },
    {
        name:"Adebowale Bolarinwa",
        job:"Full Stack Programmer",
    },
    {
        name:"Adebowale Bolagbade",
        job:"Lawyer",
    },
    {
        name:"David Dennis",
        job:"Music Producer/Cinematography",
    },
    {
        name:"Adebowale Bolaji",
        job:"Human ralationist",
    },
];

previousBtn = document.getElementById('prev-btn');
nextBtn = document.getElementById('next-btn');
randomBtn = document.getElementById('random-btn');
personName = document.querySelector('.name');
job = document.querySelector('.job');
text = document.querySelector('.text');

let value = 0;

window.addEventListener('DOMContentLoaded', ()=>{
    showValue()
});

previousBtn.addEventListener('click', ()=>{
    value--
    if(value < 0){
        value = reviews.length - 1;
    }
    showValue();
});

nextBtn.addEventListener('click', ()=>{
    value++
    if(value > reviews.length - 1){
        value = 0;
    }
    showValue();
});

randomBtn.addEventListener('click', ()=>{
    randomValue = Math.floor(Math.random() * reviews.length);
    value = randomValue;
    showValue()
})


function showValue(){
    personName.textContent = reviews[value].name;
    job.textContent = reviews[value].job;
};
// will add image in a bit....and probably text, though that one go hard sha cause i dont know the speech ti write for everybody.