// Script Log: A cleaner way to log
//// call scriptLog("text"), slog("text"), or just log("text") to use.
/////// Creates a new sheet in your spreadsheet with your log, a timestamp, and the object type.


SLOG = {
  cleared: false,
  ss: SpreadsheetApp.getActiveSpreadsheet(),
  sheetName: "scriptLog"
}

SLOG.sht = getOrCreateLogSheet();

function slog(txt) {
  if (SLOG.cleared == false) {
   SLOG.sht.getRange("A2:B").clearContent();  
    SLOG.cleared = true;
  }
  txt = txt || "Hey man, this is dfda text log";
  SLOG.sht.appendRow([new Date(),typeof(txt), txt]);
}

function scriptLog(txt) {
  slog(txt);
}

function log(txt) {
  slog(txt);
}

function getOrCreateLogSheet() {
 logShtName = SLOG.sheetName;
 var ss = SLOG.ss;
 if(ss.getSheetByName(logShtName) == null) {
   sht = ss.insertSheet(logShtName, (ss.getNumSheets() + 1));
   sht.appendRow(["Time","Type", "Log"]); 
   sht.getRange("A1:C1").setFontWeight("bold");
   sht.getRange("A1:C1").setHorizontalAlignment("center");
   sht.setColumnWidth(1, 150);
   sht.setColumnWidth(2,100);
   sht.setColumnWidth(3, 491);
   sht.getRange("A1:B").setHorizontalAlignment("center");
   sht.getRange("A2:A").setHorizontalAlignment("left");
    sht.getRange("B2:C").setWrap(true);
 } else {
  sht = ss.getSheetByName(logShtName);
 }
 return sht;
}
