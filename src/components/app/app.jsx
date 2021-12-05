import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from 'const';
import NotFoundScreen from 'components/not-found-screen/not-found-screen';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={AppRoute.QuestScreen}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.ContactsScreen}>
          <Contacts />
        </Route>
        <Route exact path={AppRoute.MainScreen}>
          <Home />
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
