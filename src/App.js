import Table from './Table';
import { TableContextProvider } from 'Store/TableContext';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Theme from 'Theme';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <MuiThemeProvider theme={Theme}>
        <TableContextProvider>
          <Table />
        </TableContextProvider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;