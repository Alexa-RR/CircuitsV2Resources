---
title: Exec
order: 0
tocDepth: 1
sidebar_custom_props: {'<img src="/img/exec.svg" alt="Sponsor"/>'}
sidebar_class_name: exec
---
The ``` exec ``` value type is used to execute circuitry. Signals of this type are generated by ``` Event Receiver ``` chips. When a signal of this type is received by a chip, the chip is "executed"; for example, it performs an operation on its inputs and updates its outputs. "Executing" a variable chip will set the variable's value to the value on its input port.  

![](/Images/Examples/ExecExample.gif)

:::note

The exec value type dosen't have a list type.
