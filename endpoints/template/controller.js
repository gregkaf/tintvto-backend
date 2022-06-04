import salesforceConnection from "../../salesforce/settings.js";

export const getTemplate = async (_, res) => {
  salesforceConnection.query("SELECT Id, Name FROM Account", (err, data) => {
    if (err) {
      res.send(err);
    }
    if (!err) {
      console.log("Total records:", data.totalSize);
      // console.log("Total records:", data.totalSize);
      res.json(data.records);
      // res.send({
      //   id: "hello",
      // });
    }
  });
  // res.send({
  //   id: "hello",
  // });
};
