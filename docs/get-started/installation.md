---
sidebar_position: 1
---

# Installation

### What you'll need

- [.NET SDK](https://dotnet.microsoft.com/en-us/download/visual-studio-sdks) version 6.0 or above

:::info

**.NET Standard 2.0** is also supported, check compatibility with your version in [docs](https://learn.microsoft.com/en-us/dotnet/standard/net-standard?tabs=net-standard-2-0)

:::

## NuGet Package

To add a NuGet package to your project, use the following command:
```bash
dotnet add package McdaToolkit 
```

By default, this command installs the latest stable version of the specified package. You do not need to specify a version unless you want to install a particular one.

If you need to install a specific version, you can use the `--version x.x.x` option, where `x.x.x` is yours wanted version, for example:
```bash
dotnet add package McdaToolkit --version 3.0.1
```
