import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const rankingSchema = new Schema({
    rank: String,
    type: String,
    rating: Number,
    gamesPlayed: Number,
    topPercentile: Number,
    rankImage: String
});

const userSchema = new Schema({
  displayName: String,
  lastUpdated: String,
  rankings:[rankingSchema],
  stats: {
    saves: Number,
    goals: Number,
    wins: Number
  }
});

export default mongoose.model('User', userSchema);
