import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Message from "./Message";
import { db } from "./firebase_config";
import { collection, getDocs, addDoc, doc, onSnapshot, serverTimestamp, orderBy } from 'firebase/firestore'
import { ref, query, orderByChild, getDatabase, get } from "firebase/database";

function Message_input() {
    var [disablebutton, setDisablebutton] = React.useState(true);

    var [number, setNumber] = React.useState([]);
    var [present_message, setPresent_message] = React.useState("");

    ////////////////////////
    const userCollectionref = collection(db, "messages")

    useEffect(() => {
        const db2 = getDatabase()
        const get_messages = query(userCollectionref,orderBy("createdAt","desc"))
        onSnapshot(get_messages,(snapshot) => {
            console.log(snapshot.docs)
            setNumber(snapshot.docs.map((doc) => ({ ...doc.data() })))
        })
        // onSnapshot(userCollectionref, (snapshot) => {
        //     console.log(snapshot.docs);

        //     setNumber(snapshot.docs.sort((a, b) => a['createdAt'] - (b['createdAt'])).map((doc) => ({ ...doc.data() })))
        // })
        // const getUsers = async () => {
        //     const data = await getDocs(userCollectionref);
        //     console.log(data)
        //     console.log(data.docs)
        //     let new_arr = number.slice();
        //     setNumber(data.docs.map((doc)=>({...doc.data()})))
        // }

        // getUsers()
    }, [])

    function disable_button(event) {
        if (event.target.value == "") {
            setDisablebutton(true)
        }
        else {
            setDisablebutton(false)
            present_message = event.target.value;
        }
    }
    function sendMessage() {
        let new_arr = number.slice();
        const data = {
            message: present_message,
            time: new Date().toLocaleTimeString('it-IT').substring(0, 5)
        }
        new_arr.push(data);
        setNumber(new_arr)
        document.getElementById("present_message").value = ""

    }
    const addMessage = async () => {
        document.getElementById("present_message").value = ""
        await addDoc(userCollectionref, { user: "Vijay", message: present_message, time: new Date().toLocaleTimeString('it-IT').substring(0, 5), createdAt: serverTimestamp() })


    }
    return (
        <div className="container">
            <React.StrictMode>
                <div className="d-flex flex-column justify-content-center" style={{ height: "90vh" }}>
                    <div className="container" id="all_messages">
                        {/* <Message message_content={"This is: me"} />  */}
                        {number.map((ele, index) => {
                            return (
                                <Message key={index} message_content={ele.message} time={ele.time} />
                            )
                        })}

                    </div>
                    <form onSubmit={(event) => event.preventDefault()} className="mt-auto d-flex flex-row">
                        <input onChange={disable_button} id="present_message" className="form-control"></input>
                        <button type="submit" onClick={addMessage} className="btn btn-outline-light" disabled={disablebutton}><img src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/null/external-send-user-interface-kmg-design-flat-kmg-design.png" /></button>
                    </form>
                </div>
            </React.StrictMode>
        </div>
    )
}

export default Message_input