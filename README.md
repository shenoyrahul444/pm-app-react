# Vyavastha - A Plan management app

This repo contains the code for a react-based Plan Management App utilizing Firebase (Auth, DB, Cloud Functions, Hosting) and Thunk Middleware. Connected to a Heroku pipeline, the current version of the app will be live on : https://vyavashta.herokuapp.com

http://vyavastha.s3-website-us-west-1.amazonaws.com/


# Birds Eye View - App Structure

    App (root)
        - Navbar
            - signed in links
            - signed out links

        - URLS 
            - Dashboard ('/','/dashboard')
                - Plan List
                - Notifications
            - Plan Details (/plan/:id)
            - Create Plan (/create)
            - Sign In (/signin)
            - Signup  (/signup)

    Client Side / Browser    (React App + Redux) ------------->  Server Side | Firebase (Firestore db,Firebase Auth, CloudFunctions )


# Dependencies
    # react
    # react-router-dom
    # redux 
        applyMiddleware
        compose => Adding and combining store enhancers 

    # react-redux
    # thunk 
        
        withExtraArguments()

    # react-redux-firebase
    # redux-firestore
    

# Steps
    1> Create React Templates and components with static data
    2> Connect them to redux, middleware, actions, reducers
    3> Database Setup

#  Firebase
    
    
    # Firestore - Realtime NoSQL database

    Schema
    Plan  - (
        title
        content
        authorFirstName
        authorLastName
        authorId
        timestamp

    )

### Notes
Redux Thunk - Middleware for async operations 
Halts dispatch, 
perform async request, 
resume dispatch

mapDispatchToProps => Adds action methods to props for performing database interactions or Store

mapStateToPorps => Connects store with Props so store data is used properly
