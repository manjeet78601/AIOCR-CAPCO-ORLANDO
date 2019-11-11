export class Task {
    id: number;
    title : string;
    desc: string;
    matIcon: string;
    nbrItems: number;
    route: string;
    visible: boolean;
    subTasks?: object;
}