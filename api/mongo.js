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
            createAt:new Date(),
            owner:Meteor.userId()
        });
    },
    /**
     * delete resolution
     * @method deleteResolution()
     * */
    deleteResolution(id){
        if (this.userId !== Meteor.userId()){
            throw new Meteor.Error('not-authorized');
        }
        Resolutions.remove(id);
    },
    /**
     * update resolution status checked/un-checked
     *
     * @method updateResolution()
     */
    updateResolution(id,checked){
        console.log(this.userId);
        console.log(Meteor.userId());
        Resolutions.update(id,{$set:{checked:!checked}});
    },
    /**
     * toggle private/public
     *
     * @method setPrivate()
     */
    setPrivate(id,private){

        Resolutions.update(id,{$set:{private:!private}});
    }

});