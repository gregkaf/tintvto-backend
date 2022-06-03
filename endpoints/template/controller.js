// import jsforce from "jsforce";
import dotenv from "dotenv";
import salesforceConnection from "../../salesforce/settings.js";
// dotenv.config();

// const { SF_LOGIN_URL, SF_USERNAME, SF_PASSWORD, SF_SECURITY_TOKEN } =process.env; //prettier-ignore
// const salesforceConnection = new jsforce.Connection({
//   loginUrl: SF_LOGIN_URL,
// });

// console.log(SF_LOGIN_URL);
// console.log(SF_USERNAME);
// console.log(SF_PASSWORD);
// console.log(SF_SECURITY_TOKEN);

// salesforceConnection.login(
//   SF_USERNAME,
//   SF_PASSWORD + SF_SECURITY_TOKEN,
//   (error, userInfo) => {
//     if (error) {
//       console.log(error);
//     }
//     if (!error) {
//       console.log("User id", userInfo.id);
//       console.log("Organization id", userInfo.organizationId);
//     }
//   }
// );

export const getTemplate = async (_, res) => {
  salesforceConnection.query("SELECT Id, Name FROM Account", (err, data) => {
    if (err) {
      res.send(err);
    }
    if (!err) {
      console.log("Total records:", data.totalSize);
      // console.log("Total records:", data.totalSize);
      res.send(data.records);
      // res.send({
      //   id: "hello",
      // });
    }
  });
  // res.send({
  //   id: "hello",
  // });
};
