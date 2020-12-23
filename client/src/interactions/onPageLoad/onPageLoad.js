const { useEffect } = React;

const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');

const App = ({ hideLoader }) => {
  useEffect(hideLoader, []);
  
  return (
    <div>I'm the app</div>
  ); 
}

// the setTimeout simulates the time it takes react to load, and is not part of the solution
setTimeout(() => 
  // the show/hide functions are passed as props
  ReactDOM.render(
    <App
      hideLoader={hideLoader}
      showLoader={showLoader} 
      />,
    document.getElementById('app')
  )
, 1000);


<div id="app"></div>

<div class="loader"></div>



.loader {
  position: absolute;
  top: calc(50% - 4em);
  left: calc(50% - 4em);
  width: 6em;
  height: 6em;
  border: 1.1em solid rgba(0, 0, 0, 0.2);
  border-left: 1.1em solid #000000;
  border-radius: 50%;
  animation: load8 1.1s infinite linear;
  transition: opacity 0.3s;
}

.loader--hide {
  opacity: 0;
}

@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}