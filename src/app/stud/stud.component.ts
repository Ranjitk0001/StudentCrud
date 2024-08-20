import { Component, OnInit } from '@angular/core';
import { DataService, Options } from '../service/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Student } from '../pojo/Student';

@Component({
  selector: 'app-stud',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './stud.component.html',
  styleUrl: './stud.component.css'
})
export class StudComponent implements OnInit{

  students:any=[];
  studObj:Student=new Student();
  options:Options=new Options();

  constructor(private dataService:DataService) {}

  ngOnInit(): void {
      this.fillList();
  }

  fillList(){
    this.dataService.getData("students", this.options).subscribe(data=>{
      this.students=data;
    
      // alert(JSON.stringify(data));
    });
  }


    clearData(){
      this.studObj.sno=0;
      this.studObj.sname="";
      this.studObj.age=0;
    }

    insertStud()
    {
      this.dataService.insertData("students",this.studObj, this.options).subscribe(
        data=>{
          this.fillList();
          alert("Data insert Successfully!!");
          this.clearData();
        }
      );
    }

    updateStud(sno:number){
    //  alert(sno);
    this.dataService.getData("students/"+sno, this.options).subscribe(data=>{
      this.studObj=data;
    
      // alert(JSON.stringify(data));
    });
    }
   
    editstud(){
      this.dataService.updateData("students",this.studObj, this.options).subscribe(
        data=>{
          this.fillList();
          alert("Data Updated Successfully!!");
          this.clearData();
        }
      );
    }

    deleteStud(sno:number){
      //  alert(sno);
      this.dataService.deleteData("students/"+sno, this.options).subscribe(data=>{
        this.fillList();
      });
      }
  
}
