function createSeats() {
    const array = [[],[],[],[],[],[],[],[],[],[]];
    for (let i = 0; i < 10; i++) {
        for (let j=0; j < 10 ; j++) {
            const string = String.fromCharCode(65+i) + j;
            array[i][j] = {
                isBooked: false,
                seatMark: string,
            }
        }
    }
    return array;
}


const seats = createSeats();

export function seans() {
    return seats;
}

export function updateSeans(bookedPlaces) {
    const seans = createSeats();
    for (let i = 0; i < 10; i++) {
        for (let j=0; j < 10 ; j++) {
            seans[i][j].isBooked = bookedPlaces[i][j]
        }
    }
    return seans;
}