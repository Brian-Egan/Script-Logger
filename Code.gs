// Script Log: A cleaner way to log

function ScriptLog() {
  this.cleared  = false;
  this.ss = SpreadsheetApp.getActiveSpreadsheet();
  this.sheetName = "scriptLog";
  this.getSheet = function() {
    if (this.sht == undefined) {
     var ss = this.ss;
     if(ss.getSheetByName(this.sheetName) == null) {
       this.sht = ss.insertSheet(this.sheetName, (ss.getNumSheets() + 1));
       this.sht.appendRow(["Time","Type", "Log"]); 
       this.sht.getRange("A1:C1").setFontWeight("bold");
       this.sht.getRange("A1:C1").setHorizontalAlignment("center");
       this.sht.setColumnWidth(1, 150);
       this.sht.setColumnWidth(2,100);
       this.sht.setColumnWidth(3, 491);
       this.sht.getRange("A1:B").setHorizontalAlignment("center");
       this.sht.getRange("A2:A").setHorizontalAlignment("left");
       this.sht.getRange("B2:C").setWrap(true);
       return this.sht;
     } else {
      this.sht = ss.getSheetByName(this.sheetName);
      return this.sht;
     }
    }
  };
  this.sht = this.getSheet();
  this.clear = function() {
    if (this.sht != undefined) {
      this.sht.getRange("A2:C").clearContent();  
    }
  }
}

ScriptLog.prototype.log = function(txt) {
  this.sht.appendRow([new Date(), typeof(txt), txt]);
}

var SL = SL || new ScriptLog();

function clearLog() {
  SL.clear();
}

function slog(txt) {
  txt = txt || "Hey man, this is a text log";
  SL.log(txt);
}

function scriptLog(txt) {
  SL.log(txt);
}

function log(txt) {
  SL.log(txt);
}