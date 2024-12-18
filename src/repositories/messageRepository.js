const {messagesModel} = require('../models')
const handleFactory = require('./handleFactory')

exports.createMessage = handleFactory.createOne(messagesModel);
exports.updateMessage = handleFactory.updateOne(messagesModel);
exports.getMessage = handleFactory.getOne(messagesModel);
exports.getMessageById = handleFactory.getOneId(messagesModel);
exports.deleteMessage = handleFactory.deleteOne(messagesModel);
exports.clearMessage = handleFactory.clearOne(messagesModel);
exports.activeMessage = handleFactory.activeOne(messagesModel);
exports.getAllMessages = handleFactory.getAll(messagesModel);
exports.countMessages = handleFactory.countDocuments(messagesModel);
exports.getMessageInstance = handleFactory.getModel(messagesModel);
exports.getMessageInstanceConstructor = handleFactory.getModelConstructor(messagesModel);
exports.bulkWriteMessages = handleFactory.bulkWrite(messagesModel);
exports.aggregateMessages = handleFactory.aggregate(messagesModel);
exports.distinctMessages = handleFactory.distinct(messagesModel);
exports.findOneAndDeleteMessage = handleFactory.findOneAndDelete(messagesModel);
exports.findByIdAndReplaceMessage = handleFactory.findByIdAndReplace(messagesModel);
exports.updateManyMessages = handleFactory.updateMany(messagesModel);
exports.transactionMessages = handleFactory.transaction;
exports.populateVirtualsMessage = handleFactory.populateVirtuals;