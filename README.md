# Calculadora de nómina

![NPM](https://img.shields.io/badge/npm-8.12.1-green?color=green&style=flat)&nbsp;![Node.js](https://img.shields.io/badge/node-v18.5.0-green?color=green&style=flat)&nbsp;![PNPM](https://img.shields.io/badge/pnpm-7.11.0-yellow?color=yellow&style=flat)&nbsp;![React](https://img.shields.io/badge/react-18.2.0-blue?color=blue&style=flat)&nbsp;![TypeScript](https://img.shields.io/badge/typescript-4.8.3-blue?color=blue&style=flat)

## Contenidos

1. [Motivo](#motivo)
1. [CHANGELOG](#changelog)
1. [Diseño](#diseño)
1. [Despliegue](#despliegue)
   1. [Instalación](#instalación)
1. [Tech stack](#tech-stack)
1. [Scripts](#scripts)
   1. [Entorno de desarrollo](#entorno-de-desarrollo)
   1. [Build](#build)
   1. [Testing](#testing)
1. [Créditos](#créditos)
1. [Autor](#autor)

## Motivo

[Volver a los contenidos](#contenidos)

Porque ya existen muchas, pero seguramente registren tus datos internamente (podrá estar en las políticas, pero sigue sin ser de mi agrado).

## Diseño

[Volver a los contenidos](#contenidos)

![Formulario](./design/form-view.excalidraw.png)

## CHANGELOG

[Volver a los contenidos](#contenidos)

En el fichero con el mismo nombre, [CHANGELOG.md](./CHANGELOG.md).

## Despliegue

[Volver a los contenidos](#contenidos)

Integración CI/CD con Github Actions, desplegado en Github Pages.

[jofaval.github.io/calculadora-nomina](https://jofaval.github.io/calculadora-nomina)

### Instalación

[Volver a los contenidos](#contenidos)

Para instalarte el repositorio en local:

Clónalo

```bash
git clone https://github.com/jofaval/calculadora-nomina.git
```

Y posteriormente instala todos los paquetes:

```bash
pnpm install # preferido
# npm install
# yarn install
```

## Tech stack

[Volver a los contenidos](#contenidos)

- React + TypeScript
- PNPM
- Tailwindcss

## Scripts

[Volver a los contenidos](#contenidos)

### Entorno de desarrollo

[Volver a los contenidos](#contenidos)

```bash
pnpm run start
```

### Build

[Volver a los contenidos](#contenidos)

```bash
pnpm run build
```

### Testing

[Volver a los contenidos](#contenidos)

Dadas las dimensiones del proyecto, testing no será necesario

```bash
pnpm run test
```

## Créditos

[Volver a los contenidos](#contenidos)

- Proyecto de React y TypeScript sin CRA (Create React App)
  - https://levelup.gitconnected.com/freedom-from-create-react-app-how-to-create-react-apps-without-cra-27fadeb79c82
  - https://dev.to/ivadyhabimana/how-to-create-a-react-app-without-using-create-react-app-a-step-by-step-guide-30nl
  - https://dev.to/deadwing7x/setup-a-react-app-using-webpack-babel-and-typescript-5927
- Proyecto con la configuración de vite inicializada gracias a su starter cli. `npx vite`

## Autor

[Volver a los contenidos](#contenidos)

Pepe Fabra Valverde - Software Engineer, puedes contactarme a través de mi [LinkedIn](https://linkedin.com/in/jofaval).
