import UserModel from "../models/userModel.js";

export const getTrends = async (req, res) => {
  try {
    const allUsers = await UserModel.find();

    const tagsMap = {};

    for (const user of allUsers) {
      for (const tag of user.tags) {
        if (tagsMap[tag]) {
          tagsMap[tag]++;
        } else {
          tagsMap[tag] = 1;
        }
      }
    }
    console.log(tagsMap)

    const sortedTags = Object.entries(tagsMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map((tag) => tag[0]);

    res.status(200).json(sortedTags);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};


// Function to get users with a specific tag
// Function to get users with a specific tag
export const getUsers = async (req, res) => {
  try {
    // Extract the tag from the URL parameter
    console.log("hello" + JSON.stringify(req.body));
    const id= JSON.stringify(req.body.id);
    const trend=JSON.stringify(req.body.trend);
   
    console.log("id"+id);
    console.log("trend"+trend);

    // Find users whose tags array contains the given tag
    const usersWithTag = await UserModel.find({ tags: { $in: [trend] } });
    console.log("userswithTag"+usersWithTag);

    // Check for users
    if (usersWithTag.length === 0) {
      console.log("khali hai")
      res.status(404).send('No users found with this tag.');
      return;
    }

    // Get the logged-in user
    const loggedInUser =  await UserModel.findById(id);;

    // Calculate similarity score for each user with the logged-in user
      const similarityScores = usersWithTag.map((user) => {
      const loggedUserTags = new Set(loggedInUser.tags);
      const userTags = new Set(user.tags);

      const intersection = new Set([...loggedUserTags].filter((x) => userTags.has(x)));

      const similarityScore = intersection.size / (loggedUserTags.size + userTags.size - intersection.size);
      return { user, similarityScore };
    });

    // Sort users by similarity score in descending order
    const sortedUsers = similarityScores.sort((a, b) => b.similarityScore - a.similarityScore);
    const otherUsers = sortedUsers.filter((userObj) => userObj.user._id.toString() !== loggedInUser);


    // Filter and return the top 10 users with the highest similarity scores
    const topTenSimilarUsers = otherUsers.slice(1, 11).map((userObj) => userObj.user);

    // Send response with the top ten most similar users
    res.status(200).json(topTenSimilarUsers);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}