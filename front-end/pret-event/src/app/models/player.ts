export class Player {
    id: number;
    username: string;
    // tslint:disable-next-line: variable-name
    university_id: string;
    points: number;
    // tslint:disable-next-line: variable-name
    photo_url: string;
    password: string;
  
    constructor(name: string, universityId: string, points: number, password: string, photoUrl?: string) {
        this.username = name;
        this.university_id = universityId;
        this.points = points;
        this.photo_url = photoUrl;
        this.password = password;
    }
  }