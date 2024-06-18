# boilerplate-monorepo

This is a monorepo boilerplate for a project that uses [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).

## Getting Started

Si vous vous souhaiter changer le nom du monorepo ou des boilerplates préconfigurés vous devrez réaliser les modifications suivantes :

- Remplacer le nom du monorepo dans le fichier `package.json` ainsi que toutes ses occurences dans les `packages.json` des `packages`et `apps`existantes.
- Remplacer les noms des packages renommés dans les **dependencies** et **devDependencies** des `packages.json` des `packages`et `apps`existantes.

## Ajout d'un package ou d'une application

Lorsque vous souhaitez ajouter un package ou une application vous devrez aussi réaliser les modifications suivantes dans le monorepo :

- Préfixer le nom du package ou de l'application par le nom du monorepo dans le `name` du `package.json` dédié.
- Ajouter le nom de l'application ou du package dans le `scope-enum` du fichier `commitlint.config.js`.
- Ajouter le nom de l'application ou du package dans les options des dropdowns des fichiers `.github/ÌSSUES_TEMPLATE`.
