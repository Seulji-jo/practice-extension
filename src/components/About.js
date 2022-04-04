import { goBack } from "react-chrome-extension-router"

function About () {
  return(
    <div>
      <h1>AboutPage</h1>
      <button onClick={() => {goBack()}}>Go to Home</button>
    </div>
  )
}

export default About