# Setup @dgwnu/ng-joint Library Development

Setup Lib for starting JointJs with Angular 7 higher framework development.

## Basic Typescript Production and Development Dependencies

* Angular CLI install: ```ng new ng-jointjs (...)```
* Go to project folder: ```cd ng-jointjs```
* Install Material: ```ng add @angular/material```
* Install JointJS: ```npm i -save jointjs```

## Additional Typescript Development Dependencies

Backbone Types install: ```npm i --save-dev @types/backbone```

## Angular CLI Library Setup

* Generate library: ```ng generate library ng-joint --prefix dgwnu```
* Add the following to ```./projects/ng-joint/package.json```  
  "peerDepedencies" add "jointjs":"^x.y.z"
  "name" change to "@zgwnu/ng-joint"
* Change ```tsconfig.json``` paths to

```
    "paths": {
      "@dgwnu/ng-joint": [
        "dist/ng-joint"
      ],
      "@dgwnu/ng-joint/*": [
        "dist/ng-joint/*"
      ]
    }
```

## Additional JointJs Requirements for Angular Framework

### Angular Styling

Add ```@import '~jointjs/dist/joint.css';``` to ```styles.scss```  

### Angular Components

* This use of Angular @ChildView to get the HTML ElemenRef. 
* Add "```encapsulation: ViewEncapsulation.None```" to "```@Component```"  
* Forcing to use the correct Type with cloning(). See example:  
  change "```this.rect2 = this.rect.clone()```"  
  to "```this.rect2 = this.rect.clone() as joint.shapes.standard.Rectangle```";  

See [NgJoint Library](projects/ng-joint/src/lib/ng-joint.component.ts)

## Additional HTML element coding using Material Tabs

To preserve Shape Stylings with Material Tab:  
```
<mat-tab label="UML Sc Demo">
        <ng-template matTabContent>
            <app-uml-sc-demo></app-uml-sc-demo>
        </ng-template>
</mat-tab>
```


## Compodoc

* [Usage](https://compodoc.app/guides/usage.html)

