

import {
    withAuthenticator,
    Button,
  } from "@aws-amplify/ui-react";
import './style.scss'
function Sign({ signOut }: any) {
    return (
        <div>
           <Button onClick={signOut}>Sign Out</Button>
        </div>
    )
}
export default withAuthenticator(Sign)