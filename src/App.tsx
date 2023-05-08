import { Provider } from "react-redux";
import { store } from "./store/store";
import Pages from "./pages";
import "@aws-amplify/ui-react/styles.css";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, Button, View, Card } from "@aws-amplify/ui-react";

function App({ signOut }: any) {
  return (
    <div className="App">
      {/* <Provider store={store}>
        <Pages />
      </Provider>
      <Button onClick={signOut}>Sign Out</Button> */}
      <View className="App">
        <Provider store={store}>
          <Pages />
        </Provider>
        <Button onClick={signOut}>Sign Out</Button>
      </View>
    </div>
  );
}

export default withAuthenticator(App);
