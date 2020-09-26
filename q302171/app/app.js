import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    base64Output;
    async handleInput(event) {
        const fileName = event.target.files[0].name;
        try {
            const fileContent = await this.readFile(event.target.files[0]);
            this.base64Output = fileContent;
            const initEvent = new CustomEvent(
                'initialize',
                {
                    detail: {
                        fileName: fileName,
                        body: fileContent
                    }
                }
            );
            initEvent.fire();
        } catch(error) {
            console.log(JSON.stringify(error));
        }
    }
    readFile(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                resolve(fileReader.result.split(/base64,/)[1]);
            };
            fileReader.onerror = () => {
                reject(fileReader.error);
            };
            fileReader.readAsDataURL(file);
        });
    }
}
