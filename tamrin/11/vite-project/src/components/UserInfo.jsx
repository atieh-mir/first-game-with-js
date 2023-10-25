import UserName from "./UserName.jsx";
import UserEmail from "./UserEmail.jsx";
import UserAge from "./UserAge.jsx";

const UserInfo = ({name, age ,email})=>{
    return(
        <div>
             <UserName name={name} />
            <UserEmail email={email} />
            <UserAge  age={age} />
        </div>
    )
}
export default UserInfo;