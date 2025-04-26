
const body = document.getElementById('body')

date = new Date()

nowHours = date.getHours()
nowMinutes = date.getMinutes()
nowSeconds = date.getSeconds()

const timeTable = document.getElementById("time")

countTime = false

// 19 April is 19.04.25

neededDateDay = 19
neededDateMonth = 4

if(timeTable && countTime){
    setInterval(()=>{
    
        date = new Date()
    
        nowMonth = date.getMonth() + 1
        nowDay = date.getDate()
        nowHours = date.getHours()
        nowMinutes = date.getMinutes()
        nowSeconds = date.getSeconds()
        
        if(nowMonth == 3){
            nowDay = 31 + neededDateDay - 1 - nowDay
        }
        if(nowMonth == 2){
            nowDay = 31 + 28 + neededDateDay - 1 - nowDay
        }
        if(nowMonth == neededDateMonth){
            nowDay = date.getDate()
            nowDay = neededDateDay - 1 - nowDay
            // nowHours = 23
            // nowMinutes = 59
            // nowSeconds = 59
        } 
    
        if(nowDay.toString().length == 1){
            nowDayStr = `0${nowDay}`
        } else {
            nowDayStr = `${nowDay}`
        }
        if(nowHours >= 14){
            nowHoursStr = `0${23 - nowHours}`
        } else {
            nowHoursStr = `${23 - nowHours}`
        }
        if(nowMinutes >= 50){
            nowMinutesStr = `0${59 - nowMinutes}`
        } else {
            nowMinutesStr = `${59 - nowMinutes}`
        }
        if(nowSeconds >= 50){
            nowSecondsStr = `0${59 - nowSeconds}`
        } else {
            nowSecondsStr = `${59 - nowSeconds}`
        }
    
        timeTable.innerHTML = `
           ${nowDayStr} : ${nowHoursStr} : ${nowMinutesStr} : ${nowSecondsStr}
        `
    }, 500)
}


const menuBtn = document.getElementById('menu_btn')

menuBtn.addEventListener("click", ()=>{
    if(body.dataset.menuOpen == "true"){
        body.dataset.menuOpen = "false"
    } else {
        body.dataset.menuOpen = "true"
    }
});

const p1Vid = document.getElementById('p1Vid');
const p1vidClose = document.getElementById('p1vidClose');

if(p1Vid){
    p1Vid.addEventListener('click', ()=>{
        body.dataset.p1vidOpen = "true"
    })
    p1vidClose.addEventListener('click', ()=>{
        body.dataset.p1vidOpen = "false"
    })
}


// ENG TABLES

const table_main = [
    {
        "time": "10:00 - 10:30",
        "event": "First Opening",
        "description": "Welcome speech from the organizers, congratulations from the school management and invited guests.",
        "place": "Assembly Hall"
    },
    {
        "time": "10:30 - 12:00",
        "event": "The plenary session",
        "description": "Presentations by invited experts on key issues.",
        "place": "Assembly Hall"
    },
    {
        "time": "10:30 - 10:50",
        "event": "AI as a mirror of thinking: what can neural network errors teach us?",
        "description": "Пак Александр - Candidate of Sciences, Associate Professor of KBTU",
        "place": "Assembly Hall"
    },
    {
        "time": "10:50 - 11:30",
        "event": 'Panel discussion "How is AI changing the labor market and what skills do graduates need?"',
        "description": 'Толкын Нурушева - Microsoft Kazakhstan <br> Олжас Мустафин - IT Product Manager, Halyk Finservice <br> Маутхан Айдын - founder of NEO AI Solutions ',
        "place": "Assembly Hall"
    },
    {
        "time": "11:30 - 12:00",
        "event": "Apple Intelligence in Swift",
        "description": "Смагул Негматов - iTeacher Academy, Apple Certified Trainer",
        "place": "Assembly Hall"
    },
    {
        "time": "12:00 - 13:00",
        "event": "Launch Break",
        "description": "The opportunity to network and discuss what you've heard.",
        "place": "Canteen"
    },
    {
        "time": "13:00 - 16:00",
        "event": '<a href="section1.html">Section 1</a> <br> Artificial intelligence in learning: new horizons',
        "description": "Analysis of cases of using AI in mathematics, physics and chemistry. Demonstration of practical examples.",
        "place": "Assembly Hall"
    },
    {
        "time": "13:00 - 16:00",
        "event": '<a href="section2.html">Section 2</a> <br> AI in action: tools and technologies',
        "description": "Participants will try to create an AI assistant, work with neural networks to generate content, and program using AI.",
        "place": "Abay Hall"
    },
    {
        "time": "13:00 - 16:00",
        "event": '<a href="section3.html">Section 3</a> <br> Psychology, Parents, and AI: Challenges and Opportunities',
        "description": "Discussion of the psychological aspects of using AI in education, risks and benefits for children.",
        "place": "Library"
    },
    {
        "time": "13:00 - 16:00",
        "event": '<a href="section4.html">Section 4</a> <br> Artificial intelligence and the future of society',
        "description": "Analysis of the prospects of professions, ethical aspects and digital transformation of society.",
        "place": "Room 123"
    },
    {
        "time": "13:00 - 16:00",
        "event": '<a href="section5.html">Section 5</a> <br> STEM and Robotics: innovative student projects',
        "description": "",
        "place": ""
    },
    {
        "time": "16:00 - 16:30",
        "event": "Closing of the conference and summing up the results",
        "description": "Summaries from moderators, conclusions based on the results of breakout sessions, awarding of participants.",
        "place": "Assembly Hall"
    }
]

