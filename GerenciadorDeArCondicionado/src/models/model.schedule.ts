export class modelSchedule {
  constructor(
    public _id: string,
    public date: string,
    public environment: string,
    public startTimeMorning: string,
    public endTimeMorning: string,
    public startTimeAfternoon: string,
    public endTimeAfternoon: string,
    public startTimeNight: string,
    public endTimeNight: string  
  ){}
}