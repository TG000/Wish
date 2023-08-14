export class Scene {
    constructor() {
        this.model;
        this.stage;
        this.sceneDecor;
        this.entities = [];
    }

    update(time, context) {
        for (const entity of this.entities) {
            entity.update(time, context);
        }
    }

    draw(context) {
        for (const entity of this.entities) {
            entity.draw(context);
        }
    }
}