import { Component } from 'react';

class MyclassComponent extends Component {
  // static defaultProps = {
  //   step: 1,
  //   initialValue: 5,
  // };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: this.props.initialValue,
  //   };
  // }
  // state = {
  //   value: 100,
  //   kolanoskopia: 2,
  // };
  // changeNumber = () => {
  //   this.setState({
  //     value: 1234,
  //   });
  // };
  // backNumber = () => {
  //   this.setState({
  //     value: this.props.initialValue,
  //   });
  // };
  // funAdd = () => {
  //   this.setState(prevState => {
  //     const { step } = this.props;
  //     return { value: prevState.value + step };
  //   });
  // };
  // funDecrement = () => {
  //   this.setState(prevState => {
  //     return { value: prevState.value - this.props.step };
  //   });
  // };
  // render() {
  //   const { step } = this.props;
  //   const { value } = this.state;
  //   return (
  //     <>
  //       <p>{value}</p>
  //       <button onClick={this.funAdd}>Add {step} </button>
  //       <button onClick={this.funDecrement}>Decrement {step} </button>
  //     </>
  //   );
  // }

  handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const login = form.elements.login.value;
    const password = form.elements.password.value;

    console.log(login, password, form);

    this.props.submit({ login, password });

    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={e => console.log(e.target.value)}
          type="text"
          name="login"
        />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default MyclassComponent;
