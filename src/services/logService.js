import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://fd92a004697142b5afa3d8631d390e59@sentry.io/1411454"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
