# Code play

An utility to play code or console inputs.

```js
const terminalTimeline = timeline({
    target: 'terminal',
  });

  terminalTimeline.addOnComplete({
    event: () => {
      document.getElementById('controls').className = "p-4";
    }
  });

  terminalTimeline.addOnStepComplete({
    event: (event) => {
      console.log({ event });
    }
  })

  terminalTimeline
    .add({
      input: 'johndoe@mbp superface-email '
    });

  terminalTimeline
    .add({
      input: 'npx @superfaceai/cli install communication/send-email -i',
      animated: true,
      characterSpeed: 40,
      delay: 0
    });

  terminalTimeline
    .add({
      input: `
      <pre>
Need to install the following packages:
@superfaceai/cli
Ok to proceed? (y) 
Initializing superface directory
$ echo '<README.md template>' > 'README.md'
$ mkdir 'superface'
$ echo '<initial super.json>' > 'superface/super.json'
$ mkdir 'superface/grid'
$ mkdir 'superface/types'

Initializing communication/send-email

Fetching profile communication/send-email from the Store
GET Profile Info communication/send-email
GET Profile Source File communication/send-email
GET compiled Profile communication/send-email
$ echo '<profile>' > '/Users/johndoe/Development/superface-email/superface/grid/communication/send-email@1.1.0.supr'
$ echo '<compiled profile>' > '/Users/johndoe/Development/superface-email/superface/grid/communication/send-email@1.1.0.supr.ast.json'
$ echo '<updated super.json>' > 'superface/super.json'
🆗 All profiles (1) have been installed successfully.

Configuring package "@superfaceai/one-sdk"
? (Optional) Enter your SDK token generated at https://superface.ai: [hidden]
Continuing without SDK token

🆗 Superface have been configured successfully!

Now you can follow our documentation to use installed capability: "https://docs.superface.ai/getting-started"
  </pre>
      `,
      animated: false,
      delay: 1000
    })

  terminalTimeline.play();
```
