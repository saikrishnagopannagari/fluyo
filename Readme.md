
## Design/Architecture

Adopted MVC pattern,

- Model: Redux Slice, API
- View: <Screen>.component, components
- Controller: <Screen>.container

Exercise collection (firestore):

- documentId: [pk]
- questionGe: string
- questionEn: string
- options: []string
- answer: number

## Folder structure: (src/)
- api: firestore queries happen here
- components: all the reusable UI code
- config: firebase config stored here
- consts: app constants like colors, strings
- routes: navigation system maintained here
- [Model] sagas: all redux components are embedded
- screens: each separate page/module
    - [View] component
    - [Controller] container
    - test
  
## Packages used

- Redux: for global state management
- Redux Saga Slice: Adding flexibility in maintaining redux components
- React Router: For navigation system
- firebase: client library to talk to firebase


## Screenshots

/screenshots


## What's next?

For the time being not consider the following:
- Test driven development or adding unit/component/integration etc test suite
- Linter to keep code consistent
- In some places hardcoded style values, but I prefer some style system in place, where we define all the styles.
- Authorised firestore
- React Native CLI
- Optimised firestore design/ adding indexes

