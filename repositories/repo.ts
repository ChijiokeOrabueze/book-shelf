import {Model, ModelStatic} from "sequelize"

class Repo {
    private readonly _model:ModelStatic<Model>;
    
    constructor(model:ModelStatic<Model>) {
        this._model = model;
    }

    start () {
        
    }
    
}


export default Repo;