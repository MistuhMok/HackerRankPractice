//Calculate max possible rest time given a string of meetings in a week
function solution(S) {
  const dayHash = {
    Mon: 0,
    Tue: 1,
    Wed: 2,
    Thu: 3,
    Fri: 4,
    Sat: 5,
    Sun: 6,
  };

  const parsedString = S.split('\n');
  const meetingsIntervals = [];

  let counter = 7;
  while (counter--) meetingsIntervals.push([]);

  //Parse string into array intervals
  for (let i = 0; i < parsedString.length; i++) {
    const curr = parsedString[i];
    const currDay = curr.substring(0, 3);
    const meeting = [];

    let startTime = curr.slice(4, 6) + curr.slice(7, 9);
    let endTime = curr.slice(10, 12) + curr.slice(13);

    meeting.push(+startTime, +endTime);

    const dayIndex = dayHash[currDay];
    meetingsIntervals[dayIndex].push(meeting);
  }

  meetingsIntervals.forEach(day => day.sort((a, b) => a[0] - b[0]));

  let maxSleepTime = 0;
  let prevEndOfDay = 0;

  for (let i = 0; i < meetingsIntervals.length; i++) {
    const dailyMeetings = meetingsIntervals[i];
    if (!dailyMeetings.length) {
      //If there are no meetings add a whole day's worth of rest
      prevEndOfDay += 1440;
      maxSleepTime = Math.max(maxSleepTime, prevEndOfDay);
      continue;
    }

    //Calculate from start of day to the first meeting plus what was left over from previous day
    let startOfDay = convertTime(dailyMeetings[0][0]) + prevEndOfDay;
    maxSleepTime = Math.max(maxSleepTime, startOfDay);

    //Calculate the amount of rest between meetings
    for (let j = 0; j < dailyMeetings.length - 2; j++) {
      let nextMeetingStart = dailyMeetings[i + 1][0];
      let currMeetingEnd = dailyMeetings[i][1];
      let currRestTime =
        convertTime(nextMeetingStart) - convertTime(currMeetingEnd);

      maxSleepTime = Math.max(maxSleepTime, currRestTime);
    }

    let lastMeetingEnd = dailyMeetings[dailyMeetings.length - 1][1];
    let endOfDay = convertTime(2400) - convertTime(lastMeetingEnd);

    maxSleepTime = Math.max(maxSleepTime, endOfDay);
    prevEndOfDay = endOfDay;
  }

  return maxSleepTime;
}

function convertTime(num) {
  let mins = 0;

  mins += num % 100;
  mins += Math.floor(num / 100) * 60;

  return mins;
}
