import { Component } from "react";
import css from "./ContactForm.module.css";

export class ContactForm extends Component{

    state = {
        name: '',
        number: ''
      };

    handleChange = ({target})=>{
        this.setState({[target.name]:target.value});
    }
    handleSubmit = (e)=>{
      e.preventDefault();
      this.props.createContact({
        name: this.state.name,
        number: this.state.number,
      })
      this.setState({
        name: '',
        number: ''  
      })
    }
    render(){
        return <form className = {css.contactForm} onSubmit = {this.handleSubmit}>
        <div className = {css.formContainer}>

    <label htmlFor='InputName' className={css.inputName}>
	Name
	</label>
    <input
        type="text"
        name="name"
        id='InputName'
        className={css.inputContact}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={this.handleChange}
        value = {this.state.name}
      />
    <label htmlFor='InputNumber' className={css.inputName}>
	Number
	</label>
<input
  type="tel"
  name="number"
  id='InputNumber'
  className={css.inputContact}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  onChange={this.handleChange}
  value = {this.state.number}
/>
<button type="submit" className={css.submit}>Add contact</button>
        </div>
        </form>
    }
}