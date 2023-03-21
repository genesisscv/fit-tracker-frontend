export class CharacterCardModel {
    constructor(model?: Partial<CharacterCardModel>) {
        if (model) {
            Object.assign(this, model);
        }
    }
}

