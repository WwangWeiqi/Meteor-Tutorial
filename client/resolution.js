import { Template } from 'meteor/templating';
import './resolution.html';
import {Resolutions} from "../api/mongo";

Template['resolution'].onCreated(function tmpOncreate(){
    Meteor.subscribe('Resolutions');
})

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

    isOwner(){
        return this.owner === Meteor.userId();
    }

});


Template['resolution'].events({
    'click .toggle-checked'(){

        Meteor.call("updateResolution",this._id,this.checked);
    },
    'click button.delete'(){
        //console.log(this);
        Meteor.call("deleteResolution",this._id);
    },
    'click .toggle-private'(){
        Meteor.call("setPrivate",this._id,this.private);
    },
});

Accounts.ui.config({
    passwordSignupFields:"USERNAME_ONLY"
})


