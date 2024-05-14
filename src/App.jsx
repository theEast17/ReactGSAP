import GsapFrom from "./components/GsapFrom"
import GsapFromTo from "./components/GsapFromTo"
import GsapStagger from "./components/GsapStagger"
import GsapTimeline from "./components/GsapTimeline"
import GsapTo from "./components/GsapTo"

const App = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',rowGap:'30px'}}>
    <GsapTo/>
    <GsapFrom/>
    <GsapFromTo/>
    <GsapTimeline/>
    <GsapStagger/>
    </div>
  )
}

export default App