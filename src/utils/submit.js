export function execute() {
  return gapi.client.sheets.spreadsheets.values
    .update({
      spreadsheetId: "1PnTTnxT0uGpdtCQ9juvK6KS2C8j63fopF5e_hj-liCI",
      range: "'Contact'!A2:D2",
      valueInputOption: "RAW",
      resource: {
        values: [
          [
            "Mandy",
            "mandy123@gmail.com",
            "no concern",
            '[{"productName":"A", "count": 2}]',
          ],
        ],
      },
    })
    .then(
      function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
      },
      function (err) {
        console.error("Execute error", err);
      }
    );
}
