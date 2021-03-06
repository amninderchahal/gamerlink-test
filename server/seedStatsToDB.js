import User from './models/user';

export default function () {
  User.count().exec((err, count) => {
    if (count > 0) {
      return;
    }


    const user1 = new User({
        displayName: "StrongMachine",
        lastUpdated: "1513277270",
        rankings: [
          {
            rank: "Gold II Division II",
            type: "Ranked Duel 1v1",
            rating: 634,
            gamesPlayed: 123,
            topPercentile: 83,
            rankImage: "gold-2"
          },
          {
            rank: "Silver III Division I",
            type: "Ranked Doubles 2v2",
            rating: 342,
            gamesPlayed: 43,
            topPercentile: 94,
            rankImage: "silver-3"
          },
          {
            rank: "Platinum I Division II",
            type: "Ranked Standard 3v3",
            rating: 753,
            gamesPlayed: 352,
            topPercentile: 65,
            rankImage: "platinum-1"
          }
        ],
        stats: {
          saves: 412,
          goals: 663,
          wins: 318
        }
    });
    const user2 = new User({
        displayName: "Thunterr",
        lastUpdated: "1513368763",
        rankings: [
          {
            rank: "Diamond II Division II",
            type: "Ranked Duel 1v1",
            rating: 2634,
            gamesPlayed: 764,
            topPercentile: 26,
            rankImage: "diamond-2"
          },
          {
            rank: "Diamond III Division I",
            type: "Ranked Doubles 2v2",
            rating: 2342,
            gamesPlayed: 433,
            topPercentile: 26,
            rankImage: "diamond-3"
          },
          {
            rank: "Diamond I Division II",
            type: "Ranked Standard 3v3",
            rating: 2753,
            gamesPlayed: 422,
            topPercentile: 21,
            rankImage: "diamond-1"
          }
        ],
        stats: {
          saves: 4753,
          goals: 5368,
          wins: 3589
        }
    });
    const user3 = new User({
        displayName: "Wise Owl",
        lastUpdated: "1513887163",
        rankings: [
          {
            rank: "Gold I Division II",
            type: "Ranked Duel 1v1",
            rating: 434,
            gamesPlayed: 13,
            topPercentile: 89,
            rankImage: "gold-1"
          },
          {
            rank: "Silver I Division I",
            type: "Ranked Doubles 2v2",
            rating: 355,
            gamesPlayed: 4,
            topPercentile: 94,
            rankImage: "silver-1"
          },
          {
            rank: "Gold I Division II",
            type: "Ranked Standard 3v3",
            rating: 553,
            gamesPlayed: 52,
            topPercentile: 75,
            rankImage: "gold-1"
          }
        ],
        stats: {
          saves: 42,
          goals: 63,
          wins: 54
        }
    });
    const user4 = new User({
      displayName: "Inverum",
      lastUpdated: "1515960763",
      rankings: [
        {
          rank: "Gold II Division II",
          type: "Ranked Duel 1v1",
          rating: 644,
          gamesPlayed: 193,
          topPercentile: 82,
          rankImage: "gold-2"
        },
        {
          rank: "Gold III Division I",
          type: "Ranked Doubles 2v2",
          rating: 463,
          gamesPlayed: 223,
          topPercentile: 54,
          rankImage: "gold-3"
        },
        {
          rank: "Platinum I Division II",
          type: "Ranked Standard 3v3",
          rating: 753,
          gamesPlayed: 552,
          topPercentile: 45,
          rankImage: "platinum-1"
        }
      ],
      stats: {
        saves: 521,
        goals: 883,
        wins: 568
      }
    });
    const user5 = new User({
      displayName: "Kovalo",
      lastUpdated: "1544818363",
      rankings: [
        {
          rank: "Grand Champion",
          type: "Ranked Duel 1v1",
          rating: 9001,
          gamesPlayed: 3248,
          topPercentile: 1,
          rankImage: "grand-champion"
        },
        {
          rank: "Champion III Division I",
          type: "Ranked Doubles 2v2",
          rating: 7387,
          gamesPlayed: 455,
          topPercentile: 3,
          rankImage: "champion-3"
        },
        {
          rank: "Champion I Division II",
          type: "Ranked Standard 3v3",
          rating: 8833,
          gamesPlayed: 523,
          topPercentile: 5,
          rankImage: "champion-1"
        }
      ],
      stats: {
        saves: 2345,
        goals: 2316,
        wins: 1022
      }
    });
    User.collection.insert([user1, user2, user3, user4, user5], (error) => {
      if (!error) {
        console.log('Inserted users successfully');
      }
    });
  });
}
