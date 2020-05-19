import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces';

import { UserService } from '../../../services/user/user.service';
import { fadeIn, fadeInOut } from '../animations';

/**
 * Passport index
 */
@Component({
  selector: 'app-passport-index',
  templateUrl: './passport-index.component.html',
  animations: [fadeIn, fadeInOut],
  host: {
    class: 'mat-body-1',
  },
})
export class PassportIndexComponent {
  /**
   * Component theme.
   */
  @Input() public theme: 'primary' | 'accent' | 'warn';

  /**
   * UI title.
   */
  @Input() public title = 'Passport Index';

  /**
   * Indicates if mocked server should be used for http requests.
   */
  @Input() public mock = true;

  /**
   * Indicates if a particular passport mode is restricted:
   * - login
   * - signup
   * - null
   * null indicates that there is no mode restriction.
   */
  @Input() public restrictMode: 'login' | 'signup' | null = null;

  /**
   * Switches mode.
   */
  @Output() public switchMode: EventEmitter<string> = new EventEmitter();
  /**
   * Constructor.
   * @param userService User service
   */
  constructor(private readonly userService: UserService) {}

  /**
   * Emits mode change event.
   * @param mode mode that should be activated by widget component.
   */
  public modeChange(mode: 'login' | 'signup'): void {
    this.switchMode.emit(mode);
  }

  /**
   * Indicates if user is logged in.
   */
  public isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  /**
   * Returns current user object without token.
   */
  public user(): { name: string; email: string; organization: string } {
    const serviceModel: IUser = this.userService.getUser();
    const name: string = serviceModel.name;
    const email: string = serviceModel.email;
    const organization: string = serviceModel.organization;
    return { name, email, organization };
  }

  /**
   * Logs user out.
   */
  public logout(): void {
    this.userService.resetUser();
  }
}
