import Home from "../home";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  View,
  Card,
} from "@aws-amplify/ui-react";

function Sign({ signOut }: any) {
  return (
    <div>
      <Home />
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
}

export default withAuthenticator(Sign);
