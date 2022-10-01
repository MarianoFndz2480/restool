import mongoose from 'mongoose'

export default async () => {
    if (mongoose.connections.length) return
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log('MongoDB connect successfully')
    } catch (error) {
        throw new Error('Error to connect to DB')
    }
}
