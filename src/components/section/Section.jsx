import css from './Section.module.css';
const { Component } = require('react');

class Section extends Component {
  render() {
    const { children, title } = this.props;
    return (
      <div className={css.div}>
        <h1 className={css.title}>{title}</h1>
        {children}
      </div>
    );
  }
}

export default Section;
