const Prices = require("../models/price");

module.exports = {};

module.exports.create = (priceObj) => {
    return Prices.create(priceObj);
}

module.exports.getPrices = () => {
    return Prices.find({}).lean();
}

module.exports.getPricesById = (id) => {
    return Prices.findOne({ id }).lean();
}

module.exports.updatePricesById = (id, newData) => {
    return Prices.findOneAndUpdate({ id }, newData, { new: true }).lean();

}

module.exports.removePricesById = (id) => {
    return Prices.findOneAndDelete({ _id: id });
}

module.exports.getCoinStats = (coinId, days) => {
    // const coinStats = Prices.findOne({ id: coinId }).lean();
    const coinStats = Prices.aggregate([{ $match: { id: coinId } },
    { $addFields: { prices_slice: { $slice: ["$prices_daily", -(days + 1)] } } },
    { $project: { _id: 0, coinId: "$id", prices: { $cond: [{ $eq: [days, 1] }, "$prices_hourly", "$prices_slice"] } } },
    { $addFields: { start: { $first: "$prices" }, end: { $last: "$prices" } } },
    { $addFields: { "startPrice": { $last: "$start" }, "endPrice": { $last: "$end" } } },
    { $addFields: { change: { $subtract: ["$endPrice", "$startPrice"] } } },
    // { $project: { coinId: 1, change: 1 } },
    ]);
    return coinStats;
};