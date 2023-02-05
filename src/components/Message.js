import React from "react";


export default function Message(props){
    const [date,setDate]=React.useState(new Date())
    return(
        <div className="rounded-2 pt-1 px-2 pb-1 mb-1 one_message container bg-dark text-light" style={{height:"fit-content"}}>
            <h6 className="message_username text-warning text-end pb-2 px-1">
                Vijay
            </h6>
            <h6 className="message_text text-end px-1">
                {props.message_content}
            </h6>
            <div className="message_time text-end text-secondary px-1">
                {props.time}
            </div>
        </div>
    )
}