const table_section_1 = [
    {
        "time": "13:00 - 13:30",
        "event": "Artificial Intelligence in humanities education: new teaching opportunities",
        "description": "Сейлбекова Меруерт, Еркембек Бибигуль",
        "place": "The use of artificial intelligence in teaching humanities, its capabilities for personalizing learning, automating routine tasks, and analyzing data. Examples of the introduction of AI in education, its advantages and challenges for teachers will be considered."
    },
    {
        "time": "13:30 - 14:00",
        "event": "The use of artificial intelligence in English lessons when creating tests and quizzes",
        "description": "Малибекова Дана, Мауова Малика",
        "place": ""
    },
    {
        "time": "14:00 - 14:30",
        "event": "Smart Teaching with AI: A New Era for Educators and Students ",
        "description": "Каменская Ю.А.",
        "place": ""
    },
    {
        "time": "14:40 - 15:10",
        "event": "Using AI in humanitarian lessons",
        "description": "Хасанова Индира Оспанова, Ахметова Елена Ивановна",
        "place": ""
    },
    {
        "time": "15:10 - 15:50",
        "event": '"Modeling historical events: theory and practice"',
        "description": "Әміртай Э.Т. <br> Шиликбаева А.М <br> Еркембек Б.Б",
        "place": "Modeling and design methods in history develop students ' research skills and help them understand historical events in depth."
    }
]

const table_section_2 = [
    {
        "time": "13:00 - 13:30",
        "event": "Creating an AI assistant for a school",
        "description": "Жуандық Сұлтан <br> Амир Айденов",
        "place": "how to develop a virtual assistant for the educational process, examples of bots and voice assistants"
    },
    {
        "time": "13:30 - 14:00",
        "event": "Neural networks for content generation and data visualization",
        "description": "Бекбутаева Айдана <br >Абишева Айжан ",
        "place": "Demonstration of modern AI tools for image processing, text and interactive visualization creation"
    },
    {
        "time": "14:00 - 14:30",
        "event": "The role of AI in chemistry for the analysis of experimental data",
        "description": "Садыгулова А.Е. <br>  Казез А. <br> Алипова А.А. ",
        "place": "The presentation will present practical examples of integrating AI into the chemistry learning process, as well as tools that enhance learning effectiveness, individualization, and the formation of key skills of the 21st century."
    },
    {
        "time": "14:30 - 15:15",
        "event": "Programming with AI: a practical master class",
        "description": "Өтеу Қуаныш ",
        "place": "Learning to use AI libraries, creating simple programs and machine learning models"
    },
    {
        "time": "15:15 - 16:00",
        "event": "Digital test for pedagogy: conditions in the most modern schools",
        "description": "Кенжегалиева Б.С. <br> Нурманова М.К. <br> Нұрмағамбет Д.М. ",
        "place": "Digitalization of education and planning the active introduction of digital technologies in modern schools that allow improving the quality of Education , adapting educational processes to the individual needs of students."
    }
]

const table_section_3 = [
    {
        "time": "13:00 - 13:50",
        "event": "The impact of AI on children's cognitive development",
        "description": "Увалиева Еркежан Калмуратовна Teacher-psychologist of the NIS PhMD Almaty ",
        "place": "A study of how AI affects attention, critical thinking, and memory in schoolchildren"
    },
    {
        "time": "14:00 - 14:50",
        "event": "How can parents and teachers prepare children for life with AI?",
        "description": "Биржанова Жанат Амантаевна. Candidate of Psychological Sciences. A psychotherapist.  Private practice ",
        "place": "Tips for developing digital literacy and critical thinking in the age of AI"
    },
    {
        "time": "15:00 - 15:50",
        "event": "Dangers and benefits of AI for teenagers",
        "description": "Айтбаева Ж.Д Deputy Director for educational work of the NIS PhMD Almaty",
        "place": "Discussing the risks of digital addiction, fake news, and cybersecurity"
    }
]

const table_section_4 = [
    {
        "time": "13:00 - 13:50",
        "event": "Which professions will disappear, and which will appear thanks to AI?",
        "description": "",
        "place": "Labor market analysis, forecasts for the next 10-20 years"
    },
    {
        "time": "14:00 - 14:50",
        "event": "How to choose a profession in the age of AI: skills in demand in the future",
        "description": "",
        "place": "At the session, we will discuss key competencies that will be in demand in the coming decades."
    },
    {
        "time": "15:00 - 15:50",
        "event": "The role of schools and universities in shaping career paths in the digital age",
        "description": "",
        "place": "How can educational institutions help young people adapt to the rapidly changing labor market? What new approaches in career guidance should be implemented now?"
    }
]

