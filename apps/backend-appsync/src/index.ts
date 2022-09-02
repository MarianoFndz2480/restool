// export default class API {
//   declare headers;

//   constructor({ headers, credentials }) {
//     this.headers = headers;

//   }

//   async process() {
//     await this.validateAuth();
//   }

//   validateAuth(){
//     if (!process.env.OFFLINE)
//   }

//   getCredentials() {
//     if (
//       process.env.IS_OFFLINE &&
//       // Localhost:20002 means the request is from the UI-APP
//       this.headers.host !== 'localhost:20002'
//     ) {
//       return await cb(event.arguments, {
//         user_id: '6eb52e92-0312-41a8-9bf1-5a96a796ba21',
//         jwt: '',
//         rol: RolEnum.ADMIN,
//       }); // In local env, skip auth}
//     }
//     if (event.unauthorized instanceof ApproachError) {
//       return { error: event.unauthorized, data: defaultVal };
//     }
//     return {
//       user_id: event.user_id,
//       jwt: event.jwt,
//       rol: event.rol,
//     };
//   }

//   processData() {
//     throw new Error('The processData method must be override');
//   }
// }
