import React from "react";
import "./styles.css";
import { Sparkles, Dumbbell, NotebookPen, Send } from "lucide-react";
import Modelviewer from "./components/Modelviewer";
import BackgroundQuotes from './components/BackgroundQuotes';
import Terminal from "./components/Terminal"; 
import {Link} from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Home() {
  return (
    
    <main>
      <div className="main-container">
      {/* background quotes */}
      <BackgroundQuotes />
      </div>
      <div className="container">
        {/* Header */}
        <section className="header">
          <h1 className="title">Caught Fire Coding</h1>
          <p className="subtitle">
            I code like I lift—clean form, heavy sets. Just a guy navigating life one semicolon at a time. Think of me as tech support for my own bad ideas.
          </p>
        </section>
         {/* 3D Model Section */}
      <section style={{ marginTop: "50px" }}>
        <Modelviewer />
      </section>

    <Terminal/>
      

        {/* Cards */}
        <section className="cards">
          <Link to="/chaotic" className="card card-red">
            <Sparkles className="card-icon" size={32} color="#FF4C4C" />
            <h2 className="card-title">The Chaos File</h2>
            <p className="card-text"> Personal takes, dev rants and how caffeine and chaos keep the code running.</p>
          </Link>

          <Link to="/projects" className="card card-cyan">
            <Dumbbell className="card-icon" size={32} color="#3EC1D3" />
            <h2 className="card-title">Things I Broke & Fixed</h2>
            <p className="card-text">Projects that survived the fire (mostly).</p>
          </Link>

          <Link  to="/blog"className="card card-yellow">
            <NotebookPen className="card-icon" size={32} color="#E8D44D" />
            <h2 className="card-title">Console Output</h2>
            <p className="card-text"> About me, my vibe and thoughts dumped raw.</p>
          </Link>
        </section>
        <Helmet><title>Home | ap0calyspe</title></Helmet>

        {/* Contact */}
        <section className="contact">
          <h2 className="contact-title">Ping Me</h2>
          <p className="contact-text">You made it this far, might as well say hi.</p>
          <button className="contact-button">
            <Send size={18} /> <a href="https://www.linkedin.com/in/anirban-pal-60913a255/">Contact</a>
          </button>
        </section>
      </div>
    </main>
  );
}