const table_section_5 = [
    {
        "time": "13:00 - 13:30",
        "event": "Practice-oriented learning in STEM: from theory to real projects",
        "description": "Еркмалиев Д.К.",
        "place": "How can project activities, laboratory work, and interdisciplinary research be integrated into the educational process? Let's look at successful cases and tools."
    },
    {
        "time": "13:30 - 14:00",
        "event": "Using AI in chemistry education ",
        "description": "Идрисова С.К. ",
        "place": "Let's analyze successful cases of AI integration into the educational process. "
    },
    {
        "time": "14:00 - 14:30",
        "event": "The role of AI in the disciplines of the EMN ",
        "description": "Садыгулова А.Е. <br> Казез А. <br> Алипова А.А.  ",
        "place": "The presentation examines the possibilities of using artificial intelligence in teaching natural sciences and mathematics. Practical examples of integrating AI into the chemistry learning process will be presented, as well as tools that enhance learning effectiveness, individualization, and the formation of key skills of the 21st century."
    },
    {
        "time": "14:40 - 15:10",
        "event": "New approaches to teaching geography through STEM education",
        "description": "Нурманова М.К. <br> Кенжегалиева Б.С. ",
        "place": "Developing students' research abilities using STEM approaches in geography teaching."
    },
    {
        "time": "15:10 - 16:00",
        "event": "The role of artificial intelligence in teaching physics",
        "description": "Джумадиллаев К.Н. ",
        "place": "Artificial intelligence (AI) is playing an increasingly important role in teaching physics, facilitating the study of complex concepts, personalizing the educational process and increasing its effectiveness."
    }
]


// KZ TABLES

const table_main_kz = [
    {
        "time": "10:00 - 10:30",
        "event": "Бірінші Ашылу",
        "description": "Ұйымдастырушылардың құттықтау сөзі, мектеп басшылығы мен шақырылған қонақтардың құттықтаулары.",
        "place": "Акт Залы"
    },
    {
        "time": "10:30 - 12:00",
        "event": "Пленарлық отырыс",
        "description": "Шақырылған сарапшылардың негізгі мәселелер бойынша баяндамалары.",
        "place": "Акт Залы"
    },
    {
        "time": "10:30 - 10:50",
        "event": "AI ойлау айнасы ретінде: нейрондық желідегі қателер бізге нені үйрете алады?",
        "description": "Пак Александр-Ғылым Кандидаты, КБТУ Доценті",
        "place": "Акт Залы"
    },
    {
        "time": "10:50 - 11:30",
        "event": 'Панельдік пікірталас " ЖАСАНДЫ ИНТЕЛЛЕКТ еңбек нарығын Қалай өзгертеді және түлектерге қандай дағдылар қажет?"',
        "description": 'Толкын Нурушева - Microsoft Kazakhstan <br> Олжас Мустафин - IT Product Manager, Halyk Finservice <br> Маутхан Айдын - founder of NEO AI Solutions ',
        "place": "Акт Залы"
    },
    {
        "time": "11:30 - 12:00",
        "event": "Apple Intelligence in Swift",
        "description": "Смагул Негматов - iTeacher Academy, Apple Certified Trainer",
        "place": "Акт Залы"
    },
    {
        "time": "12:00 - 13:00",
        "event": "Түскі Үзіліс",
        "description": "Желіге қосылу және естігендеріңізді талқылау мүмкіндігі.",
        "place": "Асхана"
    },
    {
        "time": "13:00 - 16:00",
        "event": '<a href="section1.html">Бөлім 1</a> <br> Оқытудағы жасанды интеллект: жаңа көкжиектер',
        "description": "Математика, физика және химияда АИ қолдану жағдайларын талдау. Практикалық мысалдарды көрсету.",
        "place": "Акт Залы"
    },
    {
        "time": "13:00 - 16:00",
        "event": '<a href="section2.html">Бөлім 2</a> <br> Іс-әрекеттегі жасанды интеллект: құралдар мен технологиялар',
        "description": "Қатысушылар AI көмекшісін құруға, мазмұнды жасау үшін нейрондық желілермен жұмыс істеуге және AI көмегімен бағдарламалауға тырысады.",
        "place": "Абай Залы"
    },
    {
        "time": "13:00 - 16:00",
        "event": '<a href="section3.html">Бөлім 3</a> <br> Психология, Ата-Аналар және жаснады интеллект: Қиындықтар Мен Мүмкіндіктер',
        "description": "Білім беруде Жасанды Интеллектті қолданудың психологиялық аспектілерін, балалар үшін қауіптер мен артықшылықтарды талқылау.",
        "place": "Кітапхана"
    },
    {
        "time": "13:00 - 16:00",
        "event": '<a href="section4.html">Бөлім 4</a> <br> Жасанды интеллект және қоғамның болашағы',
        "description": "Кәсіптердің болашағын, этикалық аспектілерін және қоғамның цифрлық трансформациясын талдау.",
        "place": "Кабинет 123"
    },
    {
        "time": "13:00 - 16:00",
        "event": '<a href="section5.html">Бөлім 5</a> <br> STEM және Робототехника: студенттердің инновациялық жобалары',
        "description": "",
        "place": ""
    },
    {
        "time": "16:00 - 16:30",
        "event": "Конференцияны жабу және қорытындылау",
        "description": "Модераторлардың қысқаша мазмұны, секциялық отырыстардың нәтижелері бойынша қорытындылар, қатысушыларды марапаттау.",
        "place": "Акт Залы"
    }
]

