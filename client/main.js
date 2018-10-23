import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import {Resolutions} from "../api/mongo";

import './main.html';

/*
Template.body.onCreated(function bodyOnCreated(){
    this.state = new ReactiveDict();
});
*/

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

Template['body'].events({
    'submit .new-resolution'(events){
        //events.preventDefault();
        console.log(events);
        const target = events.target;
        const value = target.title.value;

        Resolutions.insert({
            title: value,
            createAt:new Date()
        })

        target.title.value='';
        return false;
    },
    'change .hide-finished input'(event){
        Session.set('hideStatus', event.target.checked);
        //instance.state.set('hideStatus', event.target.checked);
        /*sessionStorage.setItem('hideStatus',e.target.checked);
        console.log(e.target.checked);
        console.log(sessionStorage.getItem('hideStatus'));
        */
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



