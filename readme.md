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