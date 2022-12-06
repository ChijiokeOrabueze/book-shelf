import { CreationAttributes, Model, ModelStatic } from 'sequelize';

class Repo<T extends Model> {
    private readonly _model: ModelStatic<T>;

    constructor(model: ModelStatic<T>) {
        this._model = model;
    }

    async create(data: CreationAttributes<T>) {

        try {
            const result = await this._model.create(data);

            return result as T;

        } catch (err) {
            throw err
        }


    }
}

export default Repo;
