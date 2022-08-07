import {
  addNewPlayer,
  getPlayers,
  getPlayerWithID,
  updatePlayer,
  deletePlayer
} from "../controllers/playerControllers";

const routes = (app) => {
  app
    .route("/players")

    // GET ENDPOINT
    .get(getPlayers)

    // POST ENDPOINT
    .post(addNewPlayer);
  app
    .route("/player/:PlayerId")

    //get specific player
    .get(getPlayerWithID)

    //update specific player
    .put(updatePlayer)

    //delete specific player
    .delete(deletePlayer);
};

export default routes;
