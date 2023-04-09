 
const getDateTimeFromTimeStamp =  (isoDate)=>{ 
    const dateObj = new Date(isoDate);
    var month = dateObj.getUTCMonth() + 1;  
    var day = dateObj.getUTCDate();
    var hour = dateObj.getHours();
    var minute = dateObj.getMinutes();
    var second = dateObj.getSeconds();
    var year = dateObj.getUTCFullYear(); 
    return {hour,minute,second,day,month,year}
}
export default getDateTimeFromTimeStamp;