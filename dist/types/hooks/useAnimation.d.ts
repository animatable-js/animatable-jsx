import { Animation, Cubic } from "animatable-js";
/**
 * A custom hook for handling animations.
 *
 * The hook initializes an animation instance and provides an updated animation value over time.
 * It also ensures proper cleanup of the animation when the component is unmounted.
 */
export declare function useAnimation(duration: number, curve?: Cubic, initialValue?: number): [number, Animation];
