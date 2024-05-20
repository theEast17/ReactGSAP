import gsap from "gsap";


const App = () => {
  const tl = gsap.timeline();

  function showBar() {

    tl.to(".section1", {
      right: "0%",
      duration: 1,
    })
      .from(".menu", {
        opacity: 0,
        x: 130,
        stagger: 0.8,
      })
      .from(".cancle", {
        opacity: 0,
        x: 30,
      });
  }

  function hideBar() {
    tl.to(".section1", {
      right: "-40%",
      duration: 1,
    });
  
  }

  return (
    <main>
      <header>
        <nav>
          <h1>Poorv</h1>
          <div onClick={showBar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

   (
        <section className="section1">
          <div className="cancle" onClick={hideBar}>
            <p>❌</p>
          </div>
          <ul>
            <li className="menu">Home</li>
            <li className="menu">Work</li>
            <li className="menu">About</li>
            <li className="menu">Services</li>
            <li className="menu">Contact Us</li>
          </ul>
        </section>
      ) 
    </main>
  );
};

export default App;
