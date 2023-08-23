export default function Layout(props) {
    return (
        <>
            <div>{props.children}{props.login}</div>
        </>
    );
}
