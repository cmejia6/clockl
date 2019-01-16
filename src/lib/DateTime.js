export default class DateTime{
    constructor(date){
        this.date = date ? date : new Date();

        this.daysOfWeek = [
                'Monday', 'Tuesday', 'Wedsnday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
            ]

        this.months = [
                "January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October",
                "November", "December"
            ]
        }

    hours () {
        return this.date.getHours();
    }

    minutes(){
        return this.date.getMinutes();
    }

    seconds(){
        return this.date.getSeconds();
    }

    dayNum(){
        return this.date.getDate();
    }

    day(){
        return this.daysOfWeek[this.date.getDay()];
    }

    month(){
        return this.months[this.date.getMonth()];
    }

    year(){
        return this.date.getFullYear();
    }


    static timeString(date){
        var dateTime = new DateTime();
        return `${dateTime.hours()} : ${ dateTime.minutes()} : ${dateTime.seconds()}`    
    }

    static dateString(date){
        var dateTime = new DateTime();
        return `${dateTime.day().substring(0,3)} ${dateTime.dayNum()} ${dateTime.month()} ${dateTime.year()}`
    }
}