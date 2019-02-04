/**
 * Angular Component supported by NgJoint Library: JointJs HelloWorld Demo
 * Based on @see https://resources.jointjs.com/tutorial/hello-world
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-demo',
  templateUrl: './hello-world-demo.component.html',
  styleUrls: ['./hello-world-demo.component.scss']
})
export class HelloWorldDemoComponent implements OnInit {

  ngOnInit() {
  }

  onElementPointerClick(event: any) {
    console.log('onElementPointerClick', event);
  }

}
