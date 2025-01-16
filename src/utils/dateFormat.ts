export const formatDate = (date:string)=>{
    const originalDate = new Date(date);
    const options = {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    const parts = formatter.formatToParts(originalDate);
    const formattedDate = `${parts.find(p => p.type === 'month')?.value} ${parts.find(p => p.type === 'day')?.value} , ${parts.find(p=> p.type === 'year')?.value} at ${parts.find(p => p.type === 'hour')?.value}:${parts.find(p => p.type === 'minute')?.value} ${parts.find(p => p.type === "dayPeriod")?.value}`;
    return formattedDate;
}