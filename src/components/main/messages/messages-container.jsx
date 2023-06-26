
import Messages from "./messages";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";


export default compose(withAuthRedirect)(Messages)