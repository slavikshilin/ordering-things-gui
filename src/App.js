import React, { Component } from 'react'
import * as firebase from "firebase"
import { FirebaseConfig } from "./config/keys";
import './App.css'

firebase.initializeApp(FirebaseConfig);
var storage = firebase.storage();
var storageRef = storage.ref();

var database = firebase.database();

/*
database.ref('things/list').set({
    url: 'images/3.jpg',
    caption: 'Иринка 2',
}).then((a) => { 
    console.log(a);
 }).catch((a) => { 
    console.log(a);
 });
*/

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { url: '' };
    }

    componentDidMount() {

        var locThis = this
        var imageList = []

        var databaseRef = database.ref('things')
        databaseRef.once("value")
            .then((snapshot) => {
                imageList = snapshot.val()
                console.log(JSON.stringify(imageList))
                storageRef.child(imageList[1].url).getDownloadURL().then(function (url) {
                    // Or inserted into an <img> element:
                    locThis.setState({ url: url });
                }).catch(function (error) {
                    // Handle any errors
                });

            })
            .catch((a) => { 
                console.log(a);
            });


    }

    render() {
        return (
            <div className="App">
                <img src={this.state.url} alt="Иринка 1"></img>
            </div>
        );
    }
}

export default App;
