---
sidebar_position: 3
---

# Creating method

Each decision-making method requires a specific configuration setup and a distinct set of parameters.
In the toolkit, these configurations are encapsulated in dedicated Options classes — one for each method.
All options classes implement the common ``IMcdaOptions`` interface, which unifies shared settings such as the choice of normalization method

````csharp showLineNumbers
var options = new Promethee2Options()
{
    NormalizationMethod = NormalizationMethod.MinMax,
    PreferenceFunction = PreferenceFunction.Unnamed;
}
````

:::warning
If a required property is not explicitly set in the options object, the toolkit will fall back to a method-specific default value.
This behavior does not throw an exception, but it may lead to unintended behavior or unexpected results, especially if the default configuration does not match the intended use case.
:::


To instantiate a specific multi-criteria decision-making (MCDM) method, use the ``MethodFactory`` class.

:::info
The method instance after initialization will be immutable; however, the data passed into the method can be changed in each
execution
:::

Example of Promethee2 initialization:
```csharp showLineNumbers
var method = MethodFactory.CreatePromethee2(
    new Promethee2Options()
    {
        NormalizationMethod = NormalizationMethod.MinMax,
        PreferenceFunction = PreferenceFunction.Ushape;
    })
```
