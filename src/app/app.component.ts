import { Component } from '@angular/core';
declare let jsPDF:any;

@Component({
  selector: 'my-app',
  template: 
    `<h1>JSON to PDF app</h1>
    <div class="container" id="div1">
        <button id="create" (click)="convert()">Create file</button> 
    </div>
    `
})
export class AppComponent { 
  
  convert(){
    var item = {
      "Name" : "XYZ",
      "Age" : "22",
      "Gender" : "Male"
    };
    var doc = new jsPDF();
    var col = ["Details", "Values"];
    var rows = [];

    for(var key in item){
        var temp = [key, item[key]];
        rows.push(temp);
    }

    doc.autoTable(col, rows);

    doc.save('Test.pdf');
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/