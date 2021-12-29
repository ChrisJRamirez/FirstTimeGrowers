const Home = (props) => {
  return <div className="App">
    {/* Home page */}
    <div>
      {/* Header */}
      <div>ME HEADER</div>

      {/* Intro into website */}
      <div>
        <h1>First time growers</h1>
        <p className="intro-paragraph">So you decided to grow Marijuana for the first time and you don't know what the $%^@ you're doing? <br></br>
        Not a worry, we're glad you've taken the first step towards a lifelong hobby! <br></br>
        The checklist to the right will breakdown the basics of growing, and is by no means meant to be an extensive breakdown of everything<br></br> 
        needed to grow award-winning Cannabis.
        </p>
        <p>
          Our site is meant to provide the pertinent information to turn a seed into a flower, and we wish you success in your journey.<br></br>
          Please feel free to to post any questions for help in the FAQS/Common Questions section, and we will do our best to answer them.
        </p>
        {/* <img/> IMAGE SHOWING THE STAGES OF PLANT*/}
      </div>

      {/*FTG Checklist - to the right of the paragraph above*/}
      <div className="FTG-Checklist">
        <h3>FTG Checklist</h3>
      </div>

      {/* Footer */}
      <div>
        <div>
          <button>GITHUB</button>
          <button>TWITTER</button>
          <button>REDDIT</button>
          <button>INSTA</button>
        </div>

        <div>
          {/* <h3>FORUM - ASK A QUESTION</h3> LINK TO ANOTHER PAGE */}
        </div>

      </div>
    </div>
  </div>
}

export default Home