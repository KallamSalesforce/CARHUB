import { LightningElement } from 'lwc';
import ID from '@salesforce/user/Id'
import IS_GUEST from '@salesforce/user/isGuest'

export default class UserInformationDemo extends LightningElement {
    user_id = ID
    is_guest = IS_GUEST
}