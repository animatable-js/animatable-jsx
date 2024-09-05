import { Animation, Cubic } from "animatable-js";
import { useEffect, useRef, useState } from "react";

/**
 * A custom hook for handling animations.
 * 
 * See Also, the hook initializes an animation instance and provides an updated
 * animation value over time. It also ensures proper cleanup
 * of the animation when the component is unmounted.
 */
export function useAnimation(
    duration: number,
    curve?: Cubic,
    initialValue?: number
): [number, Animation] {
    const animationRef = useRef(new Animation(duration, curve, initialValue));
    const animation = animationRef.current;

    // To update a component state when animation value updated.
    const [value, setValue] = useState(animation.value);

    useEffect(() => {
        animation.addListener(setValue);

        // When a component is detached, explicitly call the `dispose()` function
        // to ensure that an animation terminate properly.
        return () => animation.dispose();
    }, []);

    return [value, animation];
}