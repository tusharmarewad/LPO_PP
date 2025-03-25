
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  forgot=false;
  otp_div=false;
  constructor(private router: Router,private ApicallService: ApicallService) { }

  // GoTo_home() {
  //   // Example static credentials
  //   const credentials = [
  //     { email: 'rm@gmail.com', password: '123', role: 'RM', route: '/Home' },
  //     { email: 'sm@gmail.com', password: '123', role: 'SM', route: '/sm-dashboard' },
  //     { email: 'bdm@gmail.com', password: '123', role: 'BDM', route: '/bdm-dashboard' },
  //     { email: 'lawyer1@gmail.com', password: '123', role: 'Lawyer1', route: '/lawyer1-dashboard' },
  //     { email: 'lawyer2@gmail.com', password: '123', role: 'Lawyer2', route: '/lawyer2-dashboard' },
  //     { email: 'builder@gmail.com', password: '123', role: 'Builder', route: '/builder-dashboard' },
  //     { email: 'cm@gmail.com', password: '123', role: 'CM', route: '/cm-dashboard' },
  //     { email: 'executor@gmail.com', password: '123', role: 'Executor', route: '/executor-dashboard' },
  //     { email: 'authority@gmail.com', password: '123', role: 'Authority', route: '/authority-dashboard' },
  //     { email: 'loan@gmail.com', password: '123', role: 'Loan', route: '/loan-dashboard' },
  //     { email: 'printer@gmail.com', password: '123', role: 'Printer', route: '/printer-dashboard' },
  //     { email: 'accountant@gmail.com', password: '123', role: 'Accountant', route: '/accountant-dashboard' },
  //     { email: 'srlawyer@gmail.com', password: '123', role: 'SrLawyer', route: '/sr-lawyer-dashboard' },
  //   ];
  
  //   const enteredEmail = (document.getElementById('email') as HTMLInputElement).value;
  //   const enteredPassword = (document.getElementById('password') as HTMLInputElement).value;
  
  //   const user = credentials.find(
  //     (cred) => cred.email === enteredEmail && cred.password === enteredPassword
  //   );
  
  //   if (user) {
  //     sessionStorage.setItem('userRole', user.role);
  //     // Navigate to the specific route based on role
  //     this.router.navigate([user.route]);
  //   } else {
  //     alert('Invalid Credentials');
  //   }
  // }
  

  GoTo_home() {
    const enteredEmail = (document.getElementById('email') as HTMLInputElement).value;
    const enteredPassword = (document.getElementById('password') as HTMLInputElement).value;

    const loginData = {
      email: enteredEmail,
      password: enteredPassword
    };

    console.log(loginData);

    this.ApicallService.login(loginData).subscribe(
      (response) => {
        if (response) {
          // Store user data in Local Storage
          localStorage.setItem('authToken', response.token); // Store token for future API calls
          localStorage.setItem('userId', response.user.id.toString());
          localStorage.setItem('userEmail', response.user.email);
          localStorage.setItem('userRole', response.user.role_id.toString());

          // Define role-based routes
          const roleRoutes: { [key: number]: string } = {
            1: '/lpo-admin-dashboard',
            11: '/Home',
            12: '/sm-dashboard',
            4: '/bdm-dashboard',
            6: '/lawyer1-dashboard',
            7: '/lawyer2-dashboard',
            15: '/builder-dashboard',
            3: '/cm-dashboard',
            8: '/executor-dashboard',
            17: '/authority-dashboard',
            13: '/loan-dashboard',
            16: '/printer-dashboard',
            9: '/accountant-dashboard',
            5: '/sr-lawyer-dashboard',
            10:'/builder-account-dashboard',
            //2:'/client-dashboard',
            14:'/builder-admin-dashboard'
          };

          // Get route based on role_id or set default route
          const redirectPath = roleRoutes[response.user.role_id] || '/default-dashboard';
          
          // Navigate to assigned dashboard
          this.router.navigate([redirectPath]);
        } else {
          alert(response.message || 'Invalid Credentials');
        }
      },
      (error) => {
        console.error('Login failed', error);
        alert('An error occurred while logging in. Please try again.');
      }
    );
  }


  GoTo_signup(){
    this.router.navigate(['/signup']);
  }
  GoTo_forgot(){
    // console.log('click');
    
    this.forgot=true;
  }
  GoTo_login(){
    this.forgot=false;
  }
  GoTo_verify(){
    this.otp_div=true;
  }

  
}