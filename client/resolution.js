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
        Meteor.call("updateResolution",this._id,this.checked);
    },
    'click button'(){
        //console.log(this);
        Meteor.call("deleteResolution",this.id);
    }
});

Accounts.ui.config({
    passwordSignupFields:"USERNAME_ONLY"
})

