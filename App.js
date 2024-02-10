import React from 'react';
import ReactDOM from 'react-dom/client';

// React element
const heading = (
    <h1 className='heading'>
        This is a React element
    </h1>
);

// React component
// - Class component
// - Functional component
const HeadingComponent = () => (
    <h1>This is a React functional component</h1>
);

const AuthorOfCourse = () => (
    <h2 className='author'>- By Miraj Asraf</h2>
);

// Component composition - Nested React Functional Components
const CourseTitle = () => (
    <div className='container'>
        <h1 className='title'>The Art of React.js Mastery🚀</h1>
        <AuthorOfCourse />
        
        {/* Using React element inside React component */}
        {heading}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// Rendering a React component
root.render(<CourseTitle />);