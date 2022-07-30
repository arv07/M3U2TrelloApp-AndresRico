const d = new moment();

console.log(d.year())
//moment("12-25-1995", "MM-DD-YYYY");

//console.log(moment("12-25-1995", "MM-DD-YYYY"));



export function validateDate(date){
    const input = moment(date, "YYYY-MM-DD")

    const i_year = input.year();
    const i_month = input.month();
    const i_day = input.date();

    const doTaskDate = i_year + "-" + (input.month() + 1) + "-" + input.date();

    const actual = moment();

    const a = actual.year() + "-" + (actual.month() + 1) + "-" + actual.date();
    /*console.log(a);
    console.log(doTaskDate);
    console.log(moment(a).isAfter(doTaskDate));*/

    console.log(moment(a).to(doTaskDate, true));

  
    return moment(a).isAfter(doTaskDate);

    
}

export default function countDown(date)
{
    const actual = moment();

    const a = actual.year() + "-" + (actual.month() + 1) + "-" + actual.date();

    console.log(moment(a).to(date, true));

    return moment(a).to(date, true)
}


/*console.log(moment()._d.getYear());
console.log(moment()._d.getMonth());
console.log(moment()._d.getDate());*/