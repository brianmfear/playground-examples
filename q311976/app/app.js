import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track existingUsers = [ {
        id: "12345",
        icon: "utility:up",
        UserOrGroup: {
            Id: "12345",
            Name: "Demo1"
        }
    },
    {
        id: "123456",
        icon: "utility:up",
        UserOrGroup: {
            Id: "123456",
            Name: "Demo2"
        }
    },
    ]
    handleRemoveSelectedItem(event) {
        var user = this.existingUsers.find(user => user.id === event.detail.name)
        
        if(user.icon === 'utility:up') {
            user.icon = 'utility:down';
        } else {
            user.icon = 'utility:up';
        }

    }
}
