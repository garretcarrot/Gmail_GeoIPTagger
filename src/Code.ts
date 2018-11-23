function createLabel(name: string) {
  let label = GmailApp.getUserLabelByName(name);
  if (label != null) {
    Logger.log("creating label");
    GmailApp.createLabel(name);
  } else {
    Logger.log("not creating label");
  }
}
