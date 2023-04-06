import Router from './router/Router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AddToChart from './components/AddToChart'

import { connect } from 'react-redux'

const App = (props) => {
  return (
    <div className="relative">
      <Navbar />
      <AddToChart />
      <div
        className={`${props.showAddToChart === true ? 'opacity-[50%]' : ''}`}
      >
        <Router />
        <Footer />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    showAddToChart: state.showAddToChart,
  }
}

export default connect(mapStateToProps)(App)