const table_section_1_kz = [
    {
        "time": "13:00 - 13:30",
        "event": "Гуманитарлық білім берудегі жасанды Интеллект: оқытудың жаңа мүмкіндіктері",
        "description": "Сейлбекова Меруерт, Еркембек Бибигуль",
        "place": "Гуманитарлық ғылымдарды оқытуда жасанды интеллектті қолдану, оның оқытуды дербестендіру, күнделікті тапсырмаларды автоматтандыру, мәліметтерді талдау мүмкіндіктері. Жасанды Интеллектті білім беруге енгізудің мысалдары, оның артықшылықтары мен мұғалімдер үшін қиындықтары қарастырылады."
    },
    {
        "time": "13:30 - 14:00",
        "event": "Тесттер мен квиздерді құруда ағылшын тілі сабақтарында жасанды интеллектті қолдану",
        "description": "Малибекова Дана, Мауова Малика",
        "place": ""
    },
    {
        "time": "14:00 - 14:30",
        "event": "Smart Teaching with AI: A New Era for Educators and Students",
        "description": "Каменская Ю.А.",
        "place": ""
    },
    {
        "time": "14:40 - 15:10",
        "event": "Гуманитарлық сабақтарда ЖАСАНДЫ ИНТЕЛЛЕКТТІ қолдану",
        "description": "Хасанова Индира Оспанова, Ахметова Елена Ивановна",
        "place": ""
    },
    {
        "time": "15:10 - 15:50",
        "event": 'Тарихи оқиғаларды модельдеу: теория және практика',
        "description": "Әміртай Э.Т. <br> Шиликбаева А.М <br> Еркембек Б.Б",
        "place": "Тарихтағы модельдеу және жобалау әдістері студенттердің зерттеушілік дағдыларын дамытады және тарихи оқиғаларды терең түсінуге көмектеседі."
    }
]

const table_section_2_kz = [
    {
        "time": "13:00 - 13:30",
        "event": "Мектеп үшін жасснды интеллект көмекшісін құру",
        "description": "Жуандық Сұлтан <br> Амир Айденов",
        "place": "Оқу процесінің виртуалды көмекшісін қалай құруға болады, боттар мен дауыстық көмекшілердің мысалдары"
    },
    {
        "time": "13:30 - 14:00",
        "event": "Мазмұнды құруға және деректерді визуализациялауға арналған нейрондық желілер",
        "description": "Бекбутаева Айдана <br >Абишева Айжан ",
        "place": "Суреттерді өңдеуге, мәтінді және интерактивті визуализацияны құруға арналған заманауи AI құралдарын көрсету"
    },
    {
        "time": "14:00 - 14:30",
        "event": "Эксперименттік жолмен алынған деректерді талдау үшін химиядағы AI рөлі",
        "description": "Садыгулова А.Е. <br>  Казез А. <br> Алипова А.А. ",
        "place": "Сөз сөйлеу шеңберінде химия бойынша оқу процесіне АИ интеграциясының практикалық мысалдары, сондай-ақ оқыту тиімділігін арттыруға, дараландыруға және ХХІ ғасырдың негізгі дағдыларын қалыптастыруға ықпал ететін құралдар ұсынылатын болады"
    },
    {
        "time": "14:30 - 15:15",
        "event": "AI көмегімен бағдарламалау: практикалық мастер-класс",
        "description": "Өтеу Қуаныш ",
        "place": "AI кітапханаларын пайдалануды үйрену, қарапайым бағдарламалар мен машиналық оқыту модельдерін құру"
    },
    {
        "time": "15:15 - 16:00",
        "event": "Педагогикаға арналған цифрлық тест: ең заманауи мектептердегі жағдайлар",
        "description": "Кенжегалиева Б.С. <br> Нурманова М.К. <br> Нұрмағамбет Д.М. ",
        "place": "Білім беруді цифрландыру және білім беру сапасын жақсартуға , білім беру процестерін оқушылардың жеке қажеттіліктеріне бейімдеуге мүмкіндік беретін заманауи мектептерде цифрлық технологияларды белсенді енгізуді жоспарлау."
    }
]

