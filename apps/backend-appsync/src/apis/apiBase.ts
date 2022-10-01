import mongooseConnection from '../database/mongooseConnection'

export default class API {
    declare headers
    declare credentials

    constructor({ headers, credentials }) {
        this.headers = headers
        this.credentials = credentials
    }

    async process() {
        await mongooseConnection()

        await this.validateAuth()

        const data = await this.processData()

        await this.postSaveLog()

        return data
    }

    validateAuth() {
        if (process.env.OFFLINE) return

        //Get User from DB
    }

    // HANDLER
    // getCredentials() {
    //     if (process.env.OFFLINE) {
    //         return {
    //             userId: '6eb52e92-0312-41a8-9bf1-5a96a796ba21',
    //             jwt: '',
    //         };
    //     }

    //     return {
    //         user_id: 'event.userId',
    //         jwt: ' event.jwt',
    //     };
    // }

    processData() {
        throw new Error('The processData method must be override')
    }

    postSaveLog() {
        //AddLog
        return 'this.getPostSaveLogData()'
    }

    /**
     * Get data to create post save log
     * EXAMPLE: { entity: 'waiter', action: 'create' }
     * @returns {Object} data
     */
    getPostSaveLogData() {
        throw new Error('The getPostSaveLogData method must be override')
    }
}
