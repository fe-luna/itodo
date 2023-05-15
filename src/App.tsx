import { Provider } from "react-redux";
import { store } from "./store/store";
import Pages from "./pages";
import "@aws-amplify/ui-react/styles.css";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, Button } from "@aws-amplify/ui-react";

function App({ signOut }: any) {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  );
}

export default withAuthenticator(App);
