export interface Member{
    id:string
    email:string,
    avatar:string,
    token?:string,
    status: Status
}

export enum Status {
    Invited = "Invited",
    Accepted = "Accepted",
    Declined =  "Declined"

}