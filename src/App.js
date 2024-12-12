
// @tabler/icons-react
import React from 'react'
import ExpenceListing from './Components/Screens/Expence/List/ExpenceListing'
import IncomeListing from './Components/Screens/Income/List/IncomeListing'
import SideNavLayout from './Components/Layouts/SideNavLayout/SideNavLayout'
import AddExpenseForm from './Components/Screens/Add/AddExpenceForm'
import store from './store'
import Test from './Components/Screens/Test/Test'
import { Provider } from 'react-redux'
import Users from './Components/Screens/User/Users.jsx'




const App = () => {

  const currentPath = window.location.pathname?.split("/")?.[1]

  const renderComponent = () => {
    switch (currentPath) {
      case "expense":
        return <ExpenceListing />;

      case "income":
        return <IncomeListing />;

      case 'profit-and-loss':
        return <SideNavLayout> Profit and loss  </SideNavLayout>

      case "add-expense":
        return <AddExpenseForm />;

      case "user":
        return <SideNavLayout><Users/>  </SideNavLayout>
      case "test":
        return <Test />;

      default:
        // break;
        // return <>Default </>
        return <SideNavLayout>Welcome</SideNavLayout>
    }
  }

  return (
    <Provider store={store}>
      {renderComponent()}
    </Provider>
  )

}

export default App



