import './UserName.css';

const UserName = ({name})=>{
    return(
        <div>
            <p className='userName'> User Name : {name} </p>
        </div>
    )
}
export default UserName;