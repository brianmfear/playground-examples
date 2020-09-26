import { LightningElement, track, api } from "lwc";

export default class App extends LightningElement {
  @api emailTemplates = [
    {
      Id: "Id1",
      Name: "Demo 1",
      Subject: "Demo 1",
    },
    {
      Id: "Id2",
      Name: "Demo 2",
      Subject: "Demo 2",
    },
    {
      Id: "Id3",
      Name: "Demo 3",
      Subject: "Demo 3",
    },
  ];
  @track selectedEmails = [];

  //set getter for html to get all emails
  get emailOptions() {
    return (this.emailTemplates || [])
    .map((email) => ({
      label: email.Name,
      value: email.Id,
    }));
  }
  //handle picklist name change and show change
  handleEmailNameChange(event) {
    this.selectedEmails = event.target.value;
  }
  get selectedTemplates() {
      return this.emailTemplates
      .filter(email => this.selectedEmails.includes(email.Id));
  }
}
