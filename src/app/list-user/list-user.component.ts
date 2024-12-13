import { Component } from '@angular/core';
import { UserModel } from '../../model/user.model';
import { UserService } from '../../services/user.service';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';


@Component({
  selector: 'app-list-user',
  imports: [RouterModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {
  users: UserModel[] = [];
  constructor(private userService: UserService, private router: Router){}
  ngOnInit() {
    this.userService.getUsers().subscribe((d: any) => this.users = d)
    console.log(this.userService.getUsers())
  }
  editUser(nationalCode:string): void{
    this.router.navigate(['/productedit',nationalCode]);
  }
  deleteUser(nationalCode:string){
    console.log('حذف کاربر با شناسه:', nationalCode);
  }
}
