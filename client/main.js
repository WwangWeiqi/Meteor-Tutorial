import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import {Resolutions} from "../api/mongo";

import './main.html';
import './resolution.js';

/*
Template.body.onCreated(function bodyOnCreated(){
    this.state = new ReactiveDict();
});
*/


Template['body'].events({
    'submit .new-resolution'(events){
        //events.preventDefault();

        const target = events.target;
        const value = target.title.value;
        //const user = target.title.dataset.username;
        /**
         * attributes和DomStringMap（dataset）区别
         * */
        console.log(target.title.attributes); // all attributes
        console.log(target.title.dataset); //JSON object of attributes start with data-
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




