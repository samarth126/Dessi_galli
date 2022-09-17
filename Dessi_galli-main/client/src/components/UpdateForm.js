import React, { useState, useEffect, useContext, } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { useHistory, } from 'react-router';
import { Link } from 'react-router-dom';

const Updates = () => {
    let { authTokens, logoutUser } = useContext(AuthContext);
    const [update, setupdate] = useState(null);
    

    const addNewPost = async () => {
        let formField = new FormData();
        formField.append("update", update);
        

       

        await axios({
            method: "post",
            url: "http://localhost:8000/api/eventpost/",
            data: formField,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(authTokens.access)
            }
        }).then((response) => {
            console.log(response.data);
            // let data = await response.json();

            if (response.status === 200) {

            } else if (response.statusText === "Unauthorized") {
                logoutUser();
            }
        });

    };
    

    return (
        <>
            <h1 class="text-center">Updates</h1>
            <form>



                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Alert Message/Event</label>
                    <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        value={update}
                        onChange={(e) => setupdate(e.target.value)}
                    ></textarea>
                </div>

                <button type="submit" class="btn btn-dark btn-lg"
                    onClick={addNewPost}>SUBMIT</button>
            </form>
        </>
    );
};

export default Updates;
