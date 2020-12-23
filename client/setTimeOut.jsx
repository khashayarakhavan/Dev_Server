class YourComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "my text",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ text: "my updated text" });
    }, 3000);
  }

  render() {
    return <h1>{this.state.text}</h1>;
  }
}
