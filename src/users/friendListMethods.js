const mongoose = require('mongoose');
const friendListModel = require('./friendListModel')

//CREATE OPERATION, add friend//
exports.addFriend = async(newFriendList) =>{
    try {
        let friend = new friendListModel(newFriendList)
        await friend.save()
        console.log('List of friends created')
    } catch (error) {
        console.log(error)
    }
    
    mongoose.connection.close()
};
//READ OPERATION, list friend//
exports.listFriend = async() =>{
    try {
        console.log(
        await friendListModel.find({})
        )
    } catch (error) {
        console.log(error)
    }

    mongoose.connection.close()
};
//UPDATE OPERATION, update friend//
exports.updateFriend = async(userQuery, userUpdate) =>{
    try {
        await friend.findOneAndUpdate({ title: userQuery }, { title: userUpdate });
      } catch (error) {
        console.log(error);
      }

    mongoose.connection.close()
};
//DELETE OPERATION, delete friend//
exports.deleteFriend = async(queryObj) =>{
    try {
        await friend.deleteOne(queryObj);
      } catch (error) {
        console.log(error);
      }

    mongoose.connection.close()
};