const table_section_3_kz = [
    {
        "time": "13:00 - 13:30",
        "event": "Жасанды интеллекттің балалардың когнитивті дамуына әсері",
        "description": " Увалиева Еркежан Калмуратовна Алматы қ. ФМН НЗМ Педагог-психологы",
        "place": "Жасанды интеллекттің мектеп оқушыларының зейініне, сыни ойлауына және есте сақтау қабілетіне қалай әсер ететінін зерттеу"
    },
    {
        "time": "13:30 - 14:00",
        "event": "Ата-аналар мен мұғалімдер балаларды жасанды интеллектпен өмір сүруге қалай дайындай алады?",
        "description": "Биржанова Жанат Амантаевна. Психология ғылымдарының кандидаты. Психотерапевт.  Жеке тәжірибе ",
        "place": "Жасанды интеллект дәуірінде цифрлық сауаттылық пен сыни ойлауды дамытуға арналған кеңестер"
    },
    {
        "time": "14:00 - 14:30",
        "event": "Жасөспірімдер үшің жасанды интеллекттің қауіптілігі мен пайдасы",
        "description": "Айтбаева Ж.Д Алматы қ. ФМН НЗМ Директордың тәрбие жұмыс жөніндегі орынбасары ",
        "place": "Цифрлық тәуелділіктің, жалған жаңалықтардың және киберқауіпсіздіктің қауіптерін талқылау"
    }
]

const table_section_4_kz = [
    {
        "time": "13:00 - 13:50",
        "event": "Жасанды интеллекттің арқасында қандай мамандықтар жойылып, қайсысы пайда болады?",
        "description": "",
        "place": "Еңбек нарығын талдау, алдағы 10-20 жылға арналған болжамдар"
    },
    {
        "time": "14:00 - 14:50",
        "event": "Жасанды интеллект дәуірінде мамандықты қалай таңдауға болады: болашақта сұранысқа ие дағдылар",
        "description": "",
        "place": "Сессияда біз алдағы онжылдықтарда сұранысқа ие болатын негізгі құзыреттерді талқылаймыз."
    },
    {
        "time": "15:00 - 15:50",
        "event": "Цифрлық дәуірдегі мансап жолдарын қалыптастырудағы мектептер мен университеттердің рөлі",
        "description": "",
        "place": "Оқу орындары жастарға тез өзгеретін еңбек нарығына бейімделуге қалай көмектесе алады? Қазір кәсіптік бағдар беруде қандай жаңа тәсілдерді енгізу керек?"
    }
]

const table_section_5_kz = [
    {
        "time": "13:00 - 13:30",
        "event": "STEM-де тәжірибеге бағытталған оқыту: теориядан нақты жобаларға дейін ",
        "description": "Еркмалиев Д.К.",
        "place": "Жобалау қызметін, зертханалық жұмыстарды және пәнаралық зерттеулерді білім беру процесіне қалай біріктіруге болады? Сәтті жағдайлар мен құралдарды қарастырыңыз."
    },
    {
        "time": "13:30 - 14:00",
        "event": "Химияны оқыту процесінде AI қолдану ",
        "description": "Идрисова С.К. ",
        "place": "Біз ЖИ - ді білім беру процесімен біріктірудің сәтті жағдайларын талдаймыз."
    },
    {
        "time": "14:00 - 14:30",
        "event": "ЖМН пәндеріндегі ЖИ рөлі",
        "description": "Садыгулова А.Е. <br> Казез А. <br> Алипова А.А.  ",
        "place": "Сөз сөйлеу шеңберінде жаратылыстану-математикалық пәндерді оқытуда жасанды интеллектті пайдалану мүмкіндіктері қарастырылады. Химия бойынша оқу процесіне АИ интеграциясының практикалық мысалдары, сондай-ақ оқыту тиімділігін арттыруға, дараландыруға және ХХІ ғасырдың негізгі дағдыларын қалыптастыруға ықпал ететін құралдар ұсынылатын болады."
    },
    {
        "time": "14:40 - 15:10",
        "event": "STEM білімі арқылы географияны оқытудың жаңа тәсілдері",
        "description": "Нурманова М.К. <br> Кенжегалиева Б.С. ",
        "place": "Географияны оқытуда STEM тәсілдерін қолдана отырып, оқушылардың зерттеу қабілеттерін дамыту."
    },
    {
        "time": "15:10 - 16:00",
        "event": "Физиканы оқытудағы жасанды интеллекттің рөлі ",
        "description": "Джумадиллаев К.Н. ",
        "place": "Жасанды интеллект (AI) физиканы оқытуда маңызды рөл атқарады, күрделі ұғымдарды үйренуді жеңілдетеді, оқу процесін жекелендіреді және оның тиімділігін арттырады."
    }
]

// RU TABLES

