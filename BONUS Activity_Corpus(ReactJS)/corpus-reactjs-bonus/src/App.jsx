import React, { useState } from "react";
import StudentCard from "./StudentCard";

function App() {
  return (
    <div>
      <StudentCard
        image="https://scontent.fmnl2-2.fna.fbcdn.net/v/t39.30808-6/399317636_3532292413652551_5233982634286321721_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGzqkpioKVwiugcDHFNBqfniPLdsAHjjlGI8t2wAeOOUW5GtXc6UnTuLKttgpJaYrxNBji7VyHUWF_WiI7ZUv9Q&_nc_ohc=sSrH2b6J-loAX8ciTeC&_nc_ht=scontent.fmnl2-2.fna&oh=00_AfA0e0qXnpexr7bGnMp9yiBiHtWwtmcvCegIIBhBruB1dw&oe=6567D35D" // Replace with your image URL
        name="Neil Corpus"
        id={211027}
        bday="December 27, 2000"
        quote="DUN DUN TUN TUN MAX VERSTAPPEN"
        />

       <StudentCard/>

    </div>
  );
}

export default App;
