# Question A: Package Managers
  **What is package manager?**
     A package manager is a tool that helps developers install, update, remove, and manage libraries that a project needs.
     Ex: npm/yarn
  **Why do we need package managers in backend development?**
     Package managers make backend development faster, safer, and more reliable.
  **Problems faced if package managers are not used**
     if we don't use package managers, we may face:
     manual installation, version conflicts, missing dependencies, Hard to update libraries, Deployment issues.

 # Question B: NPM

   **What is NPM**
      NPM (Node Package Manager) is a tool used to install and manage libraries for Node.js applications.

   **Why is NPM important for Node.js applications?**
      NPM helps developers reuse existing code, manage packages easily, and build applications faster.
   **How NPM helps in managing dependencies**
      It installs required packages automatically and ensures correct versions are used. and makes project setup easy on any system

  # Question C: Backend Project Initialization

   **What is the command used to initialize a backend (Node.js) project?**
      npm init -y

   **Explain what npm init and npm init -y do**
      npm init starts the node.js project and asks questions and create a package.json file based on your answers.

      npm init -y automatically creates package.json file without asking any question and uses default values .

  # Question D: Files and Folders Created After Project Initialization

    **package.json**: contains project information and dependencies, and defines scripts.
      _It helps others understand and run the project and required to install dependencies using npm_

    **node_modules**: stores all installed packages and their code. Needs to run the application locally.

    **package-lock.json**: Record exact versions of installed dependencies.Ensure the same dependencies are installed on every system.

    **Github rules**
        node_modules should not pushed to GitHub , very large in size.
    **Files must be committed to GitHub
       Source code files, package.json, package-lock.json