const table_main_ru = [
    {
        "time": "10:00 - 10:30",
        "event": "Открытие конференции",
        "description": "Приветственная речь организаторов, поздравления от руководства школы и приглашённых гостей. ",
        "place": "Актовый зал"
    },
    {
        "time": "10:30 - 12:00",
        "event": "Пленарное заседание ",
        "description": "Выступления приглашённых экспертов по ключевым вопросам. ",
        "place": "Актовый зал "
    },
    {
        "time": "10:30 - 10:50",
        "event": "ИИ как зеркало мышления: чему могут научить нас ошибки нейросетей  ",
        "description": "Пак Александр- кандидат наук, ассоц профессор КБТУ ",
        "place": "Актовый зал "
    },
    {
        "time": "10:50 - 11:30",
        "event": 'Панельная дискуссия "Как AI меняет рынок труда и какие навыки нужны выпускникам?" ',
        "description": 'Толкын Нурушева - Microsoft Kazakhstan <br> Олжас Мустафин - IT Product Manager, Halyk Finservice <br> Маутхан Айдын - основатель NEO AI Solutions ',
        "place": "Актовый зал "
    },
    {
        "time": "11:30 - 12:00",
        "event": "Apple Intelligence в Swift",
        "description": "Смагул Негматов - iTeacher Academy, Apple Certified Trainer",
        "place": "Актовый зал "
    },
    {
        "time": "12:00 - 13:00",
        "event": "Перерыв на обед ",
        "description": "Возможность нетворкинга и обсуждения услышанного. ",
        "place": "Столовая"
    },
    {
        "time": "13:00 - 16:00",
        "event": '<a href="section1.html">Секция 1</a> <br> Искусственный интеллект в обучении: новые горизонты ',
        "description": "Разбор кейсов использования ИИ в математике, физике и химии. Демонстрация практических примеров. ",
        "place": "Актовый зал "
    },
    {
        "time": "13:00 - 16:00",
        "event": '<a href="section2.html">Секция 2</a> <br> AI в действии: инструменты и технологии ',
        "description": "Участники попробуют создать ИИ-ассистента, работать с нейросетями для генерации контента и программировать с помощью AI. ",
        "place": "Зал Абая "
    },
    {
        "time": "13:00 - 16:00",
        "event": '<a href="section3.html">Секция 3</a> <br> Психология, родители и AI: вызовы и возможности ',
        "description": "Обсуждение психологических аспектов использования AI в обучении, рисков и преимуществ для детей. ",
        "place": "Библиотека"
    },
    {
        "time": "13:00 - 16:00",
        "event": '<a href="section4.html">Секция 4</a> <br> Искусственный интеллект и будущее общества ',
        "description": "Анализ перспектив профессий, этических аспектов и цифровой трансформации общества. ",
        "place": "Кабинет 123"
    },
    {
        "time": "13:00 - 16:00",
        "event": '<a href="section5.html">Секция 5</a> <br> STEM и робототехника: инновационные проекты учащихся ',
        "description": "",
        "place": ""
    },
    {
        "time": "16:00 - 16:30",
        "event": "Closing of the conference and summing up the results",
        "description": "Резюме от модераторов, выводы по итогам секционных заседаний, награждение участников. ",
        "place": "Актовый зал "
    }
]

const table_section_1_ru = [
    {
        "time": "13:00 - 13:30",
        "event": "Искусственный интеллект в гуманитарном образовании: новые возможности для преподавания  ",
        "description": "Сейлбекова Меруерт, Еркембек Бибигуль",
        "place": "Использование искусственного интеллекта в преподавании гуманитарных дисциплин, его возможностям для персонализации обучения, автоматизации рутинных задач и анализа данных. Будут рассмотрены примеры внедрения ИИ в образование, его преимущества и вызовы для преподавателей. "
    },
    {
        "time": "13:30 - 14:00",
        "event": "Применение искусственного интеллекта на уроках английского языка при создании тестов и квизов ",
        "description": "Малибекова Дана, Мауова Малика",
        "place": ""
    },
    {
        "time": "14:00 - 14:30",
        "event": "Smart Teaching with AI: A New Era for Educators and Students",
        "description": "Каменская Ю.А.",
        "place": ""
    },
    {
        "time": "14:40 - 15:10",
        "event": "Использование ИИ на уроках гуманитарного направления ",
        "description": "Хасанова Индира Оспанова, Ахметова Елена Ивановна",
        "place": ""
    },
    {
        "time": "15:10 - 15:50",
        "event": '"Моделирование исторических событий: теория и практика"',
        "description": "Әміртай Э.Т. <br> Шиликбаева А.М <br> Еркембек Б.Б",
        "place": "Методы моделирования и проектирования в истории развивают исследовательские способности учащихся и помогают им глубже понять исторические события. ' research skills and help them understand historical events in depth."
    }
]

