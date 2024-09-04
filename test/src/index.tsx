import { createRoot } from "react-dom/client";
import { useAnimation } from "animatable-jsx";
import { useEffect } from "react";

export function Root() {
    const [value, animation] = useAnimation(1000);

    useEffect(() => {
        // animation.animateTo(1);
    }, []);

    return (
        <h1>Hello, World! {value}</h1>
    )
}

createRoot(document.body).render(<Root />);