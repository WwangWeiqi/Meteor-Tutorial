//https://www.youtube.com/watch?v=3fcHsFBd_SY&index=10&list=PLLnpHn493BHECNl9I8gwos-hEfFrer7TV

import { Meteor } from 'meteor/meteor';
import {Resolutions} from "../api/mongo";

Meteor.startup(() => {
  // code to run on server at startup

});

import '../api/mongo.js';
Meteor.publish('Resolutions',function (){
    console.log(Meteor.userId() + "  " + this.userId);
    return Resolutions.find({
        $or:[
            {private:{$ne:true}},
            {owner:this.userId}
        ]
    });
})
