export class LoginModel {
    constructor(model?: Partial<LoginModel>) {
        if (model) {
            Object.assign(this, model);
        }
    }
}

