const movies = [
    {   
        name: "Judy",
        description: "Judy Garland - cudowne dziecko sceny i wielkiego ekranu, dziewczyna, która dzięki niewinnej urodzie, niezwykłemu głosowi i szczególnej charyzmie podbiła serca światowej publiczności. Wraz z wielkim sukcesem przyszła samotność, nieszczęśliwe miłości, cztery burzliwe małżeństwa, a z czasem coraz mniejsze zainteresowanie publiczności, gorsze kontrakty, chałtury. W tym właśnie momencie życia poznajemy Judy Garland w filmie Ruperta Goolda. Zmęczona życiem artystka, której największym pragnieniem jest zapewnienie spokojnego bytu swoim ukochanym dzieciom. Żyjąca marzeniami kobieta, która prawie pogodziła się z faktem, że najlepsze już za nią. I wtedy pojawia się niezwykła propozycja. Okazuje się, że w Londynie, Judy Garland wciąż jest wielką gwiazdą, a publiczność pragnie oglądać ją na najlepszych scenach. Czy Judy jest wciąż gotowa na kolejny skok w nieznane? Czy aby zapewnić szczęście dzieciom, zdecyduje się zostawić je na długie miesiące? Czy tajemniczy młody mężczyzna może być tym, na którego czekała całe życie?",
        releaseDate: "2019",
        genre: "Dramat/Biograficzny",
        origin: "Wlk.Brytania",
        time: "1 godz. 58 min",
        imgSrc: "./img/Judy.jpg",
        seanses: [
        ]
    },
    {
        name: 'Kod Dedala',
        description: "Dziewięciu tłumaczy zostaje zamkniętych w luksusowym bunkrze. Mają wspólnie pracować nad przekładem książki, na którą czekają miliony fanów. Praca marzeń okazuje się jednak więzieniem. Brak kontaktu ze światem i rygorystyczne zasady budzą frustracje. Kiedy fragment książki, wraz z żądaniem okupu, pojawia się w Internecie, rozpoczyna się polowanie na winnego i wyścig z czasem. Nikt nikomu nie ufa, każdy jest podejrzany, a bezwzględny wydawca nie cofnie się przed niczym, by zdemaskować i ukarać ją lub… jego. Trzymające w napięciu kino z zaskakującym finałem.",
        releaseDate: "2019",
        genre: "Thriller/Sensacja",
        origin: "Francja/Belgia",
        time: "1 godz. 45 min",
        imgSrc: "./img/KodDedala.jpg",
        seanses: [
        ]
    },  
    {
        name: "Jak zostałem gangsterem. Historia prawdziwa",
        description: "„Jak zostałem gangsterem. Historia prawdziwa” to film o przyjaźni i miłości w czasach, w których pozwolenie sobie na emocje może okazać się tragiczne w skutkach. W życiu Bohatera liczą się tylko dwie osoby – najbliższy przyjaciel i ukochana kobieta, a światem jego interesów rządzi przemoc. Akcja filmu zaczyna się w latach 70-tych – już wtedy młody Bohater wie, że adrenalina smakuje bardziej niż mleko w proszku. Z czasem odkrywa też pragnienie pieniędzy, władzy i bycia ponad prawem. Rozpoczyna się transformacja, a jego gangsterski talent rozkwita. Wspólnie z przyjacielem buduje własną armię. Oparta na faktach historia Bohatera po raz pierwszy pokazuje prawdziwe oblicze polskich mafiosów: zaczynali w kreszowych dresach i stworzyli organizację przestępczą, która przez chwilę panowała nad całym krajem. Finał tej historii nie został jednak napisany pociskami i krwią – czasem słowo rani mocniej niż kula, a miłość i przyjaźń mogą być lekarstwem, nawet w najbardziej okrutnych rękach.",
        releaseDate: "2020",
        genre: "Sensacja/Akcja",
        origin: "Polska",
        time: "2 godz. 20 min",
        imgSrc: "./img/Gangsterem.jpg",
        seanses: [
        ]
    },
    {
        name: "Gwiezdne wojny: Skywalker. Odrodzenie",
        description: "Lucasfilm i reżyser J.J. Abrams raz jeszcze łączą siły, aby zabrać widzów w spektakularną podróż do odległej galaktyki w filmie Gwiezdne wojny: Skywalker. Odrodzenie. Saga rodziny Skywalkerów dobiega końca. Tego po prostu nie można przegapić! Czym zaskoczą w finale twórcy jednej z najbardziej kultowych serii w historii kina? Jaki będzie finał odwiecznej batalii pomiędzy jasną i ciemną stroną mocy? W filmie Gwiezdne wojny: Skywalker. Odrodzenie znajduje się kilka scen z dynamicznymi efektami świetlnymi, które mogą powodować dyskomfort u widzów wrażliwych na światło i wpływać na osoby z epilepsją fotogenną.",
        releaseDate: "2019",
        genre: "Science-Fiction",
        origin: "USA",
        time: "2 godz 22 min",
        imgSrc: "./img/GwiezdneWojny.jpg",
        seanses: [
        ]
    },
]

//export default movies;

function getRandomInt() {
    min = Math.ceil(0);
    max = Math.floor(4);
    return Math.floor(Math.random() * (max - min)) + min;
}

function setDayText(i) { 
    let seanseDay = new Date()
    seanseDay.setDate(seanseDay.getDate() + i);
    const dd = String(seanseDay.getDate()).padStart(2, '0');
    const mm = String(seanseDay.getMonth() + 1).padStart(2, '0');
    const yyyy = seanseDay.getFullYear();
    const seans = dd + '.' + mm + '.' + yyyy;

    return seans;
}

function createCompleteMovieList() {
    const completedMovieList = movies.map((movie) => {
        const seanses = [];
        for (let i = 0; i < 5; i++) {
            day = setDayText(i);
            let hours = [];
            let hoursArray = ['10:00', "11:30", '12:20', '15:30', '17:00', '20:00'];
            let j = getRandomInt();
            hours.push(hoursArray[j]);
            hours.push(hoursArray[j+2]);
            seanses.push({
                'day': day,
                'hours': hours});
            movie.seanses = seanses;
        }
        return movie;
    })
    return completedMovieList;
};

module.exports = createCompleteMovieList;