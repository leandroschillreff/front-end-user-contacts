import { TechProvider } from './contexts/ContactContext,';
import { UserProvider } from './contexts/UserContext';
import { RoutesMain } from './routes';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <TechProvider>
      <UserProvider>
        <GlobalStyle />
        <RoutesMain />
      </UserProvider>
    </TechProvider>
  );
}
