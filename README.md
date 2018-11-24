# Vyavastha - A project management app

This repo contains the code for a react-based Project Management App utilizing Firebase (Auth, DB, Cloud Functions, Hosting) and Thunk Middleware. Connected to a Heroku pipeline, the current version of the app will be live on : https://vyavashta.herokuapp.com


# Birds Eye View - App Structure

    App (root)
        - Navbar
            - signed in links
            - signed out links

        - URLS 
            - Dashboard ('/','/dashboard')
                - Project List
                - Notifications
            - Project Details (/project/:id)
            - Create Project (/create)
            - Sign In (/signin)
            - Signup  (/signup)

    Client Side / Browser    (React App + Redux) ------------->  Server Side | Firebase (Firestore db,Firebase Auth, CloudFunctions )


# Dependencies
    # react
    # react-router-dom
    
