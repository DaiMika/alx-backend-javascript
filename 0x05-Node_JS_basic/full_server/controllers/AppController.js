
/**
 * Contains the miscellaneous route handlers.
 * @author Maxyn Edogha <https://github.com/DaiMika>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;

