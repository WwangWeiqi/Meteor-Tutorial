import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Resolutions = new Mongo.Collection('resolutions');





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