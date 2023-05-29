# zepz-test

Repository containing the Typescript React assignment for Zepz

## Running the app

Note: I like using `yarn`. If you run into lockfile issues, just remove the yarn one, and you should be good to go.

- **SETUP**: Install all dependencies with `yarn install` / `npm install`.
- **RUN APP**: Run the app with `yarn dev` / `npm run dev`.

## Issues

### Testing

The environment I have worked in over the last 5 years never allowed for testing to be a part of our development process. I've always wanted to, but in the end you need to go with the collective team. I do have experience writing react tests within the Lerna monorepo ecosystem when I maintained our components that way. This was always done as a nice thing I wanted to do.

I have had the **WORST** time getting tests to work in this app. The main issue I eventually got around to was the redux integration, and the test runner couldn't handle it. I know there is a solution, it's probably super simple, but my flu-ridden brain just cannot figure it out right now. I would rather submit this app as is, without tests and at least get some review, instead of continuing to try the same dumb thing over and over. :(

I will keep at this though, and notify you when I do figure it out. I promise I can do frontend!

### Bonus Points

I spent just too much time on testing that this entire section is skipped.

### Wins left on the table

It occurs to me that I could / should potentially move the actions and action-types into the shared folder, since they are 100% typescript models and enums. I am hesitant though, as I know some developers do prefer to keep all redux stuff together. I would be interested to know your opinion here?

## Study

### Architecture

The goal was to create a setup that anyone familiar with react can figure out without too much drama. I simulated the concept of pages without actually introducing the router, by placing the main views into Pages folder.

Components are contained in folders, which contain the component, css file for the component and eventual tests. I have always liked this structure over separating those three things into different folders. Everything related to the feature is contained within it.

#### Vite

I chose to use Vite as my tooling foundation because Vite is awesome, and CRA has known issues around supporting PostCSS. It's also in maintenance mode.

#### Online / Offline

I used a simple hook to achieve this. It works out of the box, and I did not have to reinvent the wheel here.

#### Models and types

I put a lot of effort into designing good models, and reused them wherever I could. An example of this is the `UserComponent` which uses the `UserModel` to define it's props. I loved this, as I don't have to worry about anything falling through the cracks.

With the Api, I also split out the `API` information and the endpoint specific information. The endpoint I built into an object, as it just makes so much more sense to me that way.

I did not use .env files, as it was complete overkill for this example app.

#### State

I decided to go with the the tried and tested redux library to handle state, even though it's probably overkill for this specific app. I tried to keep it as simple as possible, and typed as well as possible.

When fetching data, I transform the resulting data into the `UserModel` that also contains the fields for blocked and followed users. It's a bit weird working with a broken flow like this, but was interesting to think it through in this context. I had to keep reminding myself that the api doesn't actually matter.

My goal was to keep all logic contained within the state layer, and keep the frontend as consumable as possible. I am fairly certain that the state layer can be ported over the Native without too much refactoring involved.

#### Styling

I have been using Tailwindcss a lot recently, and though I realise it's a polarising stack, it can be quite useful if used in a responsible way. I have implemented my own Tailwind configuration here, to show you how I approach styling with the stack. My approach is to maintain the benefits you get from an atomic-css based architecture, with a foundational "framework" layer added on top of it, and BEM architecture.

I keep css within css files, as it promotes separation of concerns, and avoids the major maintainability pitfalls that is common with Tailwind out of the box.

The argument can be made that you might as well just use vanilla css, and I want to agree, but I have experienced that Tailwind's tooling is just awesome, and the utility aspect, if used correctly, is awesome.

I designed in the browser so spent probably too much time getting things the way I felt looked okay.

## Timekeeping

These are the times I spent on each section of the task:

| Task           | Time        |
| -------------- | ----------- |
| Review         | 01 Hours    |
| Design         | 03 Hours    |
| Implementation | 03 Hours    |
| Testing        | Too long... |
| Documentation  | 01 Hours    |
