import mongoose, { Schema, SchemaDefinition } from 'mongoose'

class ModelFactory {
    static get modelName(): string | Error {
        throw new Error('The getter modelSchema must be override')
    }

    static get databaseName(): string {
        throw new Error('The getter databaseName must be override')
    }

    static get modelSchema(): SchemaDefinition | Error {
        throw new Error('The getter modelSchema must be override')
    }

    static getModelIntance() {
        const connection = mongoose.createConnection(
            `mongodb+srv://restool:53aJmY8nCI4UDhJa@cluster0.1k3tphb.mongodb.net/${this.databaseName}`
        )

        const schema = new Schema(this.modelSchema as SchemaDefinition)

        return connection.model(this.modelName as string, schema)
    }
}

export default class ProductModelFactory extends ModelFactory {
    static get modelName() {
        return 'Product'
    }

    static get databaseName() {
        return 'core'
    }

    static get modelSchema() {
        return {
            firstName: String,
            lastName: String,
            email: String,
            password: String,
            createdAt: { type: Date, default: Date.now },
            deletedAt: Date,
            updatedAt: Date,
        }
    }
}
