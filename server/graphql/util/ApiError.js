export default class ApiError extends Error {
  constructor(status, message, path, body, timeThrown = new Date().getTime()) {
    super(message);
    console.log('#&&&&&^^^^^%%%%%%$$$$$$#####@@@@@@@@@');
    this.status = status;
    this.message = message;
    this.path = path;
    this.body = body;
    this.timeThrown = timeThrown;
  }
}
