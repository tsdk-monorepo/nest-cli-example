# Example code for nest-cli

> Recommend use `pnpm`

## Get Started

Install dependencies:

```sh
pnpm install
```

### Run dev

Run dev for `src/main.ts`:

```sh
pnpm dev
```

Run dev for `src/modules/hello/main.ts`:

```sh
pnpm nest start hello --watch
```

Run dev for `src/modules/foo/main.ts`:

```sh
pnpm nest start foo --watch
```

### Run build

Build all:

```sh
pnpm tsdk --nest build all
```


Build default:

```sh
pnpm tsdk --nest build
```


Build foo and hello:

```sh
pnpm tsdk --nest build foo hello
```
