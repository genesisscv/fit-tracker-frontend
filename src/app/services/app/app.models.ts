export class AppData {
    public user: AppUser = new AppUser();

    constructor(model?: Partial<AppData>) {
        if (model) {
            Object.assign(this, model);
        }
    }
}

export class AppUser {
    public id!: number;
    public username!: string;
    public password!: string;

    constructor(model?: Partial<AppUser>) {
        if (model) {
            Object.assign(this, model);
        }
    }
}

// Initial code

// export class AppUser {
//     public id: number;
//     public name: string;
//     public status: string;
//     public species: string;
//     public type: string;
//     public gender: string;
//     public origin: {
//         name: string;
//         url: string
//     };
//     public location: {
//         name: string;
//         url: string
//     };
//     public image: string;
//     public episode: string[];
//     public url: string;
//     public created?: Date;

//     constructor(model?: Partial<AppUser>) {
//         if (model) {
//             Object.assign(this, model);

//             if (model.created) {
//                 this.created = new Date(model.created);
//             }
//         }
//     }
// }
