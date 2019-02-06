# Shapes Readme

Use ng-joint-shapes element inside joint-dia-graph element.  
  
See example:

```html
<ng-joint-dia-paper
  [width]="800"
  [height]="600"
  [gridSize]="2"
  [drawGrid]="true">

  </ng-joint-dia-graph>

    <ng-joint-shapes>

    </ng-joint-shapes>

  </ng-joint-dia-graph>

</ng-joint-paper>
```

## Manual @angular/cli actions to Add new Plugin Shape

Basic list of schematic basic ng g commands to add a new Plugin Shape element or link.

### Module

Add module first:
ng g module shapes/uml/aggregation/uml-aggregation --project=ng-joint --flat

### Component

Add component inline HTMl / CSS and Exported in Module:
ng g component shapes/uml/aggregation/uml-aggregation --project=ng-joint --flat -s -t --export

### Service

Add service (after that you have to Import and Place it in the Providers-arry in the Module):
ng g service shapes/uml/aggregation/uml-aggregation --project=ng-joint --flat