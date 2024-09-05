<div align="center">
  <img width="200px" src="https://github.com/user-attachments/assets/ccc4a353-7903-4a49-a92d-26b6dfa1d200">
  <h1>Animatable JSX Package</h1>
  <table>
        <thead>
          <tr>
            <th>Version</th>
            <th>v1.0.0-alpha2</th>
          </tr>
        </tbody>
    </table>
</div>

# Introduction
This extension package of [animatable-js](https://github.com/animatable-js/animatable_js) allows for easy and lightweight implementation of linear or curved animations in a JSX/TSX environment.

## Install by NPM
To install this package in your project, enter the following command.

> When you want to update this package, enter `npm update animatable-jsx --save` in the terminal to run it.

```
npm install animatable-js, animatable-jsx
```

## How to animate a value to that you want.
This can be resolved using the provided `useAnimation` or `useAnimationController` hooks in this package.

```jsx
export function Root() {
  // is given a current value, an animation instance.
  const [value, animation] = useAnimation(1000);

  useEffect(() => {
      animation.animateTo(1);
  }, []);

  return <h1>Hello, World! {value}</h1>
}
```

## Usage about custom hooks.
The hooks initializes an animation instance and provides an updated animation value over time. It also ensures proper cleanup of the animation when the component is unmounted.

### useAnimation()
A custom hook for handling animations.

```jsx
const [value, instance] =  useAnimation(duration, curve?, initialValue? = 0);
```

### useAnimationController()
A custom hook for handling raw animations.

```jsx
const [value, instance] =  useAnimationController(
  duration,
  lowerValue? = 0,
  upperValue? = 1,
  initialValue? = lowerValue
);
```