const table_section_2_ru = [
    {
        "time": "13:00 - 13:30",
        "event": "Создание AI-ассистента для школы ",
        "description": "Жуандық Сұлтан <br> Амир Айденов",
        "place": "как разработать виртуального помощника для образовательного процесса, примеры ботов и голосовых ассистентов "
    },
    {
        "time": "13:30 - 14:00",
        "event": "Нейросети для генерации контента и визуализации данных ",
        "description": "Бекбутаева Айдана <br >Абишева Айжан ",
        "place": "демонстрация современных AI-инструментов для обработки изображений, текста и создания интерактивных визуализаций "
    },
    {
        "time": "14:00 - 14:30",
        "event": "Роль ИИ в химии для анализа данных, полученных экспериментальным путем ",
        "description": "Садыгулова А.Е. <br>  Казез А. <br> Алипова А.А. ",
        "place": "В рамках выступления будут представлены практические примеры интеграции ИИ в учебный процесс по химии, а также инструменты, способствующие повышению эффективности обучения, индивидуализации и формированию ключевых навыков XXI века "
    },
    {
        "time": "14:30 - 15:15",
        "event": "Программирование с AI: практический мастер-класс ",
        "description": "Өтеу Қуаныш ",
        "place": "обучение использованию AI-библиотек, создание простых программ и моделей машинного обучения "
    },
    {
        "time": "15:15 - 16:00",
        "event": "Цифровой тест для педагогики: условия в самых современных школах",
        "description": "Кенжегалиева Б.С. <br> Нурманова М.К. <br> Нұрмағамбет Д.М. ",
        "place": "Білім беруді цифрландыру және заманауи мектептерде білім сапасын арттыруға , білім беру үдерістерін оқушылардың жеке қажеттіліктеріне бейімдеуге мүмкіндік беретін цифрлық технологияларды белсенді түрде енгізуді жоспарлау. "
    }
]

const table_section_3_ru = [
    {
        "time": "13:00 - 13:30",
        "event": "Влияние AI на когнитивное развитие детей ",
        "description": "Увалиева Еркежан Калмуратовна <br> Педагог-психолог НИШ ФМН г.Алматы ",
        "place": "Исследование того, как AI влияет на внимание, критическое мышление и память школьников "
    },
    {
        "time": "13:30 - 14:00",
        "event": "Как родителям и учителям подготовить детей к жизни с AI? ",
        "description": "Биржанова Жанат Амантаевна. Кандидат психологических наук. Психотерапевт.  Частная практика ",
        "place": "Советы по развитию цифровой грамотности и критического мышления в эпоху AI"
    },
    {
        "time": "14:00 - 14:30",
        "event": "Опасности и преимущества AI для подростков ",
        "description": "Айтбаева Ж.Д Заместитель директора по воспитательной работе  НИШ ФМН г. Алматы  ",
        "place": "Обсуждение рисков цифровой зависимости, фейковых новостей и кибербезопасности "
    }
]

const table_section_4_ru = [
    {
        "time": "13:00 - 13:50",
        "event": "Какие профессии исчезнут, а какие появятся благодаря AI? ",
        "description": "",
        "place": "анализ рынка труда, прогнозы на ближайшие 10–20 лет "
    },
    {
        "time": "14:00 - 14:50",
        "event": "Как выбрать профессию в эпоху AI: навыки, востребованные в будущем ",
        "description": "",
        "place": "На сессии обсудим ключевые компетенции, которые будут востребованы в ближайшие десятилетия. "
    },
    {
        "time": "15:00 - 15:50",
        "event": "Роль школы и университетов в формировании карьерного пути в цифровую эпоху ",
        "description": "",
        "place": "Как образовательные учреждения могут помочь молодежи адаптироваться к стремительно меняющемуся рынку труда? Какие новые подходы в профориентации стоит внедрять уже сейчас? "
    }
]

const table_section_5_ru = [
    {
        "time": "13:00 - 13:30",
        "event": "Практико-ориентированное обучение в STEM: от теории к реальным проектам ",
        "description": "Еркмалиев Д.К.",
        "place": "Как интегрировать проектную деятельность, лабораторные работы и междисциплинарные исследования в образовательный процесс? Рассмотрим успешные кейсы и инструменты. "
    },
    {
        "time": "13:30 - 14:00",
        "event": "Использование ИИ в процессе обучения химии ",
        "description": "Идрисова С.К. ",
        "place": "Разберем успешные кейсы интеграции ИИ в образовательный процесс. "
    },
    {
        "time": "14:00 - 14:30",
        "event": "Роль ИИ в дисциплинах ЕМН ",
        "description": "Садыгулова А.Е. <br> Казез А. <br> Алипова А.А.  ",
        "place": "В рамках выступления рассматриваются возможности использования искусственного интеллекта в преподавании естественно-математических дисциплин. Будут представлены практические примеры интеграции ИИ в учебный процесс по химии, а также инструменты, способствующие повышению эффективности обучения, индивидуализации и формированию ключевых навыков XXI века. "
    },
    {
        "time": "14:40 - 15:10",
        "event": "Новые подходы к преподаванию географии через STEM-образование",
        "description": "Нурманова М.К. <br> Кенжегалиева Б.С. ",
        "place": "Развитие исследовательских способностей учащихся с использованием STEM-подходов в преподавании географии."
    },
    {
        "time": "15:10 - 16:00",
        "event": "Роль искусственного интеллекта в обучении физики ",
        "description": "Джумадиллаев К.Н. ",
        "place": "Искусственный интеллект (ИИ) играет все более важную роль в обучении физике, облегчая изучение сложных концепций, персонализируя образовательный процесс и повышая его эффективность. "
    }
]




