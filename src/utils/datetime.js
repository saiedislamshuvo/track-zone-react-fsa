export const getDate = (date) => date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

export const getTime = (time, factor) => `${time} ${factor}`;

export const getDateTimeDiff = (date1, date2) => formatDateTimeDiff(dateTimeDiff(date1, date2));

export const getEventDateTimeDiff = (date1, date2, date3) => {
    const clockTimeDiff = dateTimeDiff(date1, date2);
    const eventTimeDiff = dateTimeDiff(date2, date3);
    return formatDateTimeDiff(eventDateTimeDiff(clockTimeDiff, eventTimeDiff));
};

const eventDateTimeDiff = (clockTimeDiff, eventTimeDiff) => {
    const diffSeconds = clockTimeDiff.diffSeconds + eventTimeDiff.diffSeconds;
    const diffMinutes = clockTimeDiff.diffMinutes + eventTimeDiff.diffMinutes;
    const diffHours = clockTimeDiff.diffHours + eventTimeDiff.diffHours;
    const diffDays = clockTimeDiff.diffDays + eventTimeDiff.diffDays;
    return { diffSeconds, diffMinutes, diffHours, diffDays };
};

const dateTimeDiff = (date1, date2) => {
    const diffTime = Math.abs(date2 - date1);
    const diffSeconds = Math.floor(diffTime / 1000);
    const diffMinutes = Math.floor(diffTime / (1000 * 60));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return { diffSeconds, diffMinutes, diffHours, diffDays };
};

const formatDateTimeDiff = ({ diffSeconds, diffMinutes, diffHours, diffDays }) => {
    if (diffSeconds < 60) {
        return `${diffSeconds} Seconds`;
    } else if (diffMinutes < 60) {
        return `${diffMinutes} Minutes`;
    } else if (diffHours < 24) {
        return `${diffHours} Hours`;
    } else {
        return `${diffDays} Days`;
    }
};