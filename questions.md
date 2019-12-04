# My call back function `createNewSms` is not working

On my App.js I have the following: 
```jsx
// my state
  state = {
    messages: [
      { username: "Amy", text: "Hi, Jon!" },
      { username: "Amy", text: "How are you?" },
      { username: "John", text: "Hi, Amy! Good, you?" }
    ],
    users: [{ username: "Amy" }, { username: "John" }]
  };
  
  //my callback function
  createNewSms = (newSms) => {
    this.setState((PrevState)=>({
      ...PrevState,
      messages: PrevState.messages.push(newSms)
    }))
  }

  //passing this in the render to my child component
    {users.map(user => (
            <MessagingApp
              key={user.username}
              users={user.username}
              messages={messages}
              onNewSms={this.createNewSms}
            />
          ))}
```

In MessagingApp I will do the same and pass this to the children of MessagingApp.js
```jsx 
const MessagingApp = (props) => {
    const { users , messages , onNewSms } = props
    return (  
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users}</div>
            <SmsHistory messages={messages} users={users} />
            <SendSms users={users} onNewSms={onNewSms}/>
          </div>
    )
}
```
And in SendSms I will use the callback function so that I can update the state of my App.js
```jsx
sendSmsHandler= (e) => {
    e.preventDefault();
    this.props.onNewSms(this.state)
    this.setState(initState)
  }
```

I reckon this should be working, but it is not.
So, on my call back funtion, if i `console.log()` my new state after a message I will have the following new state: 

```js
{messages: Array(3), users: Array(2)}
messages: Array(4)
0: {username: "Amy", text: "Hi, Jon!"}
1: {username: "Amy", text: "How are you?"}
2: {username: "John", text: "Hi, Amy! Good, you?"}
3: {username: "John", text: "fdsa"}
length: 4
__proto__: Array(0)
users: (2) [{…}, {…}]
__proto__: Object
```

However, this is giving me the following error: 
```text
TypeError: messages.map is not a function
SmsHistory
src/SmsHistory.js:9
   6 | 
   7 | return (
   8 |     <ul className="message-list">
>  9 |     {messages.map((message, index) => (
  10 |       <li
  11 |         key={index}
  12 |         className={
```

And if `console.log()` the newly created statet after a message being typed into my App.js I will get a very strange state: 

```js
{messages: 4, users: Array(2)}
messages: 4
users: (2) [{…}, {…}]
__proto__: Object
```

Why do I have `messages: 4` and not and array of objects as I was expecting?

SOLUTION: 

```jsx
//in my callback function I should be using concat, instead of push
createNewSms = (newSms) => {
    this.setState((PrevState)=>({
      ...PrevState,
      messages: PrevState.messages.push(newSms)
    }))
  }
```
With this I know that i works, but why? Why can't I use push? When I `console.log` within my call back funtion the state seems to be fine
