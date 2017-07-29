import React from 'react';
import Navbar from '../navbar';
import ExpenseForm from '../expense-form';
import ExpenseList from '../expense-list'
import uuid from 'uuid';

class AboutContainer extends React.Component {
  constructor(props) {
    super(props);

    this.expenseCreate = this.expenseCreate.bind(this);
    this.expenseRemove = this.expenseRemove.bind(this);
    this.expenseUpdate = this.expenseUpdate.bind(this);
  }

  //hooks

  //methods
  expenseCreate(expense) {
    expense.id = uuid();

    let { app } = this.props;
    expense.id = uuid();
    app.setState(prevState => ({
      expenses: prevState.expenses.concat([expense]),
    }));
  }

  expenseRemove(expense){
    let {app} = this.props;
    app.setState(prevState => ({
      expenses: prevState.expenses.filter((item)=>{
        return item.id !== expense.id
      })
    }))
  }

  expenseUpdate(expense){
    let {app} = this.props;
    app.setState(prevState => ({
      expenses: prevState.expenses.map((item)=>{
        return item.id == expense.id ? expense : item
      })
    }))
  }

  //render
  render() {
    let {app} = this.props

    let totalSpent = app.state.expenses.reduce((p, c)=>{
      return p + c.price
    }, 0)

    let remainingBudget= app.state.total - totalSpent
    return (
      <div className='dashboard-container'>
        <Navbar />
        <p> total budget: {app.state.total}</p>
        <p>total spent: {totalSpent}</p>
        <p> remaining budget: {remainingBudget}</p>
        <ExpenseForm
          handleSubmit={this.expenseCreate}
          submitTitle='add expense'/>
        
        <ExpenseList
          expenseRemove={this.expenseRemove}
          expenseUpdate={this.expenseUpdate}
          expenses={app.state.expenses} />
      </div>
    );
  }
}

export default AboutContainer;
