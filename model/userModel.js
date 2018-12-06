/**
 * Created by vivh on 10/27/18 - 10:51 AM.
 */

var UserSchema = new UserSchema({
    name:{
        type:String,
        required: true
    },
    gender:{
        type:Uint32Array,
        default: 1
    },
    address:{
        type:String,
        required: true
    },
});

module.export = UserSchema;