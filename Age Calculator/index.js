let d=document.querySelector(".date");

function show(){

    let date=d.value.split("-");
    console.log(date);
    let day= date[2];
    console.log(day);
    let month=date[1];
    console.log(month);
    let year=date[0];
    console.log(year);

    let today=new Date();
    let y=today.getFullYear();
    let diff=y-year;
    console.log(diff);
    let para=document.querySelector("p");

    let m=today.getMonth();
    let diff1=m-month;
    console.log(diff1);

    let datess=today.getDate();
    let diff2=datess-day;
    console.log(diff2);

    para.innerHTML=`You are ${diff} years, ${diff1} months and ${diff2} days old`;
}