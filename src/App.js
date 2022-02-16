import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

import "./App.css";

const App = () => {
    if(!localStorage.getItem("username")) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="f0adc111-bb05-4d92-9d38-a68c4fcba23b"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;