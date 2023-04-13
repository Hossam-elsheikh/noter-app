const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  export const configureDate =() =>{

      const date = new Date();
      let month = months[date.getMonth()];
   const currentDate = `${date.getUTCDate()} ${month} ${date.getFullYear()}`;
    return currentDate
  }