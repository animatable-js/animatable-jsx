import { Animation, Cubic } from "animatable-js";
import { useEffect, useRef, useState } from "react";

export function useAnimation(
    duration: number,
    curve?: Cubic,
    initialValue?: number
): [number, Animation] {
    const animationRef = useRef(new Animation(duration, curve, initialValue));
    const animation = animationRef.current;
    const [value, setValue] = useState(animation.value);

    useEffect(() => {
        // Called when an animation value updated.
        animation.addListener(setValue);

        // When a component is detached, explicitly call the `dispose()` function
        // to ensure that animations terminate properly.
        return () => animation.dispose();
    }, []);

    return [value, animation];
}