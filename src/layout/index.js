import BottomNavigation from "./BottomNavigation";

export default function Layout(props)
{
    return (
        <>
            {props.children}

            <BottomNavigation />
        </>
    )

}