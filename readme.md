# Demo of a Angular Micro Frontend Architecture using Module Federation

## Steps to Reproduce

- Create a Angular Shell or MainUI Application
- Create several Client or Micro Frontend Applications
- Change local ports to run the applications via ng serve in parallel
- Add one module and one component to each MicroApp
- Add routing to each MicroApp
- Run `ng add @angular-architects/module-federation` for each Angular App (MainUI and MicroUI's)
- Expose each module of the MicroUI in the corresponding `webpack.config.js` 
- Load `loadRemoteModule` in MainUI `app-routing.module.ts`

## StartUp the Solution
- Clone the repo from https://github.com/David-Siebert/angular-microfrontend
- Run `npm run init` in a new terminal located in the root of the repo
- Run `npm run Main` in a new terminal located in the root of the repo
- Run `npm run AppA` in a new terminal located in the root of the repo
- Run `npm run AppB` in a new terminal located in the root of the repo
- Run `npm run AppC` in a new terminal located in the root of the repo
- Open Browser http://localhost:5000/ to see MainUI
