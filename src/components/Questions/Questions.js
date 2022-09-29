import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className="questions">
            <div className="question-set">
                <h2>Q1: How react works?</h2>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state for example, a TabList component may store a variable corresponding to the currently open tab.</p>
            </div>
            <div className="question-set">
                <h2>Q1: What is the difference between props and state?</h2>
                <p>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.
                Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
                </p>
            </div>
            <div className="question-set">
                <h2>Q1: What is the usage of useEffect except calling api?</h2>
                <p>The function passed to useEffect is a callback function. This will be called after the component renders.
                In this function, we can perform our side effects or multiple side effects if we want.
                The second argument is an array, called the dependencies array. This array should include all of the values that our side effect relies upon.
                In our example above, since we are changing the title based off of a value in the outer scope, name, we need to include that within the dependencies array.
                What this array will do is it will check and see if a value (in this case name) has changed between renders. If so, it will execute our use effect function again.
                This makes sense because if the name changes, we want to display that changed name and therefore run our side effect again.</p>
            </div>
        </div>
    );
};

export default Questions;