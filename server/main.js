//https://www.youtube.com/watch?v=3fcHsFBd_SY&index=10&list=PLLnpHn493BHECNl9I8gwos-hEfFrer7TV

import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

import '../api/mongo.js';
import {Resolutions} from "../api/mongo";

Meteor.methods({
    /**
     * add new resolution
     * @method addResolution()
     * */
    addResolution(value){
        Resolutions.insert({
            title: value,
            createAt:new Date()
        });
    },
    /**
     * delete resolution
     * @method deleteResolution()
     * */
    deleteResolution(id){
        Resolutions.remove(id);
    },
    /**
     * update resolution status checked/un-checked
     *
     * @method updateResolution()
     */
    updateResolution(id,checked){
        Resolutions.update(id,{$set:{checked:!checked}});
    },

});