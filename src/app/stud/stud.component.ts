import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stud',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './stud.component.html',
  styleUrl: './stud.component.css'
})
export class StudComponent implements OnInit{

  students:any=[];

  constructor(private dataService:DataService) {}

  ngOnInit(): void {
      this.dataService.getData().subscribe(data=>{
        this.students=data;
        
        // alert(JSON.stringify(data));
      })
  }
}
