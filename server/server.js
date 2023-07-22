import  express  from "express";
import mongoose from "mongoose";
import profileRouter from "./routes/profiles-routes.js";
import cors from "cors";
import 'dotenv/config';
// import {
//     SecretsManagerClient,
//     GetSecretValueCommand,
//   } from "@aws-sdk/client-secrets-manager";
  import { util } from '@aws-appsync'

  export function request(ctx) {
      return {
          method: 'POST',
          version: '2018-05-29',
          resourcePath: '/',
          params: {
              headers: {
                  'content-type': 'application/x-amz-json-1.1',
                  'x-amz-target': 'secretsmanager.GetSecretValue',
              },
              body: {
                  SecretId: 'APPSYNC_MONGO_API_KEY',
              },
          },
      }
  }
  
  export function response(ctx) {
      //"{Name: 'APPSYNC_MONGO_API_KEY', SecretString: 'abc123'}"
      const result = JSON.parse(ctx.result.body).SecretString
      console.log(result)
      return result
  }

  response();
  
const app = express();
const port = process.env.PORT || 2020;
const url = process.env.MONGO_URL;

app.use(express.json());
app.use(cors());

await mongoose.connect(url);

app.use(profileRouter);

app.listen(port, () => {
    console.log('Listening on port: ' + port);
});
  
//   const secret_name = "APPSYNC_MONGO_API_KEY";
  
//   const client = new SecretsManagerClient({
//     region: "us-east-2",
//   });
  
//   let response;
  
//   try {
//     response = await client.send(
//       new GetSecretValueCommand({
//         SecretId: secret_name,
//         VersionStage: "AWSCURRENT", 
//       })
//     );
//   } catch (error) {
//     throw error;
//   }
  
//   export const secret = response.SecretString;