import React, { useState } from "react";
import "./chatroom.css";
function Deposition() {
  const [loading, setLoading] = useState(false);
   const [isActive, setIsActive] = useState(true);
  const Depositionurl =
    "https://t86a6l5lk4.execute-api.us-east-1.amazonaws.com/production";
  const DepositionHandleChnage = async (e) => {
    setLoading(true);
    console.log(e.target.value);
    const myValue = localStorage.getItem("myKey");
    if (myValue) {
      //post method
      const data = {
        disposition_code: e.target.value,
        contact_id: myValue,
      };
      // console.log(data);
      const response = await fetch(Depositionurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      setLoading(false);
      console.log(json);
      if (json.statusCode === 200) {
        alert("Contact attributes updated successfully");
      } else {
        alert("Contact attributes updated failed");
      }
    } else {
      alert("something went wrong");
      setLoading(false);
    }
    console.log(myValue);
  };
  //   const sahil = "232332222";
  //   localStorage.setItem("myKey", sahil);

  const resume =
    "https://928d9w8i2k.execute-api.us-east-1.amazonaws.com/production/resumerecording";
  const pauseapi =
    "https://928d9w8i2k.execute-api.us-east-1.amazonaws.com/production/suspendrecording";

  const startbuttonfnc = async (e) => {
    console.log("start button clicked");
    e.preventDefault();
    //post request
    const myValue = localStorage.getItem("myKey");
    if (myValue) {
      //post method
     
    
    const response = await fetch(resume, {
      method: "POST",

      body: JSON.stringify({
        contactid: myValue,
      }),
    });
    const data = await response.json();
    if (data.body === "True") {
      
      alert("Recording resume");
          setIsActive(true)

    } else {
      alert("Recording not resume");
          setIsActive(false)

    }
    console.log(data);
  }
  };
  const pausebuttonfnc = async (e) => {
    console.log("pause button clicked");
    e.preventDefault();
    //post request
    const myValue = localStorage.getItem("myKey");
    if (myValue) {
      //post method
    
    
    const response = await fetch(pauseapi, {
      method: "POST",

      body: JSON.stringify(
        {
          contactid: myValue,
        }
      ),
    });
    const data = await response.json();
    if (data.body === "True") {
          setIsActive(false)

      alert("Recording paused");
    } else {
      alert("Recording not paused");
          setIsActive(true)

      
    }
    
    console.log(data);
  };
}
  return (
    <>
      <div className="DepositionContainer">
       <div style={{"height":"70%"}}>
        <div className="Depositionheader">
          <p>Disposition</p>
        </div>
        {loading ? (
          <div className="DepositionCode">Loading...</div>
        ) : (
          <div className="DepositionCode">
            <button value="Cancel" onClick={(e) => DepositionHandleChnage(e)}>
              Cancel
            </button>
            <button
              value="Change or Modification"
              onClick={(e) => DepositionHandleChnage(e)}
            >
              Change or Modification
            </button>
            <button
              value="Pre-booking"
              onClick={(e) => DepositionHandleChnage(e)}
            >
              Pre-booking
            </button>
            <button
              value="Escalation During Travel"
              onClick={(e) => DepositionHandleChnage(e)}
            >
              Escalation During Travel
            </button>
            <button
              value="Complaint Post Travel"
              onClick={(e) => DepositionHandleChnage(e)}
            >
              Complaint Post Travel
            </button>
            <button
              value="General Question"
              onClick={(e) => DepositionHandleChnage(e)}
            >
              General Question
            </button>
                
            <button value="Irop" onClick={(e) => DepositionHandleChnage(e)}>
              Irop
            </button>
            <button value="Others" onClick={(e) => DepositionHandleChnage(e)}>
              Others
            </button>
                <button
              value="General inquiry to Air"
              onClick={(e) => DepositionHandleChnage(e)}
            >
             General inquiry to Air
            </button>
                                <button
              value="Requesting to change Air"
              onClick={(e) => DepositionHandleChnage(e)}
            >
       Requesting to change Air
            </button>
                                <button
              value="Requesting to cancel Air
"
              onClick={(e) => DepositionHandleChnage(e)}
            >
            Requesting to cancel Air

            </button>
          </div>
        )}
          </div>
          <div style={{height:"30%"}}>
       <div className={isActive ? "Recordingcontrol" : 'inactive'}>
          <p>{isActive?"Recording":"Recording Stopped"}</p>
        </div>
        <div className="controlsbutton">
        <button className="pauseButton" onClick={pausebuttonfnc}>
            Pause
          </button>
          <button className="startButton" onClick={startbuttonfnc}>
            Resume
          </button>
        </div>
    
      

      </div>
      </div>
    </>
  );
}

export default Deposition;
