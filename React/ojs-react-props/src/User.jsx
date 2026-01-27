import userPlaceholder from "./assets/img/portrait-placeholder.png";

export function User(props) {
    return (
        <div>
            <div>First Name: {props.firstName}</div>
            <div>Last Name: {props.lastName}</div>
            <div>Email: {props.email}</div>
            <div>Birthday: {props.birthDay}</div>
            <div>Address: {props.address}</div>
            <div>Phone: {props.phone}</div>
        </div>
    );
}