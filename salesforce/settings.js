import jsforce from "jsforce";
import dotenv from "dotenv";
dotenv.config();

const { SF_LOGIN_URL, SF_USERNAME, SF_PASSWORD, SF_SECURITY_TOKEN } =process.env; //prettier-ignore
const salesforceConnection = new jsforce.Connection({
  loginUrl: SF_LOGIN_URL,
});

console.log(SF_LOGIN_URL);
console.log(SF_USERNAME);
console.log(SF_PASSWORD);
console.log(SF_SECURITY_TOKEN);

salesforceConnection.login(
  SF_USERNAME,
  SF_PASSWORD + SF_SECURITY_TOKEN,
  (error, userInfo) => {
    if (error) {
      console.log(error);
    }
    if (!error) {
      console.log("User id", userInfo.id);
      console.log("Organization id", userInfo.organizationId);
    }
  }
);

export default salesforceConnection;
