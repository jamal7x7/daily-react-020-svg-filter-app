import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Flashcards App</h1>
  </header>
)

const FlashCards = () => (
  <div className=' flash-cards '>
      <div className='svg-input-wrap'>

      FlashCards

      </div>
    </div>
)

const StudyPlan = () => (
  <div className='study-plan'>
    <div className='svg-input-wrap'>

      StudyPlan

    </div>
  </div>
)

class FlashCardsApp extends Component {
  render () {
    return (
      <div className='flash-cards-con'>

        <StudyPlan />
        <FlashCards />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <FlashCardsApp />

  </div>
)

export default App
