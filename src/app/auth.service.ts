import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated1: boolean = false;

  constructor() {}

  // Implement your authentication logic here
  login(username: string, password: string): boolean {
    // Check if the provided credentials are valid
    // Set isAuthenticated to true if authentication is successful

    return this.isAuthenticated1;
  }

  logout(): void {
    // Perform any necessary logout logic
    this.isAuthenticated1 = false;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticated1;
  }
}
