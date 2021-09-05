import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <section>
        <img
          src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
          className="Image"
          alt="Badge"
        />
        <div class="main">
          <p>
            {" "}
            Me <br /> skills <br /> Profiles <br /> Education{" "}
          </p>
        </div>

        <h1 class="head">Tushar Patil</h1>

        <h1 class="head">About Me</h1>

        <p class="para">
          Hi my name is Tushar Patil. I am pursuing IT engineering. I like to do
          my carrier as a UI/UX designer.{" "}
        </p>

        <h1 class="head">Skills</h1>

        <p class="p1">HTML CSS Javascript UI/UX C++</p>

        <h1 class="head">Profiles</h1>
        <p class="para">
          <a
            href="https://www.linkedin.com/in/tushar-patil-46b419203/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>{" "}
          <a
            href="https://github.com/prog-2000"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
        <h1 class="head">Education</h1>
        <p class="para">Third Year IT Engineering </p>
      </section>
    </div>
  );
}
