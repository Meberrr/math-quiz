function doPost(e) {
  var ss = SpreadsheetApp.openById("1YfC7hnmH0hIHcG8EWilTqYfx0dZeGbnAzpMB4mXP9mA/edit?hl=zh-tw&gid=0#gid=0");
  var sheet = ss.getSheets()[0];
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.class,
    data.studentId,
    data.Q1, data.Q2, data.Q3, data.Q4, data.Q5, data.Q6, data.Q7, data.Q8, data.Q9,
    data.score,
    data.timeSpent
  ]);
  return ContentService.createTextOutput("OK");
}
