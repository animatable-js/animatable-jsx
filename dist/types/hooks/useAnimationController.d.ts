import { AnimationController } from "animatable-js";
/**
 * A custom hook for handling raw animations.
 *
 * The hook initializes an raw animation instance and provides an updated
 * animation value over time. It also ensures proper cleanup of
 * the animation when the component is unmounted.
 */
export declare function useAnimationController(duration: number, lowerValue?: number, upperValue?: number, initialValue?: number): [number, AnimationController];
