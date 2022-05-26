import React from 'react';

const Blogs = () => {
    return (
        <>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content ">
                    <div class="mx-28 my-28">
                        <h2 className='text-4xl text-primary text-center my-12'>My Blogs</h2>
                        <h2 className='text-xl'>Question With Answer</h2>
                        <div className='question'>
                            <h4><b>Q:</b> 1. How will you improve the performance of a React Application?</h4>
                            <div className='my-3'>
                                <p><b>Answer:</b></p>
                                <p>
                                    To improve the performance of a React Application is the number one thing that is on the mind of every developer when building any software, especially web apps. JS frameworks like Angular, React and others is language, There have included some awesome configurations and features. Here, I’ll review the features and tricks that will help you optimize your app’s performance. follow some steps like as Use binding functions in constructors ,Avoid inline style attributes, Avoid extra tags by using React fragments, Avoid inline function in the render method, Avoid bundling all of the front end code in a single file.</p>
                            </div>
                        </div>
                        <div className='question'>
                            <h4><b>Q:</b> 2.What are the different ways to manage a state in a React application?</h4>
                            <div className='my-3'>
                                <p><b>Answer:</b></p>
                                <p>
                                    There are four main types of state you need to properly manage in your React apps those are Local state, Global state, Server state and URL state.However,there are more ways to handle the state in react applications. We can use are to store like this way the id of the current item being viewed, filter parameters, Pagination offset and limit, Sorting data.</p>
                            </div>
                        </div>
                        <div className='question'>
                            <h4><b>Q:</b> 3.How does prototypical inheritance work?</h4>
                            <div className='my-3'>
                                <p><b>Answer:</b></p>
                                <p>
                                    JavaScript is a prototype based, Object Oriented programming language . The Prototypal Inheritance is a feature that  in JavaScript used to add methods and properties in  objects method. Its the follow Parents is the list of classes you’re extending. Classes may only extend other classes, Variables is the number of variable slots that instances will have. For example, a class Point instance variables. Class is a pointer to the class triple that defines how many variables this instance supports, and what methods you can call on it.Values is a list of the values for each variable the instance.</p>
                            </div>
                        </div>
                        <div className='question'>
                            <h4><b>Q:</b> 4.Why you do not set the state directly in React. For example, if you have const [products, getProducts] = useState([]). Why you do not set products = [...] instead, you use the set Products.
                            </h4>
                            <div className='my-3'>
                                <p><b>Answer:</b></p>
                                <p>
                                    Actually i think that never update the state directly because of the the reasons:
                                    If you update it directly, calling the set State() afterward may just replace the update you made.
                                    When i directly update the state, it does not change this. State immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value and we will lose control of the state across all components. We should be use the set of product.</p>
                            </div>
                        </div>
                        <div className='question'>
                            <h4><b>Q:</b> 6.What is a unit test? Why should write unit tests?</h4>
                            <div className='my-3'>
                                <p><b>Answer:</b></p>
                                <p>
                                    The main purpose of unit testing is to clear written code to test and determine as standard  if it works as intended. Unit Test is a type of software testing where individual units or components of a software company tested. The main target is to validate that each unit of the software code performs as best .Unit Testing is done during the development of an application by the developers. It is easy to teasting.Unit Tests isolate a section of code and verify .A unit may be an use different function, method, procedure, module, or object. As like SDLC, V Model, Unit testing is first level of testing .
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
};

export default Blogs;