import { Template } from 'meteor/templating';
import './resolution.html';
import {Resolutions} from "../api/mongo";

Template['resolution'].helpers({
    /**
     * show resolutions list
     * @method resolutions()
     */
    resolutions(){
        //const instance = Template.instance();
        if (Session.get('hideStatus')){
            return Resolutions.find({checked:{$ne:true}});
        }
        return Resolutions.find({});
    },
    hideFinished(){
        return Session.get('hideStatus');
    }
});


Template['resolution'].events({
    'click .toggle-checked'(){
        Resolutions.update(this._id,{$set:{checked:!this.checked}});
    },
    'click button'(){
        //console.log(this);
        Resolutions.remove(this._id);
    }
});

Accounts.ui.config({
    passwordSignupFields:"USERNAME_ONLY"
})

