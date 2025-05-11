---
sidebar_position: 1
---

# Get Started

Let's discover **McdaToolkit in less than 5 minutes**.


## Instalation
Install the newest version:
```bash
dotnet add package McdaToolkit 
```

### What you'll need

- [.NET SDK](https://dotnet.microsoft.com/en-us/download/visual-studio-sdks) version 6.0 or above

:::info

**.NET Standard 2.0** is also supported, check compatibility with your version in [docs](https://learn.microsoft.com/pl-pl/dotnet/standard/net-standard?tabs=net-standard-2-0)

:::

## Quick Example

Here's a simple example to show how to prepare and structure your data for an MCDA calculation using the MCDA Toolkit.

### 1️⃣   Define the Decision Matrix
Each row represents an alternative, and each column corresponds to a criterion.
```csharp
double[,] matrix = new double[,]
{
    { 66, 56, 95 },
    { 61, 55, 166 },
    { 65, 49, 113 },
    { 95, 56, 99 },
    { 63, 43, 178 },
    { 74, 59, 140 },
};
```


### 2️⃣   Prepare Weights
They must be double values between 0 and 1, and must ``sum to 1``
```csharp
double[] weights = new double[]
{
    0.4, 0.25, 0.35
};
```
### 3️⃣   Define Criteria Types

Each criterion is marked as either a cost (-1) or a benefit (1).
```csharp
int[] types = new int[]
{
    -1, -1, 1
};
```

### 4️⃣  Build the Data Object
```csharp
var data = new DataProviderBuilder()
    .AddWeights(weights)            
    .AddDecisionCriteria(types)      
    .AddDecisionMatrix(matrix)       
    .Build();                     
```

### 5️⃣  Create MCDA method
```csharp
var vikor = MethodFactory
    .CreateVikor(new VikorOptions())
```

### 6️⃣  Run
```csharp
var result = vikor.Run(data);
```

## Outcome

The result of the calculation is returned as an object of type ``Result<T>``, provided by the [LightResults](https://github.com/jscarle/LightResults) library.
This structure not only contains the output data ``Value``, but also encapsulates information about whether the operation failed or succeed.

Before accessing the ``Value`` property of the result object, it is essential to verify that the operation completed successfully.
Attempting to access the value without this check may throw ``InvalidOperationException``

This approach follows the principles of Railway Oriented Programming,
a functional programming pattern that models the flow of data along two possible tracks — one for success and one for failure.

More about ``Result`` type can be readed on official [LightResult documentation ](https://jscarle.github.io/LightResults/)

Example returned success result:

```csharp
Ranking<double>()
{
    RankingItems = List<RankingRow<double>>()
    {
        RankingRow<double>
        {
            Alternative = 1,
            Rank = 6,
            Score = 0.417
        },
        RankingRow<double>
        {
            Alternative = 2,
            Rank = 2,
            Score = 0.552
        },
        RankingRow<double>
        {
            Alternative = 3,
            Rank = 4,
            Score = 0.54
        },
        RankingRow<double>
        {
            Alternative = 4,
            Rank = 3,
            Score = 0.54
        },
        RankingRow<double>
        {
            Alternative = 5,
            Rank = 5,
            Score = 0.429
        },
        RankingRow<double>
        {
            Alternative = 6,
            Rank = 1,
            Score = 0.568
        }
    }
};
```