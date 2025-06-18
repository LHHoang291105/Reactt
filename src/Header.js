const Header = (props) => {
console.log("props: ",props)
    return (
        <header>
            <h1>Hello {props.title}</h1>
        </header>
    )
}

export default Header;
