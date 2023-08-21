# Introduce

if you have a typescript lib but you not test script this tools can help you to run example

this tools is base on [webpack](https://webpack.docschina.org/) has client mode and node mode

> client mode is base on webpack default target
> node mode is base on webpack nodejs target
> see [webpack target docs](https://webpack.docschina.org/concepts/targets/)

# Usage

```
Usage: libtest [options] [command]

Options:
  -c,--config <string>       配置文件路径 (default: "./.defaultrc.js")
  -h, --help                 display help for command

Commands:
  init                       Create Config File In Current Path
  node [options] <source>    Runtime Debug With Nodejs Mode (Webpack Target Is Node)
  client [options] <source>  Runtime Debug With Client Mode (Webpack Target Is Default Mode)
  help [command]             display help for command
```

# Install

Global Install

```bash
npm install @cyber-tools/libtest -g
```

# Run Library File With Client Mode

command

```
libtest client [options] <source>
```

if you want fast boot you can run this command

```bash
cd /you-library-path/
libtest client ./you-library-file.ts
```

```
Options:
  -p, --port <number> default express development server is runing at 3000
```

# Run Library File With Node Mode

command

```
libtest node [options] <source>
```

if you want fast boot you can run this command

```bash
cd /you-library-path/
libtest node ./you-library-file.ts
```

Available Options references with [NodeJS Command-line API](https://nodejs.org/dist/latest-v16.x/docs/api/cli.html#command-line-api)

```
Options:
  -n, --node-options <string>
```