tablesToLoad = [
    {
        "table_name": "table_main",
        "table_var": table_main
    },
    {
        "table_name": "table_section_1",
        "table_var": table_section_1
    },
    {
        "table_name": "table_section_2",
        "table_var": table_section_2
    },
    {
        "table_name": "table_section_3",
        "table_var": table_section_3
    },
    {
        "table_name": "table_section_4",
        "table_var": table_section_4
    },
    {
        "table_name": "table_section_5",
        "table_var": table_section_5
    },

    {
        "table_name": "table_main_kz",
        "table_var": table_main_kz
    },
    {
        "table_name": "table_section_1_kz",
        "table_var": table_section_1_kz
    },
    {
        "table_name": "table_section_2_kz",
        "table_var": table_section_2_kz
    },
    {
        "table_name": "table_section_3_kz",
        "table_var": table_section_3_kz
    },
    {
        "table_name": "table_section_4_kz",
        "table_var": table_section_4_kz
    },
    {
        "table_name": "table_section_5_kz",
        "table_var": table_section_5_kz
    },

    {
        "table_name": "table_main_ru",
        "table_var": table_main_ru
    },
    {
        "table_name": "table_section_1_ru",
        "table_var": table_section_1_ru
    },
    {
        "table_name": "table_section_2_ru",
        "table_var": table_section_2_ru
    },
    {
        "table_name": "table_section_3_ru",
        "table_var": table_section_3_ru
    },
    {
        "table_name": "table_section_4_ru",
        "table_var": table_section_4_ru
    },
    {
        "table_name": "table_section_5_ru",
        "table_var": table_section_5_ru
    },
]


const tables = document.getElementsByClassName('table')
const tables_resp = document.getElementsByClassName('table_resp')


for (const table of tables) {
    if(table.dataset.tableToLoad){
        tableClassList = Array.from(table.classList)
        if(tableClassList.includes("table_resp")){
            for (const ttl of tablesToLoad) {
                if(ttl["table_name"] == table.dataset.tableToLoad){
                    for (let index = 0; index < ttl["table_var"].length; index++) {
                        const rowtl = ttl["table_var"][index];
                        table.innerHTML += `
                        <div class="t_row">
                            <div class="t_slot">
                                ${rowtl["time"]}
                            </div>
                            <div class="t_slot">
                                ${rowtl["event"]}
                            </div>
                            <div class="t_hid_row" data-hidrow-open="false">
                                <div class="t_slot">
                                    ${rowtl["description"]}
                                </div>
                                <div class="t_slot">
                                    ${rowtl["place"]}
                                </div>
                            </div>
                            <div class="t_row_respbtn">
                                <span><</span>
                            </div>
                        </div>
                    `
                    }
                }
            }
        } else {
            for (const ttl of tablesToLoad) {
                if(ttl["table_name"] == table.dataset.tableToLoad){
                    for (let index = 0; index < ttl["table_var"].length; index++) {
                        const rowtl = ttl["table_var"][index];
                        table.innerHTML += `
                        <div class="t_row">
                            <div class="t_slot">
                                ${rowtl["time"]}
                            </div>
                            <div class="t_slot">
                                ${rowtl["event"]}
                            </div>
                            <div class="t_slot">
                                ${rowtl["description"]}
                            </div>
                            <div class="t_slot">
                                ${rowtl["place"]}
                            </div>
                        </div>
                    `
                    }
                }
            }
        }
        
        
        
    }
}




const t_row_respbtns = document.getElementsByClassName('t_row_respbtn')
const t_hid_rows = document.getElementsByClassName('t_hid_row')
var canOpenHidrow = true


for (let index = 0; index < t_row_respbtns.length; index++) {
    const trbtn = t_row_respbtns[index];
    const thidrow = t_hid_rows[index];
    trbtn.addEventListener('click', ()=>{
        console.log(thidrow.dataset.hidrowOpen)
        if((thidrow.dataset.hidrowOpen == "false" || !(thidrow.dataset.hidrowOpen)) && canOpenHidrow){
            thidrow.dataset.hidrowOpen = "true"
            canOpenHidrow = false
            setTimeout(()=>{canOpenHidrow = true}, 500)
        }
        if((thidrow.dataset.hidrowOpen == "true") && canOpenHidrow){
            thidrow.dataset.hidrowOpen = "false"
            canOpenHidrow = false
            setTimeout(()=>{canOpenHidrow = true}, 500)
        }
    })
}