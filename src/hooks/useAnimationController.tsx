import { AnimationController } from "animatable-js";
import { useEffect, useRef, useState } from "react";

/**
 * A custom hook for handling raw animations.
 * 
 * The hook initializes an raw animation instance and provides an updated
 * animation value over time. It also ensures proper cleanup of
 * the animation when the component is unmounted.
 */
export function useAnimationController(
    duration: number,
    lowerValue?: number,
    upperValue?: number,
    initialValue?: number
): [number, AnimationController] {
    const controllerRef = useRef(new AnimationController(duration, lowerValue, upperValue, initialValue));
    const controller = controllerRef.current;

    // To update a component state when animation value updated.
    const [value, setValue] = useState(controller.value);

    useEffect(() => {
        controller.addListener(setValue);

        // When a component is detached, explicitly call the `dispose()` function
        // to ensure that animaiton controller terminate properly.
        return () => controller.dispose();
    }, []);

    return [value, controller];
}