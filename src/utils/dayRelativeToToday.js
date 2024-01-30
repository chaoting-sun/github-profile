const calculateDayRelativeToToday = (lastUpdatedDateString) => {
  const lastUpdatedDate = new Date(lastUpdatedDateString);
  const currentDate = new Date();

  // console.log(lastUpdatedDateString, lastUpdatedDate, currentDate)

  const timeDifference = currentDate - lastUpdatedDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

export default calculateDayRelativeToToday;

// const lastUpdatedDateString = "2022-07-19T17:50:47Z";
// const daysDifference = calculateDaysDifference(lastUpdatedDateString);
// console.log(`Days difference: ${daysDifference}`);
