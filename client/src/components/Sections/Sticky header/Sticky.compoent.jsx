const { createRef, useState, useEffect } = React;

function Header({ children, sticky = false, className, ...rest }) {
  const [isSticky, setIsSticky] = useState(false);
  const ref = React.createRef();

  // mount
  useEffect(() => {
    const cachedRef = ref.current,
      observer = new IntersectionObserver(
        ([e]) => setIsSticky(e.intersectionRatio < 1),
        { threshold: [1] }
      );

    observer.observe(cachedRef);

    // unmount
    return function () {
      observer.unobserve(cachedRef);
    };
  }, []);

  return (
    <header
      className={className + (isSticky ? " isSticky" : "")}
      ref={ref}
      {...rest}
    >
      {children}
    </header>
  );
}

function App() {
  return (
    <>
      <section>
        <a href="https://stackoverflow.com/a/57991537/104380" target="_blank">
          Event when position:sticky is triggered
        </a>
      </section>
      <Header>Sticky header</Header